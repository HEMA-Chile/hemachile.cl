import { useState } from 'react'
import { Check, MapPinned, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ARMAS } from '../data/armas'
import {
  ARMAS_HISTORICAS,
  CHILE,
  EQUIPO,
  FIN,
  INICIO,
  JUGADAS,
  MITOS,
  SIMULADOR,
} from '../data/hema'
import { Enlace, RUTAS } from '../router'
import { ReglaCm, SiluetaArma } from './SiluetaArma'

const panel =
  'rounded-2xl bg-white/90 p-5 shadow-md backdrop-blur-sm sm:p-6 dark:bg-black/80 dark:shadow-gray-300/20'
const SIGLOS = [1300, 1400, 1500, 1600, 1700, 1800, 1900]
const pct = (anio: number) => ((anio - INICIO) / (FIN - INICIO)) * 100
/** Posición (cm desde el pomo) de cada marca sobre la espada del inicio. */
const MARCAS_CM = [15, 62, 100, 129.4]

export function QueEsHema() {
  const { t, i18n } = useTranslation()
  const idioma = i18n.language === 'en' ? 'en' : 'es'
  const [elegida, setElegida] = useState(1) // espada larga
  const [respuestas, setRespuestas] = useState<Record<number, boolean>>({})
  const [vueltas, setVueltas] = useState<Record<number, boolean>>({})
  const arma = ARMAS_HISTORICAS[elegida]

  return (
    <main className="panel-oscuro px-6 py-8 ancho:px-12">
      <article className="mx-auto flex max-w-4xl flex-col gap-14">
        {/* Inicio: la definición y el simulador, a escala */}
        <header className="flex flex-col gap-6">
          <h1 className="max-w-3xl text-4xl leading-tight font-bold sm:text-5xl sm:leading-tight">
            {t('hema.titulo')}
          </h1>
          <p className="max-w-2xl text-lg">{t('hema.intro')}</p>

          <figure className="mt-2">
            <div className="relative">
              <SiluetaArma silueta="larga" className="block w-full" />
              {MARCAS_CM.map((cm, i) => (
                <span
                  key={cm}
                  aria-hidden
                  className="absolute top-0 flex h-[calc(50%-3px)] -translate-x-1/2 flex-col items-center"
                  style={{ left: `${(cm / 140) * 100}%` }}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cc2b31] text-xs font-bold text-white sm:h-6 sm:w-6">
                    {i + 1}
                  </span>
                  <span className="w-px flex-1 bg-[#cc2b31]" />
                </span>
              ))}
            </div>
            <div>
              <ReglaCm className="mt-1 block w-full text-gray-600 dark:text-gray-400" />
            </div>
            <figcaption className="mt-4">
              <p className="mb-3 text-sm text-gray-700 italic dark:text-gray-300">
                {t('hema.simulador')}
              </p>
              <ol className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {SIMULADOR.map((s, i) => (
                  <li key={s.es} className="flex items-baseline gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center self-center rounded-full bg-[#cc2b31] text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {s[idioma]}
                  </li>
                ))}
              </ol>
            </figcaption>
          </figure>
        </header>

        {/* Armas en el tiempo */}
        <section className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">{t('hema.armasTitulo')}</h2>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{t('hema.armasAyuda')}</p>
          </div>

          <div className={panel}>
            <div className="mb-1 hidden sm:grid sm:grid-cols-[13rem_1fr] sm:gap-3">
              <span />
              <div className="relative h-5 text-xs text-gray-600 dark:text-gray-400" aria-hidden>
                {SIGLOS.map((s, i) => (
                  <span
                    key={s}
                    className={
                      'absolute ' +
                      (i === 0
                        ? ''
                        : i === SIGLOS.length - 1
                          ? '-translate-x-full'
                          : '-translate-x-1/2')
                    }
                    style={{ left: `${pct(s)}%` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <ul className="flex flex-col">
              {ARMAS_HISTORICAS.map((a, i) => {
                const activa = i === elegida
                return (
                  <li key={a.id}>
                    <button
                      type="button"
                      aria-pressed={activa}
                      onClick={() => setElegida(i)}
                      className={
                        'grid w-full cursor-pointer items-center gap-x-3 gap-y-1 rounded-lg px-2 py-1.5 text-left sm:grid-cols-[13rem_1fr] ' +
                        (activa
                          ? 'bg-black/5 dark:bg-white/10'
                          : 'hover:bg-black/5 dark:hover:bg-white/10')
                      }
                    >
                      <span className={'text-sm ' + (activa ? 'font-bold' : '')}>
                        {ARMAS[a.id][idioma]}
                      </span>
                      <span className="relative block h-3 rounded-full bg-black/5 dark:bg-white/10">
                        <span
                          className={
                            'absolute inset-y-0 rounded-full transition-colors ' +
                            (activa ? 'bg-[#cc2b31]' : 'bg-gray-500 dark:bg-gray-400')
                          }
                          style={{
                            left: `${pct(a.desde)}%`,
                            width: `${pct(a.hasta) - pct(a.desde)}%`,
                          }}
                        />
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <div
              aria-live="polite"
              className="mt-5 border-t border-gray-300 pt-5 dark:border-gray-700"
            >
              <SiluetaArma silueta={arma.silueta} className="block w-full" />
              <ReglaCm className="mt-1 block w-full text-gray-600 dark:text-gray-400" />
              <h3 className="mt-4 text-xl font-bold">{ARMAS[arma.id][idioma]}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {arma.siglos[idioma]}. {arma.manos[idioma]}.
              </p>
              <p className="mt-2 max-w-2xl">{arma.texto[idioma]}</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {t('hema.fuentes')}: {arma.fuentes}
              </p>
            </div>
          </div>
        </section>

        {/* ¿Punto o no? */}
        <section className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">{t('hema.puntoTitulo')}</h2>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{t('hema.puntoAyuda')}</p>
          </div>
          <ol className={`${panel} divide-y divide-gray-300 !py-1 dark:divide-gray-700`}>
            {JUGADAS.map((j, i) => {
              const respondida = i in respuestas
              const acierto = respuestas[i] === j.vale
              return (
                <li
                  key={j.accion.es}
                  className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="sm:max-w-md">
                    <p className="font-bold">{j.accion[idioma]}</p>
                    <p aria-live="polite" className="mt-1 min-h-6 text-sm">
                      {respondida && (
                        <>
                          <strong
                            className={
                              j.vale ? 'text-[#0253a4] dark:text-[#6aa9ea]' : 'text-[#cc2b31]'
                            }
                          >
                            {t(j.vale ? 'hema.vale' : 'hema.noVale')}.
                          </strong>{' '}
                          {j.porQue[idioma]} {t(acierto ? 'hema.acierto' : 'hema.fallo')}
                        </>
                      )}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    {[true, false].map((opcion) => {
                      const marcada = respondida && respuestas[i] === opcion
                      return (
                        <button
                          key={String(opcion)}
                          type="button"
                          disabled={respondida}
                          onClick={() => setRespuestas((r) => ({ ...r, [i]: opcion }))}
                          className={
                            'inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-sm font-bold ' +
                            (marcada
                              ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                              : 'border-gray-400 enabled:cursor-pointer enabled:hover:bg-black/5 disabled:opacity-40 dark:border-gray-600 dark:enabled:hover:bg-white/10')
                          }
                        >
                          {opcion ? <Check size={16} aria-hidden /> : <X size={16} aria-hidden />}
                          {t(opcion ? 'hema.vale' : 'hema.noVale')}
                        </button>
                      )
                    })}
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        {/* Protección */}
        <section className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">{t('hema.equipoTitulo')}</h2>
            <p className="mt-1 max-w-2xl text-gray-700 dark:text-gray-300">
              {t('hema.equipoAyuda')}
            </p>
          </div>
          <dl className="grid gap-x-10 border-t border-gray-400 sm:grid-cols-2 dark:border-gray-600">
            {EQUIPO.map((e) => (
              <div key={e.id} className="border-b border-gray-300 py-3 dark:border-gray-700">
                <dt className="font-bold">{e.nombre[idioma]}</dt>
                <dd className="text-sm text-gray-700 dark:text-gray-300">{e.texto[idioma]}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Mitos */}
        <section className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">{t('hema.mitosTitulo')}</h2>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{t('hema.mitosAyuda')}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {MITOS.map((m, i) => {
              const vuelta = !!vueltas[i]
              return (
                <li key={m.mito.es} className="perspective-distant">
                  <button
                    type="button"
                    aria-pressed={vuelta}
                    onClick={() => setVueltas((v) => ({ ...v, [i]: !v[i] }))}
                    className={
                      'relative block h-40 w-full cursor-pointer text-left transition-transform duration-500 transform-3d motion-reduce:transition-none ' +
                      (vuelta ? 'rotate-y-180' : '')
                    }
                  >
                    <span
                      aria-hidden={vuelta}
                      className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-black p-5 text-white backface-hidden dark:bg-white dark:text-black"
                    >
                      <span className="text-xl leading-snug font-bold">{m.mito[idioma]}</span>
                      <span className="text-sm opacity-70">{t('hema.verRealidad')}</span>
                    </span>
                    <span
                      aria-hidden={!vuelta}
                      className="absolute inset-0 flex rotate-y-180 flex-col justify-center rounded-2xl border-2 border-[#cc2b31] bg-white p-5 backface-hidden dark:bg-black"
                    >
                      <span className="leading-snug">{m.realidad[idioma]}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Chile */}
        <section className="flex flex-col gap-5 border-t border-gray-400 pt-8 dark:border-gray-600">
          <h2 className="text-2xl font-bold">{t('hema.chileTitulo')}</h2>
          <p className="max-w-2xl text-lg">{t('hema.chile', CHILE)}</p>
          <div className="flex flex-wrap gap-3">
            <Enlace
              to={RUTAS.mapa}
              className="inline-flex items-center gap-2 rounded-xl bg-[#cc2b31] px-5 py-2.5 font-bold text-white shadow-sm hover:bg-[#a82228]"
            >
              <MapPinned size={18} aria-hidden />
              {t('hema.buscarClub')}
            </Enlace>
            <Enlace
              to={RUTAS.reconocimiento}
              className="inline-flex items-center rounded-xl border border-gray-400 px-5 py-2.5 font-bold hover:bg-black/5 dark:border-gray-600 dark:hover:bg-white/10"
            >
              {t('hema.verReconocimiento')}
            </Enlace>
          </div>
        </section>
      </article>
    </main>
  )
}
