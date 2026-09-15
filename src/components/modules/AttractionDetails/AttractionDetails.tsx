import { useParams } from "react-router-dom"
import { SERVER_URL } from "../../../config/api"
import { useAttraction } from "../../../hooks/useAttractions"
import { DetailImage, DetailsGrid, DetailsStyled, InfoBox } from "../../../styled/elements"
import { useLanguage } from "../../../context/LanguageContext"

export const AttrationDetails = () => {
    const { id } = useParams()
    const { attraction, error } = useAttraction(id!)
    const { language } = useLanguage()

    // Håndter fejl og vent på data.
    if (error) return <p role="alert">{error}</p>
    if (!attraction) return <p>Henter seværdighed...</p>

    // Find den danske beskrivelse.
    const info = attraction.infos.find(info => info.language.code === language)

    if (!info) return <p>Ingen dansk beskrivelse fundet.</p>

    return (
        <DetailsStyled>
            <h1>{info.name}</h1>

            <DetailsGrid>
                <DetailImage
                    src={new URL(attraction.image, SERVER_URL).href}
                    alt={info.name}
                    style={{ width: "100%", maxWidth: 600, borderRadius: 12 }}
                />

                <InfoBox>
                    <p>{info.description}</p>
                </InfoBox>
            </DetailsGrid>
        </DetailsStyled>
    )
}
