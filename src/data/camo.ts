/**
 * EDICIONES DEL CAMO (Congreso de Artes Marciales Occidentales)
 * =============================================================
 * Para agregar una edición, copia un bloque y complétalo. Los títulos de
 * charlas y talleres se muestran tal cual en ambos idiomas.
 * Fuente: solicitud de reconocimiento de HEMA (sección 12.1) y
 * publicaciones de HEMA Chile y de los clubes.
 */
export interface Actividad {
  titulo: string
  /** Club, organización o persona a cargo. */
  aCargo?: string
  /** Día dentro del programa, si se conoce (p. ej. «Sábado 29»). */
  dia?: { es: string; en: string }
}

export interface EdicionCamo {
  anio: number
  /** Número de edición en romanos, solo si está documentado. */
  numero?: string
  fecha?: { es: string; en: string }
  lugar?: string
  organiza?: string
  descripcion: { es: string; en: string }
  actividades: Actividad[]
}

const sab = { es: 'Sábado 29', en: 'Saturday 29' }
const dom = { es: 'Domingo 30', en: 'Sunday 30' }

export const EDICIONES_CAMO: EdicionCamo[] = [
  {
    anio: 2026,
    fecha: { es: '29 y 30 de agosto', en: '29–30 August' },
    lugar: 'Gimnasio del Campus Pelluco, Universidad Austral de Chile, Puerto Montt',
    organiza: 'Academia de Esgrima Histórica de Chile – Puerto Montt',
    descripcion: {
      es: 'Se realizó junto con el encuentro Cascadas de la zona sur, por segundo año consecutivo en el Campus Pelluco. Reunió a 23 representantes de clubes de Viña del Mar, Santiago, Temuco, Valdivia, Osorno, Purranque y Puerto Montt, y alternó bloques de sparring libre con talleres y charlas a cargo de seis organizaciones.',
      en: 'Held together with the southern Cascadas meeting, for the second year in a row at the Pelluco Campus. It brought together 23 club representatives from Viña del Mar, Santiago, Temuco, Valdivia, Osorno, Purranque and Puerto Montt, alternating open sparring with workshops and talks led by six organisations.',
    },
    actividades: [
      { dia: sab, titulo: 'Esgrima histórica escolar', aCargo: 'Esgrima Histórica Valdivia' },
      { dia: sab, titulo: 'Pliometría aplicada a deportes de contacto', aCargo: 'Esgrima Histórica Atacama' },
      { dia: sab, titulo: 'Hoja de ruta hacia una federación deportiva de HEMA', aCargo: 'HEMA Chile' },
      { dia: sab, titulo: 'Ringen am Schwert (lucha en la espada)', aCargo: 'Virtus Esgrima Histórica' },
      { dia: sab, titulo: 'Desarmes ejecutables del Codex Wallerstein', aCargo: 'AEHCh Puerto Montt' },
      { dia: sab, titulo: 'Introducción al espadín francés', aCargo: 'Esgrima Histórica Valdivia' },
      { dia: dom, titulo: 'Los arquetipos de esgrima de Joachim Meyer', aCargo: 'Esgrima Histórica Valdivia' },
      { dia: dom, titulo: 'Conversatorio: motivación en el entrenamiento', aCargo: 'AEHCh Puerto Montt' },
      { dia: dom, titulo: 'Dinámicas y juegos de sparring', aCargo: 'Esgrima Histórica Valdivia' },
      { dia: dom, titulo: 'Sistemas de lucha de Ott Jud', aCargo: 'Esgrima Histórica Temuco' },
      { dia: dom, titulo: 'Introducción al montante ibérico', aCargo: 'Esgrima Histórica Valdivia' },
    ],
  },
  {
    anio: 2025,
    fecha: { es: '18 al 20 de abril', en: '18–20 April' },
    lugar: 'Universidad Austral de Chile, Puerto Montt',
    organiza: 'AEHCh Puerto Montt y HEMA Chile',
    descripcion: {
      es: 'Abierto también a agrupaciones no afiliadas a HEMA Chile, puso el acento en los sistemas de arbitraje.',
      en: 'Also open to clubs outside HEMA Chile, it focused on refereeing systems.',
    },
    actividades: [
      { titulo: 'Dobles y contragolpe (afterblow)' },
      { titulo: 'Arbitraje y reglamentación' },
      { titulo: 'Verdadera Destreza' },
      { titulo: 'Herramientas para afrontar la lucha en esgrima histórica', aCargo: 'Virtus Esgrima Histórica' },
      { titulo: 'Adquisición de equipamiento para torneos (módulo teórico)', aCargo: 'Praelium Australis' },
      { titulo: 'Caídas básicas aplicadas al sparring (módulo práctico)', aCargo: 'Praelium Australis' },
    ],
  },
  {
    anio: 2024,
    fecha: { es: '29 y 30 de marzo', en: '29–30 March' },
    lugar: 'Liceo Ciudad de Brasilia, Santiago',
    descripcion: {
      es: 'Abierto también a agrupaciones no afiliadas a HEMA Chile, combinó talleres, mesas participativas y sparring libre.',
      en: 'Also open to clubs outside HEMA Chile, it combined workshops, participatory round tables and open sparring.',
    },
    actividades: [
      { titulo: 'Principios fundamentales de lucha', aCargo: 'Víctor Salgado (Virtus Esgrima Histórica)' },
      { titulo: '«Más atajos, menos tajos»: espada ropera según la Verdadera Destreza', aCargo: 'Nicolás Maruri (AEHCh)' },
      { titulo: 'Esgrima histórica y la formación temprana', aCargo: 'Ítalo Mora (Academia de Esgrima Histórica Bolognese)' },
      { titulo: 'Mesa participativa: códigos de conducta y toma de conciencia en torneos deportivos', aCargo: 'AEHCh, sede Concepción' },
      { titulo: 'Aspectos normativos del deporte' },
      { titulo: 'Psicología del deporte y el rendimiento', aCargo: 'Cristóbal Toledo, psicólogo deportivo' },
      { titulo: 'Introducción al sable según Alfred Hutton', aCargo: 'Renato Castro (Praelium Australis)' },
      { titulo: 'Gestión del combate', aCargo: 'Luis Castillo (Academia de Esgrima Histórica Bolognese)' },
      { titulo: 'Introducción a la daga de Fiore dei Liberi', aCargo: 'Juan Ávalos (Virtus Esgrima Histórica)' },
    ],
  },
  {
    anio: 2023,
    fecha: { es: '29 y 30 de abril', en: '29–30 April' },
    lugar: 'Santiago',
    descripcion: {
      es: 'Incluyó talleres y el Torneo de Novatos.',
      en: 'It included workshops and the Novice Tournament.',
    },
    actividades: [],
  },
  {
    anio: 2022,
    numero: 'VIII',
    fecha: { es: '13 y 14 de agosto', en: '13–14 August' },
    lugar: 'Valdivia',
    organiza: 'Esgrima Histórica Valdivia',
    descripcion: {
      es: 'Incluyó talleres teórico-prácticos y el Torneo de Novatos.',
      en: 'It included theory-and-practice workshops and the Novice Tournament.',
    },
    actividades: [],
  },
  {
    anio: 2018,
    numero: 'VI',
    descripcion: {
      es: 'Incluyó un torneo experimental, organizado por la Sociedad de Esgrima Histórica de Aconcagua, para probar sistemas de arbitraje y puntuación.',
      en: 'It included an experimental tournament, organised by the Sociedad de Esgrima Histórica de Aconcagua, to test refereeing and scoring systems.',
    },
    actividades: [],
  },
  {
    anio: 2017,
    numero: 'V',
    fecha: { es: 'Febrero', en: 'February' },
    descripcion: {
      es: 'Al término de esta edición, los clubes organizadores fundaron HEMA Chile.',
      en: 'At the end of this edition, the organising clubs founded HEMA Chile.',
    },
    actividades: [],
  },
]
