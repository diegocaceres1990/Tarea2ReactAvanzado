import { useState } from "react";
import { FormularioBusqueda } from "../components/FormularioBusqueda";
import { IndicadorEstado } from "../components/IndicadorEstado";
import { TarjetaSolicitud } from "../components/TarjetaSolicitud";
import { WorkspaceSection } from "../components/WorkspaceSection";
import { solicitudes } from "../data";
import { type CriteriosBusqueda, type EstadoPanel, type Solicitud } from "../types";

function filtrarSolicitudes(lista: Solicitud[], criterios: CriteriosBusqueda): Solicitud[] {
  return lista.filter((solicitud) =>
    (solicitud.recurso.includes(criterios.texto) || solicitud.solicitante.includes(criterios.texto)) &&
    (criterios.estado === "todos" || solicitud.estado === criterios.estado)
  );
}

export function PanelSolicitudes() {
  const [criterios, setCriterios] = useState<CriteriosBusqueda>({ texto: "", estado: "todos" });
  const [estadoPanel, setEstadoPanel] = useState<EstadoPanel>("listo");
  const [marcadas, setMarcadas] = useState<string[]>([]);

  const resultados = filtrarSolicitudes(solicitudes, criterios);
  const solicitudesMarcadas = solicitudes.filter((solicitud) => marcadas.includes(solicitud.codigo));

  const handleBuscar = (nuevosCriterios: CriteriosBusqueda) => {
    setEstadoPanel("filtrando");
    setCriterios(nuevosCriterios);
    setEstadoPanel("listo");
  };

  const handleMarcar = (codigo: string) => {
    setMarcadas((actuales) =>
      actuales.includes(codigo) ? actuales.filter((marcado) => marcado !== codigo) : [...actuales, codigo]
    );
  };

  return (
    <>
      <WorkspaceSection>
        <header>
          <h1>MediaDesk</h1>
        </header>
        <FormularioBusqueda onBuscar={handleBuscar} />
        <IndicadorEstado estado={estadoPanel}>
          {(estado) => (estado === "filtrando" ? "Filtrando solicitudes..." : "Lista disponible")}
        </IndicadorEstado>
        <p>Resultados: {resultados.length}</p>
        {resultados.length > 0 ? (
          resultados.map((solicitud) => (
            <TarjetaSolicitud
              key={solicitud.codigo}
              solicitud={solicitud}
              marcada={marcadas.includes(solicitud.codigo)}
              onMarcar={handleMarcar}
            />
          ))
        ) : (
          <p>No hay solicitudes que coincidan con la busqueda.</p>
        )}
      </WorkspaceSection>

      <WorkspaceSection>
        <h2>Resumen</h2>
        <p>Marcadas para revision: {solicitudesMarcadas.length}</p>
        {solicitudesMarcadas.map((solicitud) => (
          <TarjetaSolicitud
            key={solicitud.codigo}
            solicitud={solicitud}
            marcada
            onMarcar={handleMarcar}
            variante="compacta"
          />
        ))}
      </WorkspaceSection>
    </>
  );
}
