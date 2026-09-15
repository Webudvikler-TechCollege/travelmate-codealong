import { useLanguage } from "../../../context/LanguageContext"
import { Nav } from "../Nav/Nav"
import { HeaderInner, HeaderStyled, Logo } from "./Header.styled"

  export const Header = () => {
    const { setLanguage } = useLanguage()

    return (
      <HeaderStyled>
        <HeaderInner>
          <Logo>
            ✈️ Travel<span>Mate</span>
          </Logo>
          <Nav />
          <select onChange={(event) => setLanguage(event.target.value)}>
            <option value="da">DA</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </HeaderInner>
      </HeaderStyled>
    )
  }
