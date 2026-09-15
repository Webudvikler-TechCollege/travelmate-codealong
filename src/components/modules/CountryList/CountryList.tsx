import { Link } from "react-router-dom"
import { SERVER_URL } from "../../../config/api"
import { useCountries } from "../../../hooks/useCountries"
import { useLanguage } from "../../../context/LanguageContext"
import { Card } from "../../elements/Card/Card"
import { ListStyled } from "../../../styled/elements"

export const CountryList = ({ mode = 'all' }: { mode?: "all" | "popular" }) => {
    const { countries, isLoading, error } = useCountries()
    const { language } = useLanguage()

    if (error) return <p role="alert">{error}</p>

    if(isLoading) return <p>Loading...</p>

    let finalList = countries

    if (mode === "popular") {
        countries.sort(() => Math.random() - 0.5)
        finalList = countries.slice(0,4)
    }

    return (
        <ListStyled>
            {finalList.map(country => {
                const info = country.infos.find(
                    info => info.language.code === language
                )

                if (!info) return null

                return (
                    <Link to={`/countries/${country.id}`} key={country.id} >
                        <Card 
                            image={new URL(country.image, SERVER_URL).href} 
                            title={info.name}
                            code={country.code}
                            subtitle={info.description}
                        />
                    </Link>
                )
            })}
        </ListStyled>
    )
}