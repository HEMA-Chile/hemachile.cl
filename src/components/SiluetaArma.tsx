import type { ReactNode } from "react";
import type { Silueta } from "../data/hema";

/**
 * Perfiles de los simuladores, dibujados a escala común (1 unidad = 1 cm):
 * hojas sin filo y puntas romas, como los que se usan en los clubes.
 * La empuñadura va a la izquierda. El lienzo mide 140 cm de ancho.
 */
export const ANCHO_CM = 140;

/** Hoja recta con punta redondeada. */
function Hoja({
  x0,
  x1,
  a0,
  a1,
  y,
}: {
  x0: number;
  x1: number;
  a0: number;
  a1: number;
  y: number;
}) {
  const r = a1 * 0.9;
  return (
    <path
      d={`M${x0},${y - a0 / 2} L${x1 - r},${y - a1 / 2} Q${x1},${y - a1 / 2} ${x1},${y} Q${x1},${y + a1 / 2} ${x1 - r},${y + a1 / 2} L${x0},${y + a0 / 2} Z`}
    />
  );
}

const trazo = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 0.7,
  strokeLinecap: "round" as const,
};

function Ropera({ y }: { y: number }) {
  return (
    <g>
      <ellipse cx={2} cy={y} rx={1.8} ry={1.6} />
      <rect x={3.6} y={y - 0.9} width={8.6} height={1.8} />
      <rect x={12} y={y - 12} width={0.8} height={24} rx={0.4} />
      {/* taza */}
      <path
        d={`M12.8,${y - 6} Q20.5,${y - 6} 20.5,${y} Q20.5,${y + 6} 12.8,${y + 6} Z`}
      />
      {/* guardamano */}
      <path d={`M12.4,${y + 11.6} Q3.2,${y + 11} 2,${y + 1.6}`} {...trazo} />
      <Hoja x0={20.4} x1={121} a0={1.6} a1={0.9} y={y} />
      <circle cx={121.2} cy={y} r={0.9} />
    </g>
  );
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
  );
}

const DIBUJOS: Record<Silueta, { alto: number; dibujo: ReactNode }> = {
  larga: {
    alto: 32,
    dibujo: (
      <g>
        <ellipse cx={3} cy={16} rx={2.7} ry={2.2} />
        <path d="M5.4,14.5 L28,14.9 L28,17.1 L5.4,17.5 Z" />
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
        <rect x={2.4} y={14.8} width={13} height={2.4} rx={0.8} />
        {/* cazoleta */}
        <path d="M15.6,17 C15.6,28 2,27.4 2.4,17 Z" fillOpacity={0.5} />
        <path d="M15.6,13 L15.6,17 C15.6,28 2,27.4 2.4,17" {...trazo} />
        <path d="M15.4,14.6 Q60,14 99.4,10.8 Q101,11.6 100.2,13 Q60,17.6 15.4,17.6 Z" />
      </g>
    ),
  },
  messer: {
    alto: 32,
    dibujo: (
      <g>
        <path d="M0.6,17.6 L2,14.6 L20,14.9 L20,17.1 L2.4,18.4 Z" />
        <rect x={20} y={7} width={1} height={18} rx={0.5} />
        <path d="M21,14 L88,14.3 L97.6,17 Q97.8,18.1 96,18.1 Q60,18.4 21,18 Z" />
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
        <path d="M16,13.4 L16,17 C16,29 2,28.2 2.6,17 Z" fillOpacity={0.45} />
        <path d="M16,13.4 L16,17 C16,29 2,28.2 2.6,17" {...trazo} />
      </g>
    ),
  },
};

export function SiluetaArma({
  silueta,
  className,
}: {
  silueta: Silueta;
  className?: string;
}) {
  const { alto, dibujo } = DIBUJOS[silueta];
  return (
    <svg
      viewBox={`0 0 ${ANCHO_CM} ${alto}`}
      className={className}
      fill="currentColor"
      aria-hidden
    >
      {dibujo}
    </svg>
  );
}

/** Regla en centímetros, a la misma escala que las siluetas. */
export function ReglaCm({ className }: { className?: string }) {
  const marcas = Array.from({ length: 14 }, (_, i) => i * 10);
  return (
    <svg viewBox={`0 0 ${ANCHO_CM} 7`} className={className} aria-hidden>
      <line
        x1={0}
        y1={0.4}
        x2={130}
        y2={0.4}
        stroke="currentColor"
        strokeWidth={0.3}
      />
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
              {cm === 0 ? "0 cm" : cm}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
