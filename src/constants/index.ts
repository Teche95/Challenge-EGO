import { Pathnames } from "@/routes/pathNames"

interface NavProps {
    name: string,
    href?: string
}

interface NavLinks {
    links: NavProps[]
}

export const NavLinksProps: NavLinks = {
    links: [
        { name: 'Modelos', href: Pathnames.landing.home },
        { name: 'Ficha de modelo' }
    ]

}

export const SEGMENTS = [
  "Todos",
  "Autos",
  "Pickups y Comerciales",
  "SUVs y Crossovers",
] as const

export const SORT_OPTIONS = [
  "Nada",
  "De menor a mayor precio",
  "De mayor a menor precio",
  "Más nuevos primero",
  "Más viejos primero",
] as const

export type SegmentType = typeof SEGMENTS[number]
export type SortType = typeof SORT_OPTIONS[number]