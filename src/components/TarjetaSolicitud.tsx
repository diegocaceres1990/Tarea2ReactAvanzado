import { type Solicitud } from "../types";

type TarjetaSolicitudProps = {
  solicitud: Solicitud;
  marcada: boolean;
  onMarcar: (codigo: string) => void;
  variante?: "completa" | "compacta";
};

export function TarjetaSolicitud({ solicitud, marcada, onMarcar, variante = "completa" }: TarjetaSolicitudProps) {
  return (
    <article>
      <h4>{solicitud.codigo} - {solicitud.recurso}</h4>
      <p>Estado: {solicitud.estado}</p>
      {variante === "completa" && (
        <>
          <p>Categoria: {solicitud.categoria}</p>
          <p>Solicitante: {solicitud.solicitante}</p>
          <p>Devolucion: {solicitud.fechaDevolucion ?? "sin fecha confirmada"}</p>
        </>
      )}
      <button type="button" onClick={() => onMarcar(solicitud.codigo)}>
        {marcada ? "Quitar de revision" : "Marcar para revision"}
      </button>
    </article>
  );
}
