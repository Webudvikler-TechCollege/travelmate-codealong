import { useParams } from "react-router-dom"
import { useCountry } from "../../../hooks/useCountries"
import { SERVER_URL } from "../../../config/api"

export const CountryDetails = () => {
    const { id } = useParams()
    const { country, error } = useCountry(id!)

    // Håndter fejl og vent på data.
    if (error) return <p role="alert">{error}</p>
    if (!country) return <p>Henter land...</p>

    // Find den danske beskrivelse.
    const info = country.infos.find(info => info.language.code === "en")

    if (!info) return <p>Ingen dansk beskrivelse fundet.</p>

    return (
        <article>
            <h1>{info.name}</h1>

            <img
                src={new URL(country.image, SERVER_URL).href}
                alt={info.name}
                style={{ width: "100%", maxWidth: 600, borderRadius: 12 }}
            />

            <p>{info.description}</p>
            <p>Landekode: {country.code}</p>
        </article>
    )

    return (
        <div></div>
    )
}
