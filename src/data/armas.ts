/**
 * Catálogo de armas/disciplinas. Cada club referencia estas claves,
 * así los nombres quedan escritos igual en todo el sitio y traducidos.
 * Para agregar un arma nueva, añade una entrada aquí.
 */
export const ARMAS = {
  espadaLarga: { es: 'Espada larga', en: 'Longsword' },
  espadaRopera: { es: 'Espada ropera', en: 'Rapier' },
  sableMilitar: { es: 'Sable militar', en: 'Military saber' },
  espadaYBroquel: { es: 'Espada y broquel', en: 'Sword and buckler' },
  espadaDeMano: { es: 'Espada de mano', en: 'Arming sword' },
  messer: { es: 'Messer', en: 'Messer' },
  montante: { es: 'Montante', en: 'Montante' },
  ringen: { es: 'Ringen', en: 'Ringen' },
} as const

export type Arma = keyof typeof ARMAS
