import styled from "styled-components";

export const HeaderStyled = styled.header`
  body.dark-mode & {
    background: ${({ theme }) => theme.colors.dark.surface};
    border-color: ${({ theme }) => theme.colors.dark.border};
  }

  background: #ffffff;
  border-bottom: 1px solid #edf1f5;
`;

export const HeaderInner = styled.div`
  @media (max-width: 750px) {
    flex-wrap: wrap;
    padding-block: 16px;
    gap: 16px;
  }

  width: min(1180px, calc(100% - 32px));
  min-height: 70px;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const Logo = styled.div`
  body.dark-mode & {
    color: ${({ theme }) => theme.colors.dark.text};

    span {
      color: ${({ theme }) => theme.colors.dark.accent};
    }
  }

  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 1.6rem;
  font-weight: 800;
  color: #0f2d4f;

  span {
    color: #0867e8;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  a {
    padding: 10px 16px;
    border-radius: 10px;
    color: #0f2d4f;
    text-decoration: none;
    font-size: 0.95rem;
  }

  a:hover,
  a.active {
    background: #eaf3ff;
    color: #0867e8;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 750px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const HeaderButton = styled.button`
  &[aria-pressed="true"] {
    outline: 2px solid #0867e8;
    outline-offset: 3px;
  }
  border: none;
  border-radius: 999px;
  padding: 10px 16px;
  background: #eef5fc;
  color: #0f2d4f;
  cursor: pointer;
`;

export const DarkButton = styled(HeaderButton)`
  background: #0f2d4f;
  color: #ffffff;
`;