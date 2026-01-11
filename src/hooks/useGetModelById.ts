import { getDetailsById } from "@/services/api"
import type { TopLevel } from "@/types/models"
import { useEffect, useState } from "react"

const useGetModelById = (id: number) => {
    const [models, setModels] = useState<TopLevel>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const data = await getDetailsById(id)
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

    return {
        models,
        error,
        loading
    }

}

export default useGetModelById