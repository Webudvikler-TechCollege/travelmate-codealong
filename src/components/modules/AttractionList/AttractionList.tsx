import { Link } from "react-router-dom"
import { SERVER_URL } from "../../../config/api"
import { useLanguage } from "../../../context/LanguageContext"
import { useAttractions } from "../../../hooks/useAttractions"

export const AttractionList = () => {
    const { attractions, isLoading, error } = useAttractions()
    const { language } = useLanguage()

    if (error) return <p role="alert">{error}</p>

    if(isLoading) return <p>Loading...</p>

    return (
        <ul>
            {attractions.map(attraction => {
                const info = attraction.infos.find(
                    info => info.language.code === language
                )

                if (!info) return null

                return (
                    <li key={attraction.id}>
                        <Link to={`/countries/${attraction.id}`}>
                            <img
                                src={new URL(attraction.image, SERVER_URL).href}
                                alt={info.name}
                                width={300}
                            />
                            <h2>{info.name}</h2>
                            <p>{info.description}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}