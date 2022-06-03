
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const CarCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #1D2527;
    border-radius: 24px;
    width: 281px;
    height: 362px;
    margin-top: 148px;
    padding: 24px 32px;

    @media (max-width: 700px) {
        width: 278px;
        position: relative;
    }
`

export const CarImgContainer = styled.div`
    width: 440px;
    position: absolute;
    margin: 32px auto 0 auto;
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {
        width: 226px;
        position: relative;
    }
`

export const CarImg = styled.img`
    width: 300px;
    transform: translate(-22%, -100%);

    @media (max-width: 600px) {
        transform: translate(-1%, -100%) !important;
        width: 226px !important;
        height: 171px !important;
        object-fit: contain;
    }
`

export const CarName = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    margin: 24px auto;

    @media (max-width: 600px) {
        margin-top: -197px;
    }
`

export const CarInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 600px) {
        gap: 10px;
    }
`

export const CarInfo = styled.div`
    display: flex;
    gap: 24px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    `

export const InfoIcon = styled(Icon)`
    font-size: 30px;
`

export const CarLink = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 200%;
    background: none;
    padding: 8px 72px;
    border: 1px solid #1D2527;
    border-radius: 21px;
    color: #1D2527;
    cursor: pointer;
    margin-top: 24px;
    text-decoration: none;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: #1D2527;
        color: white; 
    }
`