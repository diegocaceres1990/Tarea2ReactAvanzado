import { type EstadoPanel } from "../types";

type IndicadorEstadoProps = {
  estado: EstadoPanel;
  children: (estado: EstadoPanel) => React.ReactNode;
};

export function IndicadorEstado({ estado, children }: IndicadorEstadoProps) {
  return <p>{children(estado)}</p>;
}
