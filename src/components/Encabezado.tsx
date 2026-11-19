import { Mail, Moon, Sun } from 'lucide-react'
import { IconoInstagram } from './IconoInstagram'
import { useTranslation } from 'react-i18next'
import { useTema } from '../hooks/useTema'
import { Menu } from './Menu'
import { Enlace, RUTAS } from '../router'
import logo from '../assets/logo-hema.png'
import logoOscuro from '../assets/logo-hema-negro.png'
import banderaEs from '../assets/flag-es.svg'
import banderaUk from '../assets/flag-uk.svg'

const boton =
  'flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm cursor-pointer ' +
  'dark:border-gray-700 dark:bg-black dark:shadow-md dark:shadow-gray-100/20'

export function Encabezado() {
  const { t, i18n } = useTranslation()
  const { tema, alternar } = useTema()
  const esEspanol = i18n.language === 'es'

  return (
    <header className="flex flex-wrap justify-between gap-4 p-6 ancho:px-5 panel-oscuro ancho:flex-col ancho:flex-nowrap">
      <div className="flex w-full flex-col gap-6">
        <Enlace to={RUTAS.reconocimiento} className="inline-block" aria-label="HEMA Chile">
          <img src={logo} className="block w-60 dark:hidden" alt="HEMA Chile" width={620} height={365} />
          <img src={logoOscuro} className="hidden w-60 dark:block" alt="HEMA Chile" width={620} height={365} />
        </Enlace>
        <Menu />
      </div>

      <div className="flex min-w-0 flex-col items-start justify-center gap-3 text-sm">
        <div className="flex w-full items-center justify-center gap-3 pb-2">
          <button
            type="button"
            className={boton}
            onClick={() => void i18n.changeLanguage(esEspanol ? 'en' : 'es')}
            aria-label={t('button.idioma')}
            title={t('button.idioma')}
          >
            <img src={esEspanol ? banderaUk : banderaEs} alt="" className="h-6 w-6" />
          </button>
          <button
            type="button"
            className={boton}
            onClick={alternar}
            aria-label={tema === 'dark' ? t('button.temaClaro') : t('button.temaOscuro')}
            title={tema === 'dark' ? t('button.temaClaro') : t('button.temaOscuro')}
          >
            {tema === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <a
          href="https://www.instagram.com/hema_chile_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <IconoInstagram size={18} />
          <strong>@hema_chile_</strong>
        </a>
        <a href="mailto:directorio.hemachile@gmail.com" className="flex max-w-full items-center gap-2 hover:underline">
          <Mail size={18} aria-hidden />
          <span className="truncate">directorio.hemachile@gmail.com</span>
        </a>
      </div>
    </header>
  )
}
