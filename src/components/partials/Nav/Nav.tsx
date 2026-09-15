import { NavLink } from "react-router-dom"
import { NavStyled } from "./Nav.styled"

export const Nav = () => {
  return (
    <NavStyled>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/attractions">
        Attractions
      </NavLink>
      <NavLink to="/countries">
        Countries
      </NavLink>
      <NavLink to="/cities">
        Cities
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
    </NavStyled>
  )
}
