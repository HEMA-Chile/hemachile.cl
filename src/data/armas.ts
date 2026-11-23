/**
 * Catálogo de especialidades. Corresponde a las 11 especialidades de la
 * solicitud de reconocimiento de HEMA ante el Ministerio del Deporte.
 * Cada club referencia estas claves, así los nombres quedan escritos
 * igual en todo el sitio y traducidos.
 */
export const ARMAS = {
  espadaLarga: { es: 'Espada larga', en: 'Longsword' },
  espadaRopera: { es: 'Espada ropera', en: 'Rapier' },
  roperaYDaga: { es: 'Espada ropera y daga', en: 'Rapier and dagger' },
  roperaYAcompanante: { es: 'Espada ropera y acompañante', en: 'Rapier and companion' },
  espadaYBroquel: { es: 'Espada y broquel', en: 'Sword and buckler' },
  espadaDeLado: { es: 'Espada de lado (sidesword)', en: 'Sidesword' },
  sableMilitar: { es: 'Sable militar', en: 'Military sabre' },
  messer: { es: 'Messer', en: 'Messer' },
  espadin: { es: 'Espadín', en: 'Smallsword' },
  daga: { es: 'Daga de rondel', en: 'Rondel dagger' },
  bastonDeEsgrima: { es: 'Bastón de esgrima (singlestick)', en: 'Singlestick' },
} as const

export type Arma = keyof typeof ARMAS
