
import styled from 'styled-components';

export const TableHeaderContainer = styled.div`
    display: grid;
    margin: auto;
    max-width: 1052px;
    grid-template-columns: 3fr 1fr 3fr 2fr 2fr repeat(3,1fr);
    background-color: #1D2527;
`

export const TableHeaderLabel = styled.h4`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #EBEFF2;
    justify-content: center;

    &:first-child {
        padding-left: 43px;
        justify-content: start;
    }
`