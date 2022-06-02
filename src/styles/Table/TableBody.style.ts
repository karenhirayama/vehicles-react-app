
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const TableBodyContainer = styled.div`
    display: grid;
    margin: auto;
    max-width: 1052px;
    grid-template-columns: 3fr 1fr 3fr 2fr 2fr repeat(3,1fr);
    align-items: baseline;

`

export const TableBodyCarProp = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #1D2527;
    width: 100%;
    justify-content: center;

    &:first-child {
        padding-left: 43px;
        justify-content: start;
    }
`

export const ActionIcon = styled(Icon)`
    display: flex;
    font-size: 20px;
    color: #1D2527;
`
export const TableBodyBtn = styled.h4`
    border: 1px solid #1D2527;
    padding: 8px 96px;
    background: none;
    border-radius: 4px;
    font-size: 16px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 200%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #1D2527;
    cursor: pointer;
`