import { ExternalLink, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoIfhema from "../assets/ifhema.webp";
import { IFHEMA, PAISES_MIEMBROS, PAISES_OBSERVADORES } from "../data/ifhema";
import { Enlace, RUTAS } from "../router";

const tarjeta =
  "rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm dark:bg-black/80 dark:shadow-gray-300/20";
const pildora =
  "rounded-full border border-gray-300 px-3 py-1 text-sm dark:border-gray-700";

/** Página sobre IFHEMA y la participación de Chile como observador. */
export function Ifhema() {
  const { t, i18n } = useTranslation();
  const idioma = i18n.language === "en" ? "en" : "es";
  const lista = (clave: string) =>
    t(clave, { returnObjects: true }) as string[];

  return (
    <main className="panel-oscuro px-6 py-8 ancho:px-12">
      <article className="mx-auto flex max-w-3xl flex-col gap-6">
        <header className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
          <img
            src={logoIfhema}
            alt={t("ifhema.logoAlt")}
            width={364}
            height={480}
            className="h-36 w-auto shrink-0 dark:invert"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">{t("ifhema.titulo")}</h1>
            <p className="text-lg">{t("ifhema.intro")}</p>
          </div>
        </header>

        <section className={`${tarjeta} border-l-4 border-[#cc2b31]`}>
          <h2 className="mb-3 text-xl font-bold">{t("ifhema.chileTitulo")}</h2>
          <div className="space-y-3">
            {lista("ifhema.chile").map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Enlace
            to={RUTAS.reconocimiento}
            className="mt-4 inline-block font-bold text-[#cc2b31] hover:underline"
          >
            {t("ifhema.verSolicitud")}
          </Enlace>
        </section>

        <section className={tarjeta}>
          <h2 className="mb-3 text-xl font-bold">{t("ifhema.queEsTitulo")}</h2>
          <div className="space-y-3">
            {lista("ifhema.queEs").map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <div className="grid gap-6 sm:grid-cols-2">
          <section className={tarjeta}>
            <h2 className="mb-3 text-xl font-bold">
              {t("ifhema.objetivosTitulo")}
            </h2>
            <ul className="list-inside list-disc space-y-1">
              {lista("ifhema.objetivos").map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </section>
          <section className={tarjeta}>
            <h2 className="mb-3 text-xl font-bold">
              {t("ifhema.organizacionTitulo")}
            </h2>
            <div className="space-y-3">
              {lista("ifhema.organizacion").map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        </div>

        <section className={tarjeta}>
          <h2 className="mb-1 text-xl font-bold">
            {t("ifhema.miembrosTitulo")}
          </h2>
          <p className="mb-4 text-sm text-gray-700 italic dark:text-gray-300">
            {t("ifhema.miembrosNota", { fecha: IFHEMA.revisado[idioma] })}
          </p>
          <h3 className="mb-2 font-bold">{t("ifhema.federaciones")}</h3>
          <ul className="mb-5 flex flex-wrap gap-2">
            {PAISES_MIEMBROS.map((p) => (
              <li key={p.es} className={pildora}>
                {p[idioma]}
              </li>
            ))}
          </ul>
          <h3 className="mb-2 font-bold">{t("ifhema.observadores")}</h3>
          <ul className="flex flex-wrap gap-2">
            {PAISES_OBSERVADORES.map((p) => (
              <li
                key={p.es}
                className={
                  p.chile
                    ? "rounded-full bg-[#cc2b31] px-3 py-1 text-sm font-bold text-white"
                    : pildora
                }
              >
                {p[idioma]}
              </li>
            ))}
          </ul>
        </section>

        <section className={tarjeta}>
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
            <Trophy size={22} aria-hidden />
            {t("ifhema.copaTitulo")}
          </h2>
          <div className="space-y-3">
            {lista("ifhema.copa").map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <a
          href={IFHEMA.sitio}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 self-start rounded-xl bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          <ExternalLink size={18} aria-hidden />
          {t("ifhema.visitar")}
        </a>
      </article>
    </main>
  );
}
