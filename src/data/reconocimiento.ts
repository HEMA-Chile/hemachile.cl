/**
 * Solicitud de reconocimiento de HEMA como modalidad deportiva.
 * Enlaza a la versión pública del documento en Google Docs (sin cédulas,
 * domicilios, correos personales ni firmas), que se mantiene sincronizada con
 * la solicitud principal. Si cambia el documento, basta con cambiar DOCUMENTO.
 */
const DOCUMENTO = '1ODosOsV-CN2M_2G4M-r50utwoT3yCZqF9ksAmA2aTWo'

export const SOLICITUD = {
  /** Fecha de presentación ante el Ministerio del Deporte. */
  fecha: '2026-11-23',
  vista: `https://docs.google.com/document/d/${DOCUMENTO}/preview`,
  abrir: `https://docs.google.com/document/d/${DOCUMENTO}/view`,
  descargar: `https://docs.google.com/document/d/${DOCUMENTO}/export?format=pdf`,
}
