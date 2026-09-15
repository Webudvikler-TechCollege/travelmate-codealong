import { API_URL } from "../config/api"
import type { Attraction } from "../types/api.types"
import { useFetch } from "./useFetch"

export const useAttractions = () => {
    const { data, error, isLoading } = useFetch<Attraction[]>(`${API_URL}/attractions`)

    return {
        attractions: data ?? [],
        isLoading,
        error
    }
}

export const useAttraction = (id: string) => {
    const { data, error, isLoading } = useFetch<Attraction>(`${API_URL}/attractions/${id}`)

    return {
        attraction: data,
        isLoading,
        error
    }
}