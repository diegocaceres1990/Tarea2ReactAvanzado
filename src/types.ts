export const estadosSolicitud = ["pendiente", "aprobada", "prestada", "devuelta"] as const;

export type EstadoSolicitud = typeof estadosSolicitud[number];

export type Solicitud = {
  codigo: string;
  recurso: string;
  categoria: string;
  solicitante: string;
  fechaDevolucion: string | null;
  estado: EstadoSolicitud;
};

export type FiltroEstado = EstadoSolicitud | "todos";

export type CriteriosBusqueda = {
  texto: string;
  estado: FiltroEstado;
};

export type EstadoPanel = "filtrando" | "listo";
