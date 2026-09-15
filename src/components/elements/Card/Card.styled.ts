import styled from "styled-components";

export const CardStyled = styled.article`
  width: 100%;
  height: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;

  overflow: hidden;

  background-color: #ffffff;

  border: 1px solid #e8edf2;
  border-radius: 10px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  transition: 0.2s;

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 120px;
  flex-shrink: 0;

  display: block;

  object-fit: cover;
`;

export const CardIcon = styled.img`
  width: ${(props => props.width ? props.width : `24`)}px;
  height: ${(props => props.height ? props.height : `15`)}px;
`

export const CardContent = styled.div`
  flex: 1;
  overflow-wrap: anywhere;
  padding: 12px 14px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 5px;

  color: #0f2d4f;

  font-size: 1rem;
`;

export const CardSubtitle = styled.p`

  margin: 0;

  color: #718096;

  font-size: 0.8rem;
`;