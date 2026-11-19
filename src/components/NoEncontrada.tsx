import { useTranslation } from 'react-i18next'
import { Enlace, RUTAS } from '../router'

export function NoEncontrada() {
  const { t } = useTranslation()
  return (
    <main className="panel-oscuro px-6 py-8 ancho:px-12">
      <article className="mx-auto flex max-w-3xl flex-col gap-4">
        <h1 className="text-3xl font-bold">{t('noEncontrada.titulo')}</h1>
        <p className="text-lg">{t('noEncontrada.texto')}</p>
        <Enlace to={RUTAS.reconocimiento} className="font-bold text-[#cc2b31] hover:underline">
          {t('noEncontrada.volver')}
        </Enlace>
      </article>
    </main>
  )
}
