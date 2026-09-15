import {
  FooterStyled,
  FooterInner,
  FooterBrand,
  FooterLogo,
  FooterNav
} from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterInner>
        <FooterBrand>
          <FooterLogo>
            Travel<span>Mate</span>
          </FooterLogo>
          <small>
            Explore. Discover. Belong.
          </small>
        </FooterBrand>
        <FooterNav>
          <a href="/about">
            About
          </a>

          <a href="/contact">
            Contact
          </a>

          <a href="/privacy">
            Privacy
          </a>

          <a href="/terms">
            Terms
          </a>

        </FooterNav>
      </FooterInner>
    </FooterStyled>
  );
};