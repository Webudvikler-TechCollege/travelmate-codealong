import { Link } from "react-router-dom"
import { SERVER_URL } from "../../../config/api"
import { useLanguage } from "../../../context/LanguageContext"
import { useAttractions } from "../../../hooks/useAttractions"
import { ListStyled } from "../../../styled/elements"
import { Card } from "../../elements/Card/Card"

export const AttractionList = () => {
    const { attractions, isLoading, error } = useAttractions()
    const { language } = useLanguage()

    if (error) return <p role="alert">{error}</p>

    if (isLoading) return <p>Loading...</p>

    return (
        <ListStyled>
            {attractions.map(attraction => {
                const info = attraction.infos.find(
                    info => info.language.code === language
                )

                if (!info) return null

                return (
                    <Link to={`/attractions/${attraction.id}`}>
                        <Card 
                            key={attraction.id} image={new URL(attraction.image, SERVER_URL).href} 
                            title={info.name}
                            subtitle={info.description}
                        />
                    </Link>
                )
            })}
        </ListStyled>
    )
}