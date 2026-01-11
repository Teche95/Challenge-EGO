import type { CarModel, TopLevel } from "@/types/models"
import axios from "axios"


export const api = axios.create({
  baseURL: "https://challenge.egodesign.dev/api",
})


export const getModels = async (): Promise<CarModel[]> => {
  const response = await api.get<CarModel[]>("/models/")
  return response.data
}

export const getDetailsById = async (id: number): Promise<TopLevel> => {
  const response = await api.get<TopLevel>(`/models/${id}`)
  return response.data
}

