import { useEffect, useState } from 'react'
import type { Tema } from './useTema'

/** Lee el tema activo (data-theme en <html>) y se actualiza cuando cambia. */
export function useTemaActual(): Tema {
  const leer = (): Tema => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  const [tema, setTema] = useState<Tema>(leer)
  useEffect(() => {
    const observer = new MutationObserver(() => setTema(leer()))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])
  return tema
}
