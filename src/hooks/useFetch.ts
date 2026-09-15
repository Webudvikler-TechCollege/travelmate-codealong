import { useEffect, useState } from "react"

type HttpMethod = "GET" | "PUT" | "POST" | "DELETE"

export const useFetch = <T>(
    url: string,
    method: HttpMethod = "GET",
    token?: string | null
) => {

    const [ data, setData ] = useState<T | null>(null)
    const [ error, setError ] = useState<string | null>(null)
    const [ isLoading, setIsLoading ] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: method,
                    headers: {
                        "Content-type": "application/json",
                        ...(token && {
                            Authorization: `Bearer ${token}`
                        })
                    }
                })

                const result = await response.json()
                
                setData(result)

                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)

            } catch (error) {
                if(error instanceof Error) {
                    setError(error.message)
                }
            }
        }

        fetchData()
    }, [url, method, token])

    return { data, error, isLoading }
}
