import type { Club } from '../data/clubes'

/** Logo del club; usa la versión para modo oscuro cuando existe. */
export function LogoClub({ club, className }: { club: Club; className?: string }) {
  if (!club.iconoOscuro) {
    return <img src={club.icono} alt="" className={className} loading="lazy" />
  }
  return (
    <>
      <img src={club.icono} alt="" className={`${className ?? ''} dark:hidden`} loading="lazy" />
      <img
        src={club.iconoOscuro}
        alt=""
        className={`${className ?? ''} hidden dark:block`}
        loading="lazy"
      />
    </>
  )
}
