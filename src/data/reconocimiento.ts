/**
 * Versión pública de la solicitud de reconocimiento de HEMA como modalidad
 * deportiva (Google Docs, sin cédulas, domicilios, correos ni firmas).
 * El documento debe estar compartido como "Cualquier persona con el enlace".
 * Para publicar otra versión, reemplaza el ID.
 */
const ID_DOC = '15YULRvrSHPHbnf4vSopFe5CH7uaZm_gdYjrWda4rgVQ'

export const SOLICITUD = {
  vista: `https://docs.google.com/document/d/${ID_DOC}/preview`,
  abrir: `https://docs.google.com/document/d/${ID_DOC}/edit?usp=sharing`,
  descargar: `https://docs.google.com/document/d/${ID_DOC}/export?format=pdf`,
}
