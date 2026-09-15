import { API_URL } from "../config/api"
import type { Country } from "../types/api.types"
import { useFetch } from "./useFetch"

export const useCountries = () => {
    const { data, error, isLoading } = useFetch<Country[]>(`${API_URL}/countries`)

    return {
        countries: data ?? [],
        isLoading,
        error
    }
}

export const useCountry = (id: string) => {
    const { data, error, isLoading } = useFetch<Country>(`${API_URL}/countries/${id}`)

    return {
        country: data,
        isLoading,
        error
    }
}