import styled from "styled-components";

export const FooterStyled = styled.footer`
  body.dark-mode & {
    background: ${({ theme }) => theme.colors.dark.surface};
    color: ${({ theme }) => theme.colors.dark.text};
    border-color: ${({ theme }) => theme.colors.dark.border};
  }

  margin-top: 30px;

  background: #ffffff;

  border-top: 1px solid #e8edf2;
`;

export const FooterInner = styled.div`
  width: min(1180px, calc(100% - 32px));
  min-height: 70px;

  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;

    padding-block: 20px;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const FooterLogo = styled.div`
  body.dark-mode & {
    color: ${({ theme }) => theme.colors.dark.text};

    span {
      color: ${({ theme }) => theme.colors.dark.accent};
    }
  }

  font-size: 1.25rem;
  font-weight: 800;
  color: #0f2d4f;

  span {
    color: #0867e8;
  }
`;

export const FooterNav = styled.nav`
  body.dark-mode & a {
    color: ${({ theme }) => theme.colors.dark.mutedText};
  }

  display: flex;
  gap: 20px;

  a {
    color: #526b83;

    font-size: 0.8rem;

    text-decoration: none;
  }
`;