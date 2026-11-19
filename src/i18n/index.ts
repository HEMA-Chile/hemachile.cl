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
        documentoTitulo: 'Documento de la solicitud',
        documentoNota: 'Versión pública: sin cédulas de identidad, domicilios, correos electrónicos ni firmas de los solicitantes.',
        descargar: 'Descargar PDF',
        abrir: 'Abrir en Google Drive',
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
        documentoTitulo: 'Request document (in Spanish)',
        documentoNota: 'Public version: without the applicants’ ID numbers, addresses, email addresses or signatures.',
        descargar: 'Download PDF',
        abrir: 'Open in Google Drive',
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
