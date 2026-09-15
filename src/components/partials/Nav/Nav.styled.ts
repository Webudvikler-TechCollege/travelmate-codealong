import styled from "styled-components";

export const NavStyled = styled.nav`
  body.dark-mode & a {
    color: ${({ theme }) => theme.colors.dark.text};
  }

  body.dark-mode & a:hover,
  body.dark-mode & a.active {
    background: ${({ theme }) => theme.colors.dark.control};
    color: ${({ theme }) => theme.colors.dark.accent};
  }

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