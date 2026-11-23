import type { ReactNode } from 'react'
import type { Silueta } from '../data/hema'

/**
 * Perfiles de los simuladores, dibujados a escala común (1 unidad = 1 cm):
 * hojas sin filo y puntas romas, como los que se usan en los clubes.
 * La empuñadura va a la izquierda. El lienzo mide 140 cm de ancho.
 */
export const ANCHO_CM = 140

/** Hoja recta con punta redondeada. */
function Hoja({
  x0,
  x1,
  a0,
  a1,
  y,
}: {
  x0: number
  x1: number
  a0: number
  a1: number
  y: number
}) {
  const r = a1 * 0.9
  return (
    <path
      d={`M${x0},${y - a0 / 2} L${x1 - r},${y - a1 / 2} Q${x1},${y - a1 / 2} ${x1},${y} Q${x1},${y + a1 / 2} ${x1 - r},${y + a1 / 2} L${x0},${y + a0 / 2} Z`}
    />
  )
}

const trazo = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 0.7,
  strokeLinecap: 'round' as const,
}

function Ropera({ y }: { y: number }) {
  return (
    <g>
      <ellipse cx={2} cy={y} rx={1.8} ry={1.6} />
      <rect x={3.6} y={y - 0.9} width={8.6} height={1.8} />
      <rect x={12} y={y - 12} width={0.8} height={24} rx={0.4} />
      {/* taza */}
      <path d={`M12.8,${y - 6} Q20.5,${y - 6} 20.5,${y} Q20.5,${y + 6} 12.8,${y + 6} Z`} />
      {/* guardamano */}
      <path d={`M12.4,${y + 11.6} Q3.2,${y + 11} 2,${y + 1.6}`} {...trazo} />
      <Hoja x0={20.4} x1={121} a0={1.6} a1={0.9} y={y} />
      <circle cx={121.2} cy={y} r={0.9} />
    </g>
  )
}

function Broquel({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={14.6}
        fill="currentColor"
        fillOpacity={0.12}
        stroke="currentColor"
        strokeWidth={0.8}
      />
      <circle cx={cx} cy={cy} r={5.2} fillOpacity={0.55} />
      <circle cx={cx} cy={cy} r={5.2} {...trazo} strokeWidth={0.5} />
    </g>
  )
}

const DIBUJOS: Record<Silueta, { alto: number; dibujo: ReactNode }> = {
  larga: {
    alto: 32,
    dibujo: (
      <g>
        {/* pomo en forma de pera */}
        <path d="M7.6,14.9 C6.2,14.5 4.8,13.6 3.2,13.7 C0.5,13.9 0.5,18.1 3.2,18.3 C4.8,18.4 6.2,17.5 7.6,17.1 Z" />
        {/* mango: más grueso hacia la guarda, se afina hacia el pomo */}
        <path d="M7.4,14.9 L18,14.45 L28,14.6 L28,17.4 L18,17.55 L7.4,17.1 Z" />
        <rect x={28} y={3} width={1.2} height={26} rx={0.6} />
        {/* schilt: ensanche de la hoja junto a la guarda */}
        <path d="M29.2,13.3 L34,13.3 L36.2,15 L36.2,17 L34,18.7 L29.2,18.7 Z" />
        <Hoja x0={36} x1={129} a0={2} a1={1.4} y={16} />
        <circle cx={129.4} cy={16} r={1.15} />
      </g>
    ),
  },
  broquel: {
    alto: 32,
    dibujo: (
      <g>
        <circle cx={2.8} cy={16} r={2.6} />
        <rect x={5.2} y={14.9} width={10} height={2.2} />
        <rect x={15} y={7} width={1.1} height={18} rx={0.55} />
        <Hoja x0={16} x1={95} a0={4.2} a1={2.2} y={16} />
        <Broquel cx={122} cy={16} />
      </g>
    ),
  },
  ropera: { alto: 32, dibujo: <Ropera y={16} /> },
  roperaDaga: {
    alto: 50,
    dibujo: (
      <g>
        <Ropera y={14} />
        <circle cx={1.5} cy={38} r={1.3} />
        <rect x={2.6} y={37.2} width={8.6} height={1.6} />
        <rect x={11} y={28} width={0.8} height={20} rx={0.4} />
        <Hoja x0={11.8} x1={48} a0={2.6} a1={1.2} y={38} />
      </g>
    ),
  },
  roperaBroquel: {
    alto: 50,
    dibujo: (
      <g>
        <Ropera y={14} />
        <Broquel cx={118} cy={34.4} />
      </g>
    ),
  },
  lado: {
    alto: 32,
    dibujo: (
      <g>
        <circle cx={2.4} cy={16} r={2.2} />
        <rect x={4.4} y={15} width={8.8} height={2} />
        <rect x={13} y={5} width={1} height={22} rx={0.5} />
        <ellipse cx={16.6} cy={16} rx={2.6} ry={4.4} {...trazo} />
        <path d="M13.4,26.6 Q3.4,26 2.4,18" {...trazo} />
        <Hoja x0={14} x1={105} a0={3.2} a1={1.6} y={16} />
      </g>
    ),
  },
  sable: {
    alto: 32,
    dibujo: (
      <g>
        {/* empuñadura inclinada, con monterilla */}
        <path d="M14.6,14.5 L5.2,15.5 C3.2,15.8 2,16.9 2.2,18.2 L2.6,19.6 L14.6,17.7 Z" />
        {/* gavilán trasero */}
        <rect x={14.4} y={11.6} width={1.3} height={6.4} rx={0.6} />
        {/* cazoleta: ancha junto a la hoja, se cierra en el pomo */}
        <path
          fillRule="evenodd"
          d="M15.7,17 C16.2,24.8 10.6,27.4 6.2,24.6 C3.9,23.1 2.7,21.2 2.4,19.2 L14.4,17.2 Z M12.6,19.3 C12.2,22.6 9.2,23.9 6.9,22.5 C5.7,21.7 4.9,20.9 4.6,20.3 Z"
        />
        {/* hoja de curvatura leve, que se afina hacia una punta roma */}
        <path d="M15.4,14.7 C45,14.7 75,13.7 98.4,10.7 Q100.2,10.7 99.9,12.1 C76,15.5 45,17.3 15.4,17.3 Z" />
      </g>
    ),
  },
  messer: {
    alto: 32,
    dibujo: (
      <g>
        {/* empuñadura de cachas con pomo en pico hacia el filo */}
        <path d="M21,14.7 L8,14.9 C5.2,15 3.2,14.7 1.6,14.2 L1.2,18.7 C2.1,19.5 3.5,19.4 4.5,18.7 L8,17.6 L21,17.4 Z" />
        <rect x={20.8} y={6} width={1.1} height={20} rx={0.55} />
        {/* hoja de un filo, apenas curva, con el lomo recortado hacia la punta */}
        <path d="M21.8,14.3 C45,14.2 70,14 88,13.5 L97.4,15.3 Q98.7,16 97.4,16.5 Q90,17.9 70,17.8 L21.8,17.9 Z" />
      </g>
    ),
  },
  espadin: {
    alto: 32,
    dibujo: (
      <g>
        <ellipse cx={1.6} cy={16} rx={1.4} ry={1.2} />
        <rect x={2.8} y={15.25} width={8.8} height={1.5} />
        <rect x={11.5} y={12.8} width={0.8} height={6.4} rx={0.4} />
        <path d="M11.8,19 Q3,20.6 1.8,17" {...trazo} strokeWidth={0.5} />
        <Hoja x0={12.2} x1={97.6} a0={1.1} a1={0.6} y={16} />
        <circle cx={97.8} cy={16} r={0.75} />
      </g>
    ),
  },
  rondel: {
    alto: 32,
    dibujo: (
      <g>
        <rect x={0.5} y={13.4} width={1.1} height={5.2} rx={0.4} />
        <rect x={1.6} y={15.15} width={10} height={1.7} />
        <rect x={11.5} y={13.2} width={1.1} height={5.6} rx={0.4} />
        <Hoja x0={12.6} x1={44} a0={2.6} a1={1.1} y={16} />
      </g>
    ),
  },
  baston: {
    alto: 32,
    dibujo: (
      <g>
        <rect x={1} y={15} width={94} height={2} rx={1} />
        {/* cazoleta de cuero o mimbre */}
        <path d="M16,17 C16,29 2,28.2 2.6,17 Z" fillOpacity={0.45} />
        <path d="M16,13.4 L16,17 C16,29 2,28.2 2.6,17" {...trazo} />
      </g>
    ),
  },
}

export function SiluetaArma({ silueta, className }: { silueta: Silueta; className?: string }) {
  const { alto, dibujo } = DIBUJOS[silueta]
  return (
    <svg viewBox={`0 0 ${ANCHO_CM} ${alto}`} className={className} fill="currentColor" aria-hidden>
      {dibujo}
    </svg>
  )
}

/** Regla en centímetros, a la misma escala que las siluetas. */
export function ReglaCm({ className }: { className?: string }) {
  const marcas = Array.from({ length: 14 }, (_, i) => i * 10)
  return (
    <svg viewBox={`0 0 ${ANCHO_CM} 7`} className={className} aria-hidden>
      <line x1={0} y1={0.4} x2={130} y2={0.4} stroke="currentColor" strokeWidth={0.3} />
      {marcas.map((cm) => (
        <g key={cm}>
          <line
            x1={cm}
            y1={0.4}
            x2={cm}
            y2={cm % 50 === 0 ? 2.6 : 1.6}
            stroke="currentColor"
            strokeWidth={0.3}
          />
          {cm % 50 === 0 && (
            <text x={cm + 0.8} y={6.4} fontSize={3.4} fill="currentColor">
              {cm === 0 ? '0 cm' : cm}
            </text>
          )}
        </g>
      ))}
    </svg>
  )
}
