import type { SegmentType, SortType } from "@/constants"
import { getModels } from "@/services/api"
import type { CarModel } from "@/types/models"
import { useEffect, useMemo, useState } from "react"

export const useModels = () => {
  const [models, setModels] = useState<CarModel[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [activeFilter, setActiveFilter] = useState<SegmentType>("Todos")
  const [activeSort, setActiveSort] = useState<SortType>("Nada")

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const data = await getModels()
        setModels(data)
      } catch (err) {
        console.error(err)
        setError("Error al cargar modelos")
      } finally {
        setLoading(false)
      }
    }

    fetchModels()
  }, [])

  const filteredAndSortedModels = useMemo(() => {
    let result = [...models]

    if (activeFilter === "Autos") {
      result = result.filter(m =>
        ["Sedan", "Hatchback"].includes(m.segment)
      )
    } else if (activeFilter === "SUVs y Crossovers") {
      result = result.filter(m => m.segment === "SUVs")
    } else if (activeFilter !== "Todos") {
      result = result.filter(m => m.segment === activeFilter)
    }

    switch (activeSort) {
      case "De menor a mayor precio":
        result.sort((a, b) => a.price - b.price)
        break

      case "De mayor a menor precio":
        result.sort((a, b) => b.price - a.price)
        break

      case "Más nuevos primero":
        result.sort((a, b) => b.year - a.year)
        break

      case "Más viejos primero":
        result.sort((a, b) => a.year - b.year)
        break
    }

    return result
  }, [models, activeFilter, activeSort])

  return {
    models: filteredAndSortedModels,
    loading,
    error,
    activeFilter,
    setActiveFilter,
    activeSort,
    setActiveSort,
  }
}