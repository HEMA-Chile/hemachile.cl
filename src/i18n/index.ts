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
        armas: 'Armas practicadas',
      },
      button: {
        idioma: 'Cambiar a inglés',
        temaOscuro: 'Activar modo oscuro',
        temaClaro: 'Activar modo claro',
      },
      mapa: { verClub: 'Ver {{nombre}}' },
    },
  },
  en: {
    translation: {
      title: 'Clubs Map',
      labels: {
        direccion: 'Address',
        horarios: 'Schedule',
        armas: 'Weapons practiced',
      },
      button: {
        idioma: 'Switch to Spanish',
        temaOscuro: 'Switch to dark mode',
        temaClaro: 'Switch to light mode',
      },
      mapa: { verClub: 'View {{nombre}}' },
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
