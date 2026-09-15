import { Link } from "react-router-dom"
import { SERVER_URL } from "../../../config/api"
import { useCountries } from "../../../hooks/useCountries"

export const CountryList = () => {
    const { countries, error } = useCountries()

    if (error) return <p role="alert">{error}</p>

    return (
        <ul>
            {countries.map(country => {
                const info = country.infos.find(
                    info => info.language.code === "da"
                )

                if (!info) return null

                return (
                    <li key={country.id}>
                        <Link to={`/countries/${country.id}`}>
                            <img
                                src={new URL(country.image, SERVER_URL).href}
                                alt={info.name}
                                width={300}
                            />
                            <h2>{info.name}</h2>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}