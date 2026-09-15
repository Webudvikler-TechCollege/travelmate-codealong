import { API_URL } from "../config/api"
import type { Country } from "../types/api.types"
import { useFetch } from "./useFetch"

export const useCountries = () => {
    const { data, error } = useFetch<Country[]>(`${API_URL}/countries`)

    return {
        countries: data ?? [],
        error
    }
}

export const useCountry = (id: string) => {
    const { data, error } = useFetch<Country>(`${API_URL}/countries/${id}`)

    return {
        country: data,
        error
    }
}