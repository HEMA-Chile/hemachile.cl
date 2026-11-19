import { useEffect, useState } from 'react'

export type Tema = 'light' | 'dark'

function temaInicial(): Tema {
  try {
    const guardado = localStorage.getItem('theme')
    if (guardado === 'light' || guardado === 'dark') return guardado
  } catch {
    /* localStorage no disponible */
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Tema claro/oscuro: respeta la preferencia del sistema y recuerda la elección. */
export function useTema() {
  const [tema, setTema] = useState<Tema>(temaInicial)

  useEffect(() => {
    document.documentElement.dataset.theme = tema
    try {
      localStorage.setItem('theme', tema)
    } catch {
      /* ignorar */
    }
  }, [tema])

  const alternar = () => setTema((t) => (t === 'dark' ? 'light' : 'dark'))
  return { tema, alternar }
}
