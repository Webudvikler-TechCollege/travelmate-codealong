import styled from "styled-components";
import { Reset } from "./Mixins";

export const MainStyle = styled.main`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 1rem;
`

export const ListStyled = styled.ul`
    ${Reset};
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-auto-rows: 1fr;
    align-items: stretch;
    gap: 1rem;
    list-style-type: none;

    > a {
        display: flex;
        min-width: 0;
        text-decoration: none;
    }
`

export const DetailsStyled = styled.div`
`

export const DetailsGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: start;
    gap: 32px;
    margin-top: 24px;
`

export const DetailImage = styled.img`
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
`

export const InfoBox = styled.div`

`

