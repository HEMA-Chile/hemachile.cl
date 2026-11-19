import type { Arma } from './armas'

/**
 * CLUBES MIEMBROS DE HEMA CHILE
 * =============================
 * Esta es la única lista que hay que editar para agregar, quitar o
 * actualizar un club. Alimenta el mapa, la ficha de cada club y los
 * datos estructurados para buscadores (JSON-LD en index.html).
 *
 * - `id`: identificador corto y único, sin espacios (no cambiarlo después).
 * - `icono`: ruta a un archivo dentro de /public/icons.
 * - `horarios`: texto libre en español; los días se traducen solos al inglés.
 * - `armas`: claves definidas en ./armas.ts.
 * - `coordenadas`: [latitud, longitud]. En Google Maps: clic derecho sobre
 *   el lugar y copiar los números.
 */
export interface Club {
  id: string
  nombre: string
  ciudad: string
  direccion: string
  horarios: string
  instagram?: string
  correo?: string
  armas: Arma[]
  coordenadas: [number, number]
  icono: string
}

export const CLUBES: Club[] = [
  {
    id: 'aehch',
    nombre: 'Academia de Esgrima Histórica de Chile',
    ciudad: 'Santiago',
    direccion: 'Parroquia La Natividad del Señor, Av. Ossa 479, La Reina',
    horarios: 'Martes 19:00–21:00 / Jueves 19:00–21:00 / Sábado 10:30–13:30',
    instagram: 'aehch_chile',
    correo: 'contacto.aehch@gmail.com',
    armas: ['espadaLarga', 'espadaRopera', 'sableMilitar', 'espadaYBroquel'],
    coordenadas: [-33.44887276248483, -70.5709466653343],
    icono: '/icons/logo2019-neutral.png',
  },
  {
    id: 'temuco',
    nombre: 'Esgrima Histórica Temuco',
    ciudad: 'Temuco',
    direccion: 'Universidad Católica de Temuco, Campus San Francisco',
    horarios: 'Martes 19:00–21:00 / Jueves 19:00–21:00 / Sábado 10:00–12:00',
    instagram: 'esgrima.historica.temuco',
    correo: 'esgrima.tco@gmail.com',
    armas: ['espadaLarga', 'roperaYAcompanante', 'sableMilitar'],
    coordenadas: [-38.73727663660915, -72.60186173242595],
    icono: '/icons/logo-esgrima-en-negro.png',
  },
  {
    id: 'atacama',
    nombre: 'Esgrima Histórica Atacama',
    ciudad: 'Copiapó',
    direccion: 'Polideportivo Karen Gallardo Pinto',
    horarios: 'Martes, Jueves y Sábado 20:00–22:00',
    instagram: 'hema.atacama',
    correo: 'esgrima.historica.atacama@gmail.com',
    armas: ['espadaLarga', 'espadaYBroquel', 'sableMilitar'],
    coordenadas: [-27.37620767651673, -70.33100019157655],
    icono: '/icons/Esgrima-Historica-Atacama-Vectorizado.png',
  },
  {
    id: 'puertomontt',
    nombre: 'Academia de Esgrima Histórica Puerto Montt',
    ciudad: 'Puerto Montt',
    direccion: 'Gimnasio UACh, Campus Pelluco, Los Pinos S/N',
    horarios: 'Lunes y Jueves 19:30–21:30',
    instagram: 'aehch.pm',
    correo: 'esgrimahistoricapuertomontt@gmail.com',
    armas: ['espadaLarga', 'espadaRopera', 'espadaYBroquel', 'sableMilitar'],
    coordenadas: [-41.49131103334241, -72.89700574500337],
    icono: '/icons/Escudo-AEHCH-PM-2.svg',
  },
  {
    id: 'praelium',
    nombre: 'Praelium Australis',
    ciudad: 'Santiago',
    direccion: 'Canchas Cristo Salva, Macul',
    horarios: 'Martes 19:30–21:30 / Jueves 19:30–21:30 / Sábado 10:00–12:00',
    instagram: 'praelium_australis',
    correo: 'praeliumaustralis@gmail.com',
    armas: [
      'espadaLarga',
      'espadaRopera',
      'roperaYDaga',
      'espadaYBroquel',
      'sableMilitar',
      'messer',
    ],
    coordenadas: [-33.4580141562325, -70.57131269136164],
    icono: '/icons/logo_big_name.svg',
  },
  {
    id: 'valdivia',
    nombre: 'Esgrima Histórica Valdivia',
    ciudad: 'Valdivia',
    direccion: 'Centro de Jóvenes, Koenig 611',
    horarios: 'Lunes a Viernes 18:00–20:00 / Domingo 15:00–18:00',
    instagram: 'esgrimahistoricavaldivia',
    correo: 'esgrima.historica.valdivia@gmail.com',
    armas: [
      'espadaLarga',
      'espadaRopera',
      'roperaYDaga',
      'roperaYAcompanante',
      'espadaYBroquel',
      'sableMilitar',
      'messer',
      'espadin',
      'daga',
    ],
    coordenadas: [-39.83615719834062, -73.2282757050703],
    icono: '/icons/valdivia.png',
  },
  {
    id: 'virtus',
    nombre: 'Virtus Esgrima Histórica',
    ciudad: 'Valparaíso',
    direccion: 'Espacio multifunción Ficus, Independencia 2373',
    horarios: 'Lunes, Jueves y Viernes 18:00–19:30 / Domingo 10:00–12:00',
    instagram: 'veh.chile',
    correo: 'virtus.esgrima.historica@gmail.com',
    armas: ['espadaLarga', 'espadaRopera', 'espadaYBroquel', 'sableMilitar', 'daga'],
    coordenadas: [-33.01758715430043, -71.56026017418841],
    icono: '/icons/VIRTUS.png',
  },
]
