import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export type Idioma = 'es' | 'en'

const resources = {
  es: {
    translation: {
      title: 'Mapa de Clubes',
      labels: {
        direccion: 'Dirección',
        horarios: 'Horarios',
        armas: 'Especialidades',
      },
      button: {
        idioma: 'Cambiar a inglés',
        temaOscuro: 'Activar modo oscuro',
        temaClaro: 'Activar modo claro',
      },
      mapa: { verClub: 'Ver {{nombre}}' },
      menu: {
        etiqueta: 'Menú principal',
        mapa: 'Mapa de clubes',
        reconocimiento: 'Reconocimiento deportivo',
        hemaChile: '¿Qué es HEMA Chile?',
      },
      hemaChile: {
        titulo: '¿Qué es HEMA Chile?',
        imagenAlt: 'Emblema de HEMA Chile rodeado de los logos de sus siete clubes miembros',
        intro: [
          'HEMA Chile es una agrupación voluntaria de clubes de HEMA (Historical European Martial Arts), la esgrima histórica de tradición europea. Es la única agrupación de clubes de alcance nacional que existe hoy en Chile.',
          'Nació en 2017, cuando los clubes organizadores del V Congreso de Artes Marciales Occidentales (CAMO) decidieron, al término de ese encuentro, seguir trabajando juntos en la difusión de la disciplina. Hoy la integran siete agrupaciones de seis regiones, de Atacama a Los Lagos.',
          'HEMA Chile no es un órgano rector de la disciplina ni representa a toda la comunidad: la comunidad de HEMA en Chile es más amplia, y la agrupación busca trabajar con todos los clubes que practican la disciplina.',
        ],
        misionTitulo: 'Misión',
        mision: 'Difundir la práctica de las HEMA en Chile y coordinar el trabajo de sus agrupaciones integrantes.',
        visionTitulo: 'Visión',
        vision: 'Elevar la práctica de HEMA en Chile a estándares internacionales.',
        valoresTitulo: 'Valores',
        valores: ['Colaboración', 'Rigurosidad', 'Respeto', 'Seguridad', 'Humildad', 'Compromiso'],
        actividadesTitulo: 'Qué hacemos',
        actividades: [
          'Reunimos a los clubes en charlas, seminarios y capacitaciones de reglamento y arbitraje.',
          'Coordinamos un calendario de torneos y actividades entre los clubes, y organizamos el Torneo de Novatos.',
          'Buscamos que la práctica de HEMA en Chile tenga bases técnicas, competitivas, reglamentarias y de seguridad comunes.',
          'Impulsamos el reconocimiento de HEMA como modalidad deportiva ante el Ministerio del Deporte, paso previo para formar una federación deportiva.',
          'Mantenemos el vínculo con la International Federation of Historical European Martial Arts (IFHEMA), donde Chile participa como observador desde 2025.',
        ],
        organizacionTitulo: 'Cómo nos organizamos',
        organizacion: [
          'HEMA Chile se rige por sus Estatutos de Afiliación, Participación y Pertenencia. La Asamblea General es su primera autoridad: cada agrupación tiene hasta dos representantes y un voto.',
          'La Asamblea elige por un año a un Directorio de seis miembros (presidencia, vicepresidencia, secretaría, subsecretaría, tesorería y subtesorería). Existen además una Comisión Fiscalizadora de Finanzas, una Comisión Electoral y una Comisión de Disciplina, que se ajusta a las normas del debido proceso.',
        ],
        clubesTitulo: 'Clubes miembros',
        verMapa: 'Ver en el mapa',
      },
      reconocimiento: {
        titulo: 'Reconocimiento deportivo',
        intro:
          'Representantes de clubes de HEMA y HEMA Chile solicitan al Ministerio del Deporte que HEMA (Historical European Martial Arts), la esgrima histórica de tradición europea, sea reconocida como modalidad deportiva e inscrita en el Listado Oficial Único de Modalidades y Especialidades Deportivas, conforme al Decreto N° 10 de 2021.',
        porQueTitulo: '¿Por qué es importante?',
        porQue: [
          'El reconocimiento es el requisito legal para que HEMA sea considerada formalmente un deporte en Chile. Permitiría a los clubes constituirse como organizaciones deportivas de HEMA y postular a los fondos y programas de la Ley del Deporte (Ley N° 19.712).',
          'También es el paso previo para formar una federación deportiva de HEMA, que es la condición que exige la International Federation of Historical European Martial Arts (IFHEMA) para que Chile pase de observador a miembro pleno.',
          'La solicitud se refiere a la disciplina, no a una organización: su reconocimiento beneficiaría a todos los clubes que practican HEMA en el país, integren o no HEMA Chile.',
        ],
        especialidadesTitulo: 'Especialidades solicitadas',
        respaldoTitulo: 'Respaldo',
        respaldo:
          'La solicitud cuenta con una carta de apoyo de IFHEMA y fue compartida con los representantes de los clubes de HEMA del país, para que todos puedan sumarse como firmantes.',
      },
    },
  },
  en: {
    translation: {
      title: 'Clubs Map',
      labels: {
        direccion: 'Address',
        horarios: 'Schedule',
        armas: 'Disciplines',
      },
      button: {
        idioma: 'Switch to Spanish',
        temaOscuro: 'Switch to dark mode',
        temaClaro: 'Switch to light mode',
      },
      mapa: { verClub: 'View {{nombre}}' },
      menu: {
        etiqueta: 'Main menu',
        mapa: 'Clubs map',
        reconocimiento: 'Sport recognition',
        hemaChile: 'About HEMA Chile',
      },
      hemaChile: {
        titulo: 'About HEMA Chile',
        imagenAlt: 'HEMA Chile emblem surrounded by the logos of its seven member clubs',
        intro: [
          'HEMA Chile is a voluntary association of HEMA (Historical European Martial Arts) clubs. It is the only nationwide association of clubs in Chile today.',
          'It was founded in 2017, when the clubs that organised the 5th Western Martial Arts Congress (CAMO) decided, at the end of that event, to keep working together to promote the discipline. Today it brings together seven clubs from six regions, from Atacama to Los Lagos.',
          'HEMA Chile is not a governing body of the discipline and does not represent the whole community: the HEMA community in Chile is broader, and the association seeks to work with every club that practises the discipline.',
        ],
        misionTitulo: 'Mission',
        mision: 'To promote the practice of HEMA in Chile and coordinate the work of its member clubs.',
        visionTitulo: 'Vision',
        vision: 'To raise the practice of HEMA in Chile to international standards.',
        valoresTitulo: 'Values',
        valores: ['Collaboration', 'Rigour', 'Respect', 'Safety', 'Humility', 'Commitment'],
        actividadesTitulo: 'What we do',
        actividades: [
          'We bring clubs together in talks, seminars and training on rules and refereeing.',
          'We coordinate a calendar of tournaments and activities among the clubs, and organise the Novice Tournament.',
          'We work towards common technical, competitive, regulatory and safety foundations for HEMA in Chile.',
          'We are pursuing the recognition of HEMA as a sport by the Ministry of Sport, the step required before founding a national federation.',
          'We maintain the link with the International Federation of Historical European Martial Arts (IFHEMA), where Chile has been an observer since 2025.',
        ],
        organizacionTitulo: 'How we are organised',
        organizacion: [
          'HEMA Chile is governed by its Statutes of Affiliation, Participation and Membership. The General Assembly is its highest authority: each club has up to two representatives and one vote.',
          'The Assembly elects a six-member Board for one year (president, vice-president, secretary, deputy secretary, treasurer and deputy treasurer). There is also a Finance Oversight Committee, an Electoral Committee and a Disciplinary Committee, which follows due-process rules.',
        ],
        clubesTitulo: 'Member clubs',
        verMapa: 'View on the map',
      },
      reconocimiento: {
        titulo: 'Sport recognition',
        intro:
          'Representatives of HEMA clubs and HEMA Chile are asking the Chilean Ministry of Sport to recognise HEMA (Historical European Martial Arts) as a sport and to include it in the Official Single List of Sports and Disciplines, under Decree No. 10 of 2021.',
        porQueTitulo: 'Why does it matter?',
        porQue: [
          'Recognition is the legal requirement for HEMA to be formally considered a sport in Chile. It would allow clubs to register as HEMA sports organisations and apply for the funds and programmes of the Sports Act (Law No. 19,712).',
          'It is also the step that must come before founding a national HEMA sports federation, which the International Federation of Historical European Martial Arts (IFHEMA) requires for Chile to move from observer to full member.',
          'The request concerns the discipline, not an organisation: recognition would benefit every club that practises HEMA in the country, whether or not it belongs to HEMA Chile.',
        ],
        especialidadesTitulo: 'Disciplines requested',
        respaldoTitulo: 'Support',
        respaldo:
          'The request is backed by a letter of support from IFHEMA and was shared with the representatives of the HEMA clubs in the country, so that all of them can join as signatories.',
      },
    },
  },
} as const

function idiomaInicial(): Idioma {
  try {
    const guardado = localStorage.getItem('lang')
    if (guardado === 'es' || guardado === 'en') return guardado
  } catch {
    /* localStorage no disponible */
  }
  return 'es'
}

void i18n.use(initReactI18next).init({
  resources,
  lng: idiomaInicial(),
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
  try {
    localStorage.setItem('lang', lng)
  } catch {
    /* ignorar */
  }
})
document.documentElement.lang = i18n.language

const DIAS: Record<string, string> = {
  Lunes: 'Monday',
  Martes: 'Tuesday',
  Miércoles: 'Wednesday',
  Miercoles: 'Wednesday',
  Jueves: 'Thursday',
  Viernes: 'Friday',
  Sábado: 'Saturday',
  Sabado: 'Saturday',
  Domingo: 'Sunday',
}

/** Traduce los nombres de días (y conectores) de un horario escrito en español. */
export function traducirHorario(texto: string, idioma: string): string {
  if (idioma === 'es') return texto
  let resultado = texto
  for (const [es, en] of Object.entries(DIAS)) {
    resultado = resultado.replace(new RegExp(`\\b${es}\\b`, 'gi'), en)
  }
  return resultado.replace(/\s+y\s+/g, ' and ').replace(/\s+a\s+/g, ' to ')
}

export default i18n
