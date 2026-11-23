/**
 * Datos de IFHEMA (International Federation of Historical European Martial
 * Arts), tomados de https://www.ifhema.org (páginas About, Members e IFHEMA
 * Cup) en noviembre de 2026. Si cambia la lista de miembros, se edita aquí.
 */
export const IFHEMA = {
  sitio: "https://www.ifhema.org",
  miembros: "https://www.ifhema.org/index.php/members/",
  copa: "https://www.ifhema.org/index.php/ifhema-cup/",
  /** Mes en que se revisó la lista de miembros. */
  revisado: { es: "noviembre de 2026", en: "November 2026" },
};

type Pais = { es: string; en: string };

/** Federaciones miembro identificables en el sitio de IFHEMA. */
export const PAISES_MIEMBROS: Pais[] = [
  { es: "Alemania", en: "Germany" },
  { es: "Austria", en: "Austria" },
  { es: "Eslovaquia", en: "Slovakia" },
  { es: "Francia", en: "France" },
  { es: "Grecia", en: "Greece" },
  { es: "Hungría", en: "Hungary" },
  { es: "Irlanda", en: "Ireland" },
  { es: "Países Bajos", en: "Netherlands" },
  { es: "Polonia", en: "Poland" },
  { es: "Suiza", en: "Switzerland" },
];

/** Países con federaciones u organizaciones observadoras. */
export const PAISES_OBSERVADORES: (Pais & { chile?: boolean })[] = [
  { es: "Argentina", en: "Argentina" },
  { es: "Australia", en: "Australia" },
  { es: "Chile", en: "Chile", chile: true },
  { es: "Costa Rica", en: "Costa Rica" },
  { es: "Malasia", en: "Malaysia" },
  { es: "Paraguay", en: "Paraguay" },
  { es: "Perú", en: "Peru" },
  { es: "Ruanda", en: "Rwanda" },
  { es: "Taiwán", en: "Taiwan" },
  { es: "Vietnam", en: "Vietnam" },
];
