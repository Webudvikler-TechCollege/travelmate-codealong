import { useLanguage } from "../../../context/LanguageContext"
import { Nav } from "../Nav/Nav"
import { HeaderButton, HeaderInner, HeaderStyled, Logo } from "./Header.styled"

  export const Header = () => {
    const { language, setLanguage } = useLanguage()

    return (
      <HeaderStyled>
        <HeaderInner>
          <Logo>
            ✈️ Travel<span>Mate</span>
          </Logo>
          
          <Nav />

          <HeaderButton
            as="select"
            aria-label="Vælg sprog"
            value={language}
            onChange={event => setLanguage(event.target.value)}
          >
            <option value="da">🇩🇰 Dansk</option>
            <option value="en">🇬🇧 English</option>
            <option value="es">🇪🇸 Español</option>
          </HeaderButton>          

        </HeaderInner>
      </HeaderStyled>
    )
  }
