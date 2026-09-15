import { useDarkMode } from "../../../context/DarkModeContext"
import { useLanguage } from "../../../context/LanguageContext"
import { Nav } from "../Nav/Nav"
import { DarkButton, HeaderActions, HeaderButton, HeaderInner, HeaderStyled, Logo } from "./Header.styled"

export const Header = () => {
  const { language, setLanguage } = useLanguage()
  const { darkMode, setDarkMode } = useDarkMode()

  return (
    <HeaderStyled>
      <HeaderInner>
        <Logo>
          ✈️ Travel<span>Mate</span>
        </Logo>

        <Nav />

        <HeaderActions>
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

          <HeaderButton
            type="button"
            aria-pressed={!darkMode}
            onClick={() => setDarkMode(false)}
          >
            ☀️ Light
          </HeaderButton>

          <DarkButton
            type="button"
            aria-pressed={darkMode}
            onClick={() => setDarkMode(true)}
          >
            🌙 Dark
          </DarkButton>
        </HeaderActions>


      </HeaderInner>
    </HeaderStyled>
  )
}
