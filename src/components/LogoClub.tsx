import type { Club } from '../data/clubes'

interface Props {
  club: Club
  className?: string
  /** Cargar de inmediato (logo principal de una página) en vez de en diferido. */
  eager?: boolean
}

/** Logo del club; usa la versión para modo oscuro cuando existe. */
export function LogoClub({ club, className, eager }: Props) {
  const carga = eager ? 'eager' : 'lazy'
  const alt = `Logo de ${club.nombre}`
  if (!club.iconoOscuro) {
    return <img src={club.icono} alt={alt} className={className} loading={carga} />
  }
  return (
    <>
      <img src={club.icono} alt={alt} className={`${className ?? ''} dark:hidden`} loading={carga} />
      <img
        src={club.iconoOscuro}
        alt={alt}
        className={`${className ?? ''} hidden dark:block`}
        loading={carga}
      />
    </>
  )
}
