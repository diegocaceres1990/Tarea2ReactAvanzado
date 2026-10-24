import { useState } from "react";
import { estadosSolicitud, type CriteriosBusqueda, type FiltroEstado } from "../types";

type FormularioBusquedaProps = {
  onBuscar: (criterios: CriteriosBusqueda) => void;
};

export function FormularioBusqueda({ onBuscar }: FormularioBusquedaProps) {
  const [texto, setTexto] = useState("");
  const [estado, setEstado] = useState<FiltroEstado>("todos");

  const handleTexto = (event: React.ChangeEvent<HTMLInputElement>) => setTexto(event.currentTarget.value);

  const handleEstado = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = event.currentTarget.value;
    setEstado(estadosSolicitud.find((opcion) => opcion === valor) ?? "todos");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onBuscar({ texto, estado });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={texto} onChange={handleTexto} />
      <select value={estado} onChange={handleEstado}>
        <option value="todos">todos</option>
        {estadosSolicitud.map((opcion) => (
          <option key={opcion} value={opcion}>{opcion}</option>
        ))}
      </select>
      <button type="submit">Buscar</button>
    </form>
  );
}
