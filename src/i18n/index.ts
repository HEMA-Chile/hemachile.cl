import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export type Idioma = 'es' | 'en'

const resources = {
  es: {
    translation: {
      title: 'Mapa de clubes de HEMA',
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
      mapa: { verClub: 'Ver {{nombre}}', listaEtiqueta: 'Clubes', verPagina: 'Página del club' },
      club: {
        subtitulo: 'Esgrima histórica (HEMA) en {{ciudad}} · Club miembro de HEMA Chile',
        intro:
          '{{nombre}} es un club de esgrima histórica de tradición europea (HEMA) en {{ciudad}}. Practica {{armas}}. Si quieres empezar, escríbeles para consultar por clases.',
        comoLlegar: 'Cómo llegar (Google Maps)',
        contacto: 'Contacto',
        otros: 'Otros clubes de HEMA Chile',
      },
      noEncontrada: {
        titulo: 'Página no encontrada',
        texto: 'La página que buscas no existe o cambió de dirección.',
        volver: 'Ir a la página principal',
      },
      menu: {
        etiqueta: 'Menú principal',
        mapa: 'Mapa de clubes',
        reconocimiento: 'Reconocimiento deportivo',
        hemaChile: '¿Qué es HEMA Chile?',
        camo: 'CAMO',
        ifhema: 'IFHEMA',
      },
      camo: {
        titulo: 'CAMO – Congreso de Artes Marciales Occidentales',
        intro: [
          'El Congreso de Artes Marciales Occidentales (CAMO) es el encuentro nacional de la comunidad chilena de HEMA: reúne a clubes de todo el país en talleres técnicos, charlas y sparring libre entre clubes.',
          'Al término de su quinta edición, en 2017, los clubes organizadores fundaron HEMA Chile. Estas son las ediciones de las que hay registro, con las charlas y actividades de cada año.',
        ],
        ediciones: 'Ediciones',
        edicion: '{{numero}} edición',
        organiza: 'Organiza',
        actividades: 'Charlas y talleres',
        nota: '¿Tienes información o fotos de ediciones anteriores? Escríbenos a directorio.hemachile@gmail.com.',
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
          {
            titulo: 'CAMO',
            texto: 'Junto con los clubes, impulsamos el Congreso de Artes Marciales Occidentales, el encuentro nacional de la comunidad, con talleres, charlas y sparring libre entre clubes. La edición 2026 se hizo en Puerto Montt con representantes de siete ciudades.',
            enlace: 'camo',
          },
          {
            titulo: 'Torneo de Novatos',
            texto: 'Organizamos un torneo para quienes empiezan: mayores de 16 años, con menos de dos años de entrenamiento y sin torneos abiertos fuera de su club. La primera edición fue en 2025 y la segunda, el 3 y 4 de octubre de 2026 en Santiago, con espada larga, sable militar, espada ropera y espada y broquel, y simuladores de Technyl provistos por la organización.',
          },
          {
            titulo: 'HEMA sale a la calle',
            texto: 'El 22 y 23 de agosto de 2026, como parte del evento mundial «HEMA goes public» de IFHEMA, siete clubes hicieron demostraciones abiertas y gratuitas en parques y plazas de seis ciudades, de Copiapó a Puerto Montt, donde el público pudo probar ejercicios básicos con simuladores.',
          },
          {
            titulo: 'Reconocimiento deportivo',
            texto: 'En noviembre de 2026 presentamos, junto a representantes de 14 clubes de todo el país, la solicitud para que el Ministerio del Deporte reconozca HEMA como modalidad deportiva. En el CAMO 2026 presentamos además la hoja de ruta hacia una federación deportiva de HEMA.',
            enlace: 'reconocimiento',
          },
          {
            titulo: 'Vínculo internacional',
            texto: 'Representamos a Chile como observador ante la International Federation of Historical European Martial Arts (IFHEMA) desde 2025. En su Asamblea General de septiembre de 2025 presentamos el estado de la disciplina en el país.',
            enlace: 'ifhema',
          },
          {
            titulo: 'Reglas y arbitraje',
            texto: 'Hacemos capacitaciones de reglamento y arbitraje, propusimos un reglamento tipo de torneo y mantenemos un registro de las agrupaciones de HEMA del país, integren o no HEMA Chile.',
          },
          {
            titulo: 'Encuentro Iberoamericano (2021)',
            texto: 'En julio de 2021 organizamos en formato virtual el Encuentro Iberoamericano de Esgrima Histórica, con 16 expositores de Chile y el extranjero en catorce ponencias sobre formación de instructores, preparación física, salud, estudio de fuentes y difusión.',
          },
        ],
        verMas: 'Ver más',
        clubesTitulo: 'Clubes miembros',
        verMapa: 'Ver en el mapa',
      },
      ifhema: {
        titulo: 'IFHEMA',
        logoAlt: 'Logo de IFHEMA: dos espadas cruzadas tras un sello con el nombre de la federación',
        intro:
          'La International Federation of Historical European Martial Arts (IFHEMA) es la federación internacional que reúne a las federaciones nacionales de HEMA. Chile participa en ella como observador desde 2025.',
        chileTitulo: 'Chile, observador en IFHEMA',
        chile: [
          'Chile ingresó como observador en 2025, por invitación de IFHEMA a Virtus Esgrima Histórica. En la Asamblea General de septiembre de 2025, celebrada en Atenas junto a la IFHEMA Cup, HEMA Chile presentó el estado de la disciplina en el país, con cerca de 418 practicantes informados por los propios clubes. Hoy esa función la ejerce HEMA Chile.',
          'Como observador, Chile participa en la vida de la federación internacional, pero aún no puede ser miembro pleno: IFHEMA exige que cada país esté representado por una federación nacional. En Chile, esa federación solo puede constituirse como organización deportiva una vez que HEMA sea reconocida como deporte. Por eso la solicitud de reconocimiento ante el Ministerio del Deporte es el paso previo, y IFHEMA la respalda con una carta de apoyo.',
          'En agosto de 2026, los clubes de HEMA Chile se sumaron además al evento mundial de IFHEMA «HEMA goes public» con «HEMA sale a la calle»: demostraciones abiertas en seis ciudades, de Copiapó a Puerto Montt.',
        ],
        verSolicitud: 'Ver la solicitud de reconocimiento',
        queEsTitulo: '¿Qué es IFHEMA?',
        queEs: [
          'IFHEMA es una «federación de federaciones»: la integran federaciones nacionales de HEMA, u organizaciones que cumplen ese papel en su país. Su misión es conectar y apoyar a sus miembros, coordinar sus actividades y proteger sus intereses. Respeta la autonomía de cada miembro: no le impone políticas y le presta ayuda cuando la pide.',
          'Su origen está en la Iniciativa de Viena, propuesta por la comunidad austriaca en 2009. En 2013, en el encuentro de HEMAC en Dijon (Francia), representantes de diez países europeos formaron grupos de trabajo cuyo resultado fue la asamblea constitutiva de IFHEMA.',
        ],
        objetivosTitulo: 'Objetivos',
        objetivos: [
          'Servir de red entre las comunidades de HEMA.',
          'Proteger la autonomía de HEMA frente a otras artes marciales y deportes de combate.',
          'Fomentar la investigación y la publicación.',
          'Apoyar el desarrollo de equipamiento adecuado para HEMA.',
          'Ofrecer plataformas para organizar competencias.',
          'Promover la sostenibilidad, el intercambio de conocimiento, la excelencia y la educación.',
        ],
        organizacionTitulo: 'Cómo se organiza',
        organizacion: [
          'Su órgano principal es la Asamblea General, donde están representadas todas las federaciones miembro. El Comité Ejecutivo, formado por la presidencia y entre tres y cinco representantes elegidos por la Asamblea, es su órgano ejecutivo.',
          'Pueden ser miembros las federaciones que agrupen a la mayoría de la comunidad de HEMA de su país y organicen regularmente actividades nacionales o internacionales. Sus valores son la transparencia, el buen gobierno y la responsabilidad.',
        ],
        miembrosTitulo: 'Miembros y observadores',
        miembrosNota: 'Según el sitio de IFHEMA, revisado en {{fecha}}.',
        federaciones: 'Federaciones miembro',
        observadores: 'Observadores',
        copaTitulo: 'IFHEMA Cup',
        copa: [
          'La IFHEMA Cup es la competencia de selecciones nacionales de la federación. Cada equipo lo forman tres esgrimistas titulares, un suplente y un juez, todos de la nacionalidad del país que representan, y pueden inscribirse federaciones miembro u observadoras.',
          'La edición 2025 se disputó en Atenas, en espada larga, con un máximo de 14 equipos.',
        ],
        visitar: 'Visitar el sitio de IFHEMA',
      },
      reconocimiento: {
        titulo: 'Reconocimiento deportivo de HEMA',
        intro:
          'El 23 de noviembre de 2026, representantes de 14 clubes de HEMA y HEMA Chile presentaron al Ministerio del Deporte una solicitud para que HEMA (Historical European Martial Arts), la esgrima histórica de tradición europea, sea reconocida como modalidad deportiva e inscrita en el Listado Oficial Único de Modalidades y Especialidades Deportivas, conforme al Decreto N° 10 de 2021.',
        porQueTitulo: '¿Por qué es importante?',
        porQue: [
          'El reconocimiento es el requisito legal para que HEMA sea considerada formalmente un deporte en Chile. Permitiría a los clubes constituirse como organizaciones deportivas de HEMA y postular a los fondos y programas de la Ley del Deporte (Ley N° 19.712).',
          'También es el paso previo para formar una federación deportiva de HEMA, que es la condición que exige la International Federation of Historical European Martial Arts (IFHEMA) para que Chile pase de observador a miembro pleno.',
          'La solicitud se refiere a la disciplina, no a una organización: su reconocimiento beneficiaría a todos los clubes que practican HEMA en el país, integren o no HEMA Chile.',
        ],
        especialidadesTitulo: 'Especialidades solicitadas',
        respaldoTitulo: 'Respaldo',
        respaldo:
          'La firman representantes de 14 clubes de HEMA de Atacama a Los Lagos: los siete que integran HEMA Chile y siete agrupaciones no afiliadas que se sumaron. Cuenta además con una carta de apoyo de IFHEMA.',
        documentoTitulo: 'Documento de la solicitud',
        documentoNota:
          'Versión pública: sin cédulas de identidad, domicilios, correos personales ni firmas de los solicitantes.',
        descargar: 'Descargar PDF',
        abrir: 'Abrir en Google Docs',
      },
    },
  },
  en: {
    translation: {
      title: 'HEMA clubs map',
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
      mapa: { verClub: 'View {{nombre}}', listaEtiqueta: 'Clubs', verPagina: 'Club page' },
      club: {
        subtitulo: 'Historical European martial arts in {{ciudad}} · Member club of HEMA Chile',
        intro:
          '{{nombre}} is a historical European martial arts (HEMA) club in {{ciudad}}, Chile. It practises {{armas}}. If you want to start, get in touch to ask about classes.',
        comoLlegar: 'Directions (Google Maps)',
        contacto: 'Contact',
        otros: 'Other HEMA Chile clubs',
      },
      noEncontrada: {
        titulo: 'Page not found',
        texto: 'The page you are looking for does not exist or has moved.',
        volver: 'Go to the home page',
      },
      menu: {
        etiqueta: 'Main menu',
        mapa: 'Clubs map',
        reconocimiento: 'Sport recognition',
        hemaChile: 'About HEMA Chile',
        camo: 'CAMO',
        ifhema: 'IFHEMA',
      },
      camo: {
        titulo: 'CAMO – Western Martial Arts Congress',
        intro: [
          'The Western Martial Arts Congress (CAMO) is the national gathering of the Chilean HEMA community, bringing clubs from across the country together for technical workshops, talks and open sparring.',
          'At the end of its fifth edition, in 2017, the organising clubs founded HEMA Chile. These are the recorded editions, with the talks and activities of each year.',
        ],
        ediciones: 'Editions',
        edicion: 'Edition {{numero}}',
        organiza: 'Organised by',
        actividades: 'Talks and workshops',
        nota: 'Do you have information or photos from earlier editions? Write to us at directorio.hemachile@gmail.com.',
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
          {
            titulo: 'CAMO',
            texto: 'Together with the clubs, we run the Western Martial Arts Congress, the national gathering of the community, with workshops, talks and open sparring between clubs. The 2026 edition took place in Puerto Montt with representatives from seven cities.',
            enlace: 'camo',
          },
          {
            titulo: 'Novice Tournament',
            texto: 'We organise a tournament for newcomers: over 16, with less than two years of training and no open tournaments outside their club. The first edition was in 2025 and the second on 3–4 October 2026 in Santiago, with longsword, military sabre, rapier and sword and buckler, using Technyl simulators provided by the organisers.',
          },
          {
            titulo: 'HEMA goes public',
            texto: 'On 22–23 August 2026, as part of IFHEMA’s worldwide “HEMA goes public” event, seven clubs gave free, open demonstrations in parks and squares in six cities, from Copiapó to Puerto Montt, where the public could try basic drills with simulators.',
          },
          {
            titulo: 'Sport recognition',
            texto: 'In November 2026, together with representatives of 14 clubs from across the country, we submitted the request for the Ministry of Sport to recognise HEMA as a sport. At CAMO 2026 we also presented the roadmap towards a national HEMA federation.',
            enlace: 'reconocimiento',
          },
          {
            titulo: 'International ties',
            texto: 'We represent Chile as an observer at the International Federation of Historical European Martial Arts (IFHEMA) since 2025. At its General Assembly in September 2025 we presented the state of the discipline in the country.',
            enlace: 'ifhema',
          },
          {
            titulo: 'Rules and refereeing',
            texto: 'We run training on rules and refereeing, have proposed a model tournament ruleset and keep a register of the HEMA clubs in the country, whether or not they belong to HEMA Chile.',
          },
          {
            titulo: 'Ibero-American Meeting (2021)',
            texto: 'In July 2021 we organised the online Ibero-American Historical Fencing Meeting, with 16 speakers from Chile and abroad giving fourteen talks on instructor training, physical preparation, health, source study and outreach.',
          },
        ],
        verMas: 'Learn more',
        clubesTitulo: 'Member clubs',
        verMapa: 'View on the map',
      },
      ifhema: {
        titulo: 'IFHEMA',
        logoAlt: 'IFHEMA logo: two crossed swords behind a seal with the federation’s name',
        intro:
          'The International Federation of Historical European Martial Arts (IFHEMA) is the international federation of national HEMA federations. Chile has taken part as an observer since 2025.',
        chileTitulo: 'Chile, an IFHEMA observer',
        chile: [
          'Chile joined as an observer in 2025, after IFHEMA invited Virtus Esgrima Histórica. At the General Assembly in September 2025, held in Athens alongside the IFHEMA Cup, HEMA Chile presented the state of the discipline in the country, with around 418 practitioners reported by the clubs themselves. That role is now held by HEMA Chile.',
          'As an observer, Chile takes part in the life of the international federation but cannot yet be a full member: IFHEMA requires each country to be represented by a national federation. In Chile, such a federation can only be set up as a sports organisation once HEMA is recognised as a sport. That is why the request for recognition to the Ministry of Sport comes first, and IFHEMA backs it with a letter of support.',
          'In August 2026, HEMA Chile clubs also joined IFHEMA’s worldwide “HEMA goes public” event with “HEMA sale a la calle”: open demonstrations in six cities, from Copiapó to Puerto Montt.',
        ],
        verSolicitud: 'See the request for recognition',
        queEsTitulo: 'What is IFHEMA?',
        queEs: [
          'IFHEMA is a “federation of federations”: its members are national HEMA federations, or organisations that play that role in their country. Its mission is to connect and support its members, coordinate their activities and protect their interests. It respects each member’s autonomy: it does not impose policies and offers help when asked.',
          'It grew out of the Vienna Initiative, proposed by the Austrian community in 2009. In 2013, at the HEMAC gathering in Dijon (France), representatives of ten European countries set up working groups that led to IFHEMA’s founding assembly.',
        ],
        objetivosTitulo: 'Aims',
        objetivos: [
          'To act as a network between HEMA communities.',
          'To protect the autonomy of HEMA from other martial arts and combat sports.',
          'To encourage research and publication.',
          'To support the development of suitable HEMA equipment.',
          'To provide platforms for organising competitions.',
          'To promote sustainability, knowledge sharing, excellence and education.',
        ],
        organizacionTitulo: 'How it is organised',
        organizacion: [
          'Its main body is the General Assembly, where every member federation is represented. The Executive Committee, made up of the president and three to five representatives elected by the Assembly, is its executive body.',
          'Membership is open to federations that bring together most of their country’s HEMA community and regularly hold national or international activities. Its values are transparency, good governance and accountability.',
        ],
        miembrosTitulo: 'Members and observers',
        miembrosNota: 'According to the IFHEMA website, checked in {{fecha}}.',
        federaciones: 'Member federations',
        observadores: 'Observers',
        copaTitulo: 'IFHEMA Cup',
        copa: [
          'The IFHEMA Cup is the federation’s national-team competition. Each team has three starting fencers, one reserve and one judge, all nationals of the country they represent, and both member and observer federations can enter.',
          'The 2025 edition was held in Athens, in longsword, with a maximum of 14 teams.',
        ],
        visitar: 'Visit the IFHEMA website',
      },
      reconocimiento: {
        titulo: 'Sport recognition for HEMA',
        intro:
          'On 23 November 2026, representatives of 14 HEMA clubs and HEMA Chile submitted a request to the Chilean Ministry of Sport to recognise HEMA (Historical European Martial Arts) as a sport and to include it in the Official Single List of Sports and Disciplines, under Decree No. 10 of 2021.',
        porQueTitulo: 'Why does it matter?',
        porQue: [
          'Recognition is the legal requirement for HEMA to be formally considered a sport in Chile. It would allow clubs to register as HEMA sports organisations and apply for the funds and programmes of the Sports Act (Law No. 19,712).',
          'It is also the step that must come before founding a national HEMA sports federation, which the International Federation of Historical European Martial Arts (IFHEMA) requires for Chile to move from observer to full member.',
          'The request concerns the discipline, not an organisation: recognition would benefit every club that practises HEMA in the country, whether or not it belongs to HEMA Chile.',
        ],
        especialidadesTitulo: 'Disciplines requested',
        respaldoTitulo: 'Support',
        respaldo:
          'It is signed by representatives of 14 HEMA clubs from Atacama to Los Lagos: the seven members of HEMA Chile and seven non-member clubs that joined. It is also backed by a letter of support from IFHEMA.',
        documentoTitulo: 'The request document',
        documentoNota:
          'Public version (in Spanish): without the applicants’ ID numbers, addresses, personal emails or signatures.',
        descargar: 'Download PDF',
        abrir: 'Open in Google Docs',
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
  if (typeof document === 'undefined') return
  document.documentElement.lang = lng
  try {
    localStorage.setItem('lang', lng)
  } catch {
    /* ignorar */
  }
})
if (typeof document !== 'undefined') document.documentElement.lang = i18n.language

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
