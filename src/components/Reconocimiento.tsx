import { useTranslation } from 'react-i18next'
import { ARMAS, type Arma } from '../data/armas'

const tarjeta =
  'rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm dark:bg-black/80 dark:shadow-gray-300/20'

export function Reconocimiento() {
  const { t, i18n } = useTranslation()
  const idioma = i18n.language === 'en' ? 'en' : 'es'
  const parrafos = t('reconocimiento.porQue', { returnObjects: true }) as string[]

  return (
    <main className="panel-oscuro px-6 py-8 ancho:px-12">
      <article className="mx-auto flex max-w-3xl flex-col gap-6">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{t('reconocimiento.titulo')}</h1>
          <p className="text-lg">{t('reconocimiento.intro')}</p>
        </header>

        <section className={tarjeta}>
          <h2 className="mb-3 text-xl font-bold">{t('reconocimiento.porQueTitulo')}</h2>
          <div className="space-y-3">
            {parrafos.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className={tarjeta}>
          <h2 className="mb-3 text-xl font-bold">{t('reconocimiento.especialidadesTitulo')}</h2>
          <ol className="grid list-inside list-decimal gap-x-6 gap-y-1 sm:grid-cols-2">
            {(Object.keys(ARMAS) as Arma[]).map((arma) => (
              <li key={arma}>{ARMAS[arma][idioma]}</li>
            ))}
          </ol>
        </section>

        <section className={tarjeta}>
          <h2 className="mb-3 text-xl font-bold">{t('reconocimiento.respaldoTitulo')}</h2>
          <p>{t('reconocimiento.respaldo')}</p>
        </section>

      </article>
    </main>
  )
}
