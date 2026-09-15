import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    color-scheme: light;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontsizes.body};
    line-height: ${({ theme }) => theme.lineHeights.body};
    background: ${({ theme }) => theme.colors.light.background};
    color: ${({ theme }) => theme.colors.black};
  }

  body.dark-mode {
    color-scheme: dark;
    background: ${({ theme }) => theme.colors.dark.background};
    color: ${({ theme }) => theme.colors.dark.text};
  }

  h1, h2, h3 {
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontsizes.h1};
    text-transform: uppercase;
  }

  h2, h3 {
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: ${({ theme }) => theme.lineHeights.body};
    margin: 0 0 12px;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontsizes.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontsizes.h3};
  }

  .page-heading {
    display: flex;
    align-items: center;
    min-height: 100px;
    margin: 0;
  }

  .section-heading {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontsizes.h1};
    line-height: ${({ theme }) => theme.lineHeights.heading};
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 14px;
  }

  .footer-heading {
    font-size: ${({ theme }) => theme.fontsizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-transform: uppercase;
    margin: 0 0 24px;
  }

  .footer-heading.support-heading {
    margin: 22px 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {

    .section-heading {
      font-size: ${({ theme }) => theme.fontsizes.mobileHeading};
    }
  }

  button, input {
    font: inherit;
  }

  a {
    color: inherit;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.tertiary};
    outline-offset: 4px;
  }

  .skip-link {
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 10;
    padding: 12px;
    background: ${({ theme }) => theme.colors.white};
    transform: translateY(-160%);
  }

  .skip-link:focus {
    transform: translateY(0);
  }
`
