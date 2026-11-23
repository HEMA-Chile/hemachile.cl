import type { Arma } from './armas'

/**
 * Contenido de la página «¿Qué es HEMA?». Los datos de equipamiento, reglas
 * y cifras de Chile salen de la solicitud de reconocimiento (nov. 2026).
 */
export type Texto = { es: string; en: string }

export type Silueta =
  | 'larga'
  | 'broquel'
  | 'ropera'
  | 'roperaDaga'
  | 'roperaBroquel'
  | 'lado'
  | 'sable'
  | 'messer'
  | 'espadin'
  | 'rondel'
  | 'baston'

export interface ArmaHistorica {
  id: Arma
  silueta: Silueta
  /** Años aproximados en que la documentan los tratados. */
  desde: number
  hasta: number
  siglos: Texto
  manos: Texto
  texto: Texto
  fuentes: string
}

export const INICIO = 1300
export const FIN = 1900

export const ARMAS_HISTORICAS: ArmaHistorica[] = [
  {
    id: 'espadaYBroquel',
    silueta: 'broquel',
    desde: 1300,
    hasta: 1600,
    siglos: { es: 'Siglos XIV a XVI', en: '14th–16th centuries' },
    manos: {
      es: 'Una mano y escudo pequeño',
      en: 'One hand plus a small shield',
    },
    texto: {
      es: 'El manual de esgrima más antiguo que se conserva, de hacia 1300, enseña justo esto: espada en una mano y broquel en la otra.',
      en: 'The oldest surviving fencing manual, from around 1300, teaches exactly this: sword in one hand, buckler in the other.',
    },
    fuentes: 'Manuscrito I.33',
  },
  {
    id: 'espadaLarga',
    silueta: 'larga',
    desde: 1350,
    hasta: 1600,
    siglos: { es: 'Siglos XIV a XVI', en: '14th–16th centuries' },
    manos: { es: 'Dos manos', en: 'Two hands' },
    texto: {
      es: 'La más practicada en el mundo y en Chile. Corta, estoca y también lucha cuerpo a cuerpo.',
      en: 'The most widely practised, worldwide and in Chile. It cuts, thrusts and grapples.',
    },
    fuentes: 'Liechtenauer, Fiore dei Liberi, Meyer',
  },
  {
    id: 'daga',
    silueta: 'rondel',
    desde: 1350,
    hasta: 1500,
    siglos: { es: 'Siglos XIV y XV', en: '14th–15th centuries' },
    manos: { es: 'Una mano', en: 'One hand' },
    texto: {
      es: 'Corta y rápida, con dos discos que protegen la mano. Se combina con agarres y desarmes.',
      en: 'Short and fast, with two discs guarding the hand. It mixes with grabs and disarms.',
    },
    fuentes: 'Fiore dei Liberi, Talhoffer',
  },
  {
    id: 'messer',
    silueta: 'messer',
    desde: 1400,
    hasta: 1600,
    siglos: { es: 'Siglos XV y XVI', en: '15th–16th centuries' },
    manos: { es: 'Una mano', en: 'One hand' },
    texto: {
      es: '«Cuchillo» en alemán: un solo filo, hoja apenas curva y un clavo lateral que cubre la mano.',
      en: '“Knife” in German: a single edge, a slightly curved blade and a side nail that covers the hand.',
    },
    fuentes: 'Lecküchner',
  },
  {
    id: 'espadaDeLado',
    silueta: 'lado',
    desde: 1500,
    hasta: 1620,
    siglos: { es: 'Siglo XVI', en: '16th century' },
    manos: { es: 'Una mano', en: 'One hand' },
    texto: {
      es: 'También llamada sidesword. Corta y estoca por igual, con anillos que protegen los dedos.',
      en: 'Cuts and thrusts equally well, with rings that protect the fingers.',
    },
    fuentes: 'Marozzo, Manciolino',
  },
  {
    id: 'espadaRopera',
    silueta: 'ropera',
    desde: 1550,
    hasta: 1700,
    siglos: { es: 'Siglos XVI y XVII', en: '16th–17th centuries' },
    manos: { es: 'Una mano', en: 'One hand' },
    texto: {
      es: 'Larga, fina y pensada para la estocada. Es la espada civil del Siglo de Oro, con tratados en castellano.',
      en: 'Long, slender and built for the thrust: the civilian sword of the Spanish Golden Age.',
    },
    fuentes: 'Carranza, Fabris, Capoferro',
  },
  {
    id: 'roperaYDaga',
    silueta: 'roperaDaga',
    desde: 1550,
    hasta: 1700,
    siglos: { es: 'Siglos XVI y XVII', en: '16th–17th centuries' },
    manos: { es: 'Un arma en cada mano', en: 'A weapon in each hand' },
    texto: {
      es: 'La daga en la mano izquierda desvía la hoja rival y abre el camino a la ropera.',
      en: 'The left-hand dagger turns the opposing blade aside and opens the way for the rapier.',
    },
    fuentes: 'Capoferro, Giganti',
  },
  {
    id: 'roperaYAcompanante',
    silueta: 'roperaBroquel',
    desde: 1550,
    hasta: 1700,
    siglos: { es: 'Siglos XVI y XVII', en: '16th–17th centuries' },
    manos: { es: 'Ropera y un implemento', en: 'Rapier plus a companion' },
    texto: {
      es: 'La otra mano lleva capa, broquel o rodela, como enseñan los tratados de la época.',
      en: 'The off hand carries a cloak, buckler or round shield, as the period treatises teach.',
    },
    fuentes: 'Di Grassi, Capoferro',
  },
  {
    id: 'espadin',
    silueta: 'espadin',
    desde: 1680,
    hasta: 1800,
    siglos: { es: 'Siglo XVIII', en: '18th century' },
    manos: { es: 'Una mano', en: 'One hand' },
    texto: {
      es: 'Liviano y casi solo de estocada. Es el antepasado directo del florete y la espada olímpicos.',
      en: 'Light and almost purely a thrusting weapon: the direct ancestor of the Olympic foil and épée.',
    },
    fuentes: 'Angelo',
  },
  {
    id: 'sableMilitar',
    silueta: 'sable',
    desde: 1750,
    hasta: 1900,
    siglos: { es: 'Siglos XVIII y XIX', en: '18th–19th centuries' },
    manos: { es: 'Una mano', en: 'One hand' },
    texto: {
      es: 'Hoja curva y guarda que cubre la mano. Es el sable de los ejércitos, distinto del sable olímpico.',
      en: 'A curved blade and a guard that covers the hand: the army sabre, not the Olympic one.',
    },
    fuentes: 'Roworth, Hutton',
  },
  {
    id: 'bastonDeEsgrima',
    silueta: 'baston',
    desde: 1780,
    hasta: 1900,
    siglos: { es: 'Siglo XIX', en: '19th century' },
    manos: { es: 'Una mano', en: 'One hand' },
    texto: {
      es: 'Un bastón de madera con cazoleta, creado para entrenar sable. Liviano y bueno para empezar.',
      en: 'A wooden stick with a basket hilt, made for sabre training. Light and good for beginners.',
    },
    fuentes: 'Allanson-Winn',
  },
]

/** Lo que hace seguro al simulador (lámina del inicio). */
export const SIMULADOR: Texto[] = [
  {
    es: 'Pesa entre 1,3 y 1,7 kg, no diez',
    en: 'Weighs 1.3 to 1.7 kg, not ten',
  },
  {
    es: 'Sin filo: bordes de 3 mm o más',
    en: 'No edge: sides 3 mm thick or more',
  },
  {
    es: 'Flexible: se dobla en la estocada',
    en: 'Flexible: it bends on the thrust',
  },
  { es: 'Punta roma y protegida', en: 'Blunt, covered tip' },
]

export type Pieza = 'careta' | 'gorjal' | 'chaqueta' | 'guantes' | 'articulaciones' | 'simulador'

export const EQUIPO: { id: Pieza; nombre: Texto; texto: Texto }[] = [
  {
    id: 'careta',
    nombre: { es: 'Careta', en: 'Mask' },
    texto: {
      es: 'Malla de acero que resiste 1.600 N, la misma norma de la esgrima olímpica, con protección para la nuca.',
      en: 'Steel mesh rated to 1,600 N, the Olympic fencing standard, with back-of-head protection.',
    },
  },
  {
    id: 'gorjal',
    nombre: { es: 'Gorjal', en: 'Gorget' },
    texto: {
      es: 'Pieza rígida que cubre el cuello y la garganta.',
      en: 'A rigid piece covering the neck and throat.',
    },
  },
  {
    id: 'chaqueta',
    nombre: { es: 'Chaqueta acolchada', en: 'Padded jacket' },
    texto: {
      es: 'Resiste la perforación (350 N o más) y amortigua los golpes.',
      en: 'Puncture-resistant (350 N or more) and padded against blows.',
    },
  },
  {
    id: 'guantes',
    nombre: { es: 'Guantes rígidos', en: 'Rigid gloves' },
    texto: {
      es: 'Las manos son el blanco más expuesto: van cubiertas con placas.',
      en: 'Hands are the most exposed target, so they are covered in plates.',
    },
  },
  {
    id: 'articulaciones',
    nombre: { es: 'Codos, rodillas y tibias', en: 'Elbows, knees and shins' },
    texto: {
      es: 'Protecciones duras sobre cada articulación.',
      en: 'Hard guards over every joint.',
    },
  },
  {
    id: 'simulador',
    nombre: { es: 'Simulador', en: 'Simulator' },
    texto: {
      es: 'La «espada»: acero sin filo, flexible y de punta roma. Se revisa antes de cada combate.',
      en: 'The “sword”: unsharpened, flexible steel with a blunt tip, checked before every bout.',
    },
  },
]

export const JUGADAS: { accion: Texto; vale: boolean; porQue: Texto }[] = [
  {
    accion: {
      es: 'Una estocada limpia al torso: la hoja se dobla.',
      en: 'A clean thrust to the torso: the blade bends.',
    },
    vale: true,
    porQue: {
      es: 'Punta, con control y calidad. Así se gana.',
      en: 'Point, with control and quality. That is how you score.',
    },
  },
  {
    accion: {
      es: 'Un golpe con el plano de la hoja.',
      en: 'A hit with the flat of the blade.',
    },
    vale: false,
    porQue: {
      es: 'Solo cuentan el filo y la punta.',
      en: 'Only the edge and the point count.',
    },
  },
  {
    accion: {
      es: 'Los dos se tocan al mismo tiempo.',
      en: 'Both fencers hit each other at once.',
    },
    vale: false,
    porQue: {
      es: 'El doble se castiga: con espadas reales, ambos habrían salido heridos.',
      en: 'Doubles are penalised: with real swords, both would have been hurt.',
    },
  },
  {
    accion: {
      es: 'Un tajo con toda la fuerza posible.',
      en: 'A cut with as much force as possible.',
    },
    vale: false,
    porQue: {
      es: 'La fuerza excesiva no puntúa y se sanciona.',
      en: 'Excessive force does not score and is penalised.',
    },
  },
]

export const MITOS: { mito: Texto; realidad: Texto }[] = [
  {
    mito: {
      es: '«Es teatro o recreación»',
      en: '“It’s theatre or re-enactment”',
    },
    realidad: {
      es: 'Es combate deportivo sin coreografía: hay rival, árbitro, jueces y marcador.',
      en: 'It is unchoreographed sport combat: an opponent, a referee, judges and a score.',
    },
  },
  {
    mito: {
      es: '«Las espadas pesaban una tonelada»',
      en: '“Swords weighed a ton”',
    },
    realidad: {
      es: 'Una espada larga pesa lo que una botella y media de agua.',
      en: 'A longsword weighs about as much as a bottle and a half of water.',
    },
  },
  {
    mito: {
      es: '«Es lo mismo que la esgrima olímpica»',
      en: '“It’s the same as Olympic fencing”',
    },
    realidad: {
      es: 'Son parientes. Aquí hay once armas, cortes, todo el cuerpo es blanco y a veces lucha.',
      en: 'They are cousins. Here there are eleven weapons, cuts, the whole body is a target and sometimes grappling.',
    },
  },
  {
    mito: {
      es: '«Hay que saber de historia»',
      en: '“You need to know history”',
    },
    realidad: {
      es: 'Se parte de cero, con simuladores de espuma o plástico. Los libros vienen después, si quieres.',
      en: 'You start from scratch, with foam or plastic simulators. The books come later, if you want.',
    },
  },
]

/** HEMA en Chile, según la solicitud de reconocimiento (noviembre de 2026). */
export const CHILE = {
  desde: 2010,
  agrupaciones: 21,
  practicantes: 473,
  regiones: 9,
}
