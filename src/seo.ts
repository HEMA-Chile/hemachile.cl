import { ARMAS } from './data/armas'
import { CLUBES, type Club } from './data/clubes'
import { RUTAS, clubDeRuta, rutaClub } from './router'

/**
 * Metadatos de cada página para buscadores y redes sociales.
 * Los usa el pre-renderizado (scripts/prerender.mjs) para escribir el <head>
 * de cada página y la aplicación para actualizarlo al navegar.
 */
export const SITIO = 'https://hemachile.cl'
export const IMAGEN_SOCIAL = `${SITIO}/og-image.jpg`

export interface MetaPagina {
  titulo: string
  descripcion: string
  /** Ruta canónica (sin dominio). */
  ruta: string
  indexable: boolean
}

type Idioma = 'es' | 'en'

const CIUDADES = [...new Set(CLUBES.map((c) => c.ciudad))]

function lista(items: string[], y: string) {
  return items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} ${y} ${items.at(-1)}`
}

/** Devuelve la primera opción que cabe en `max` caracteres (o recorta la última). */
function primeraQueQuepa(opciones: string[], max = 160) {
  return opciones.find((o) => o.length <= max) ?? recortar(opciones.at(-1)!, max)
}

/** Recorta en el último espacio antes del límite, para no cortar palabras. */
function recortar(texto: string, max = 160) {
  if (texto.length <= max) return texto
  return texto.slice(0, texto.lastIndexOf(' ', max - 1)).replace(/[,;:]$/, '') + '…'
}

function metaClub(club: Club, idioma: Idioma): MetaPagina {
  const armas = club.armas.map((a) => ARMAS[a][idioma].toLowerCase())
  return idioma === 'es'
    ? {
        titulo: `${club.nombre} – Esgrima histórica en ${club.ciudad}`,
        descripcion: primeraQueQuepa([
          `Clases de esgrima histórica (HEMA) en ${club.ciudad}: ${lista(armas, 'y')}. Club miembro de HEMA Chile. Horarios, dirección y contacto.`,
          `Clases de esgrima histórica (HEMA) en ${club.ciudad}: ${lista(armas, 'y')}. Horarios, dirección y contacto.`,
          `Esgrima histórica (HEMA) en ${club.ciudad}: ${lista(armas, 'y')}. Horarios y contacto.`,
          `Clases de esgrima histórica (HEMA) en ${club.ciudad}: ${armas.slice(0, 3).join(', ')} y más. Horarios, dirección y contacto.`,
        ]),
        ruta: rutaClub(club.id),
        indexable: true,
      }
    : {
        titulo: `${club.nombre} – Historical fencing in ${club.ciudad}`,
        descripcion: primeraQueQuepa([
          `Historical European martial arts (HEMA) classes in ${club.ciudad}, Chile: ${lista(armas, 'and')}. Member club of HEMA Chile. Schedule and contact.`,
          `HEMA classes in ${club.ciudad}, Chile: ${lista(armas, 'and')}. Schedule, address and contact.`,
          `HEMA in ${club.ciudad}, Chile: ${lista(armas, 'and')}.`,
          `HEMA classes in ${club.ciudad}, Chile: ${armas.slice(0, 3).join(', ')} and more. Schedule and contact.`,
        ]),
        ruta: rutaClub(club.id),
        indexable: true,
      }
}

export function metaDeRuta(ruta: string, idioma: Idioma = 'es'): MetaPagina {
  const club = clubDeRuta(ruta)
  if (club) return metaClub(club, idioma)

  const es = idioma === 'es'
  switch (ruta) {
    case RUTAS.reconocimiento:
      return {
        titulo: es
          ? 'HEMA Chile – Esgrima histórica y reconocimiento deportivo'
          : 'HEMA Chile – Historical fencing and sport recognition',
        descripcion: es
          ? 'Representantes de 14 clubes y HEMA Chile solicitaron al Ministerio del Deporte reconocer la esgrima histórica europea (HEMA) como deporte. Lee la solicitud.'
          : 'Representatives of 14 clubs and HEMA Chile have asked the Chilean Ministry of Sport to recognise historical European martial arts (HEMA) as a sport.',
        ruta,
        indexable: true,
      }
    case RUTAS.hemaChile:
      return {
        titulo: es
          ? '¿Qué es HEMA Chile? Clubes de esgrima histórica'
          : 'About HEMA Chile – Historical fencing clubs',
        descripcion: es
          ? `Desde 2017, HEMA Chile reúne a ${CLUBES.length} clubes de esgrima histórica europea de Copiapó a Puerto Montt. Organiza el CAMO, torneos y actividades abiertas.`
          : `Since 2017, HEMA Chile has brought together ${CLUBES.length} historical European fencing clubs from Copiapó to Puerto Montt, organising CAMO and tournaments.`,
        ruta,
        indexable: true,
      }
    case RUTAS.camo:
      return {
        titulo: es
          ? 'CAMO – Congreso de Artes Marciales Occidentales'
          : 'CAMO – Western Martial Arts Congress in Chile',
        descripcion: es
          ? 'Ediciones, charlas y talleres del CAMO, el encuentro nacional de la comunidad chilena de HEMA y esgrima histórica, desde 2017.'
          : 'Editions, talks and workshops of CAMO, the national gathering of the Chilean HEMA and historical fencing community, since 2017.',
        ruta,
        indexable: true,
      }
    case RUTAS.mapa:
      return {
        titulo: es
          ? 'Mapa de clubes de esgrima histórica (HEMA) en Chile'
          : 'Map of historical fencing (HEMA) clubs in Chile',
        descripcion: es
          ? recortar(
              `Encuentra un club de esgrima histórica en ${lista(CIUDADES, 'o')}: horarios, direcciones, especialidades y contacto.`,
            )
          : recortar(
              `Find a historical fencing club in ${lista(CIUDADES, 'or')}: schedules, addresses, disciplines and contact.`,
            ),
        ruta,
        indexable: true,
      }
    default:
      return {
        titulo: es ? 'Página no encontrada | HEMA Chile' : 'Page not found | HEMA Chile',
        descripcion: es
          ? 'La página que buscas no existe en hemachile.cl.'
          : 'The page you are looking for does not exist on hemachile.cl.',
        ruta: RUTAS.reconocimiento,
        indexable: false,
      }
  }
}

/** Páginas que van al sitemap y se pre-renderizan. */
export const RUTAS_INDEXABLES: string[] = [
  RUTAS.reconocimiento,
  RUTAS.hemaChile,
  RUTAS.camo,
  RUTAS.mapa,
  ...CLUBES.map((c) => rutaClub(c.id)),
]

const DIAS_SCHEMA: Record<string, string> = {
  lunes: 'Mo',
  martes: 'Tu',
  miércoles: 'We',
  miercoles: 'We',
  jueves: 'Th',
  viernes: 'Fr',
  sábado: 'Sa',
  sabado: 'Sa',
  domingo: 'Su',
}

/**
 * Convierte «Martes 19:00–21:30 / Lunes a Viernes 18:00–20:00» al formato de
 * schema.org («Tu 19:00-21:30», «Mo-Fr 18:00-20:00»). Si algún tramo no calza
 * con esos patrones, no devuelve nada (mejor omitirlo que publicarlo mal).
 */
export function horarioSchema(horarios: string): string[] | undefined {
  const dia = (d: string) => DIAS_SCHEMA[d.trim().toLowerCase()]
  const salida: string[] = []
  for (const tramo of horarios.split('/').map((t) => t.trim())) {
    const m = tramo.match(/^(.+?)\s+(\d{1,2}:\d{2})\s*[–-]\s*(\d{1,2}:\d{2})$/u)
    if (!m) return undefined
    const rango = m[1].match(/^(\p{L}+)\s+a\s+(\p{L}+)$/u)
    const dias = rango
      ? dia(rango[1]) && dia(rango[2]) && `${dia(rango[1])}-${dia(rango[2])}`
      : m[1].split(/\s*,\s*|\s+y\s+/).map(dia)
    if (!dias || (Array.isArray(dias) && dias.some((d) => !d))) return undefined
    salida.push(`${Array.isArray(dias) ? dias.join(',') : dias} ${m[2].padStart(5, '0')}-${m[3].padStart(5, '0')}`)
  }
  return salida.length ? salida : undefined
}

/** Perfiles del club en otros sitios (web propia e Instagram) para schema.org. */
function sameAs(club: Club) {
  return [club.web, club.instagram && `https://www.instagram.com/${club.instagram}/`].filter(
    (u): u is string => Boolean(u),
  )
}

/** Datos estructurados (JSON-LD) específicos de una página. */
export function datosEstructuradosDeRuta(ruta: string): object[] {
  const club = clubDeRuta(ruta)
  if (!club) return []
  const url = `${SITIO}${rutaClub(club.id)}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'SportsClub',
      '@id': `${url}#club`,
      name: club.nombre,
      ...(club.nombreCorto !== club.nombre && { alternateName: club.nombreCorto }),
      url,
      sport: 'HEMA (Historical European Martial Arts)',
      description: metaClub(club, 'es').descripcion,
      logo: `${SITIO}${club.icono}`,
      image: `${SITIO}${club.icono}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: club.direccion,
        addressLocality: club.ciudad,
        addressCountry: 'CL',
      },
      geo: { '@type': 'GeoCoordinates', latitude: club.coordenadas[0], longitude: club.coordenadas[1] },
      ...(horarioSchema(club.horarios) && { openingHours: horarioSchema(club.horarios) }),
      ...(club.correo && { email: club.correo }),
      ...(sameAs(club).length && { sameAs: sameAs(club) }),
      memberOf: { '@id': `${SITIO}/#organizacion` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'HEMA Chile', item: `${SITIO}/` },
        { '@type': 'ListItem', position: 2, name: 'Mapa de clubes', item: `${SITIO}${RUTAS.mapa}` },
        { '@type': 'ListItem', position: 3, name: club.nombre, item: url },
      ],
    },
  ]
}
