
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    justify-content: center;
    align-items: center;
`

export const MessageContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: baseline;
` 

export const NotFoundTitle = styled.h1`
    font-size: 24px;
`

export const WarningIcon = styled(Icon)`
    color: #1D2527;
    font-size: 40px;
`

export const ComeBackBtn = styled.button`
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

    &:hover {
        background-color: #1D2527;
        color: white; 
    }
`