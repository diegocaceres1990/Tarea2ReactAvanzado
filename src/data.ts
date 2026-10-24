import { type Solicitud } from "./types";

export const solicitudes: Solicitud[] = [
  { codigo: "SOL-001", recurso: "Camara de video", categoria: "camara", solicitante: "Diego", fechaDevolucion: "2026-10-28", estado: "aprobada" },
  { codigo: "SOL-002", recurso: "Microfono", categoria: "audio", solicitante: "Alejandro", fechaDevolucion: "2026-10-25", estado: "prestada" },
  { codigo: "SOL-003", recurso: "Luces", categoria: "iluminacion", solicitante: "Laura", fechaDevolucion: null, estado: "pendiente" },
  { codigo: "SOL-004", recurso: "Proyector", categoria: "proyeccion", solicitante: "Nicole", fechaDevolucion: "2026-10-20", estado: "devuelta" },
];
