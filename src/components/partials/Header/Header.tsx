import { Nav } from "../Nav/Nav"
import { HeaderInner, HeaderStyled, Logo } from "./Header.styled"

  export const Header = () => {
    return (
      <HeaderStyled>
        <HeaderInner>
          <Logo>
            ✈️ Travel<span>Mate</span>
          </Logo>
          <Nav />
        </HeaderInner>
      </HeaderStyled>
    )
  }
