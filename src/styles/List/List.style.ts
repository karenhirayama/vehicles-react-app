
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const ListContainer = styled.div`
    margin: 98px auto 0 auto;
    max-width: 1052px;
    display: flex;
    flex-direction: column;
    gap: 48px;
`

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const ListTitle = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    color: #1D2527;
    margin: 0;
`

export const AddIcon = styled(Icon)`
    color: #1D2527;
    font-size: 20px;
`

export const AddBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 14px;
    width: 302px;
    height: 48px;
    border: 1px solid #1D2527;
    background-color: transparent;
    border-radius: 21px;
    cursor: pointer;

    & > p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        margin: 0;
    }
`