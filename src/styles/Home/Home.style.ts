
import styled from 'styled-components';
import homepageImg from '../../assets/images/main-img.png';
import { Icon } from '@iconify/react';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    `

export const HomeBgImg = styled.div`
    width: 100vw;
    height: 166vh;
    top: 0;
    z-index: -1;
    margin-top: -202px;
    position: relative;
    background-color: #EBEFF2;


    &::before {
        background: url(${homepageImg});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        content: '';
        filter: drop-shadow(0px 1px 19px rgba(0, 0, 0, 0.25));
        clip-path: ellipse(150% 100% at 50% 0);
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
    }

    @media (max-width: 1711px) {
        height: 154vh;
        margin-top: -250px;
    }

    @media (max-width: 1500px) {
        height: 130vh;
        margin-top: -150px;
    }

    @media (max-width: 1300px) {
        height: 120vh;
        margin-top: -150px;
    }

    @media (max-width: 1140px) {
        height: 110vh;
        margin-top: -120px;
    }

    @media (max-width: 1000px) {
        height: 95vh;
    }

    @media (max-width: 850px) {
        height: 75vh;
    }

    @media (max-width: 700px) {
        margin-top: -120px;
        height: 60vh;
    }

    @media (max-width: 550px) {
        height: 50vh;
    }

    @media (max-width: 380px) {
        height: 35vh;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 60px 48px 60px;
    background-color: #EBEFF2;

    @media (max-width: 700px) {
        padding-left: 24px;
        gap: 10px;
        overflow-x: scroll;
        overflow-y: hidden;
    }
`

export const CardsBtn = styled(Icon)`
    color: #1D2527;
    cursor: pointer;
    font-size: 30px;
    z-index: 10;

     @media (max-width: 700px) {
        display: none;
    }
`

export const CarCardsLargeScreen = styled.div`
    display: flex;
    margin: auto;
    gap: 170px;

    @media (max-width: 1600px) {
        gap: 90px;
    }

    @media (max-width: 1500px) {
        display: none;
    }
`

export const CarCardsMediumScreen = styled.div`
    display: flex;
    margin: auto;
    gap: 170px;

    @media (min-width: 1500px) {
        display: none;
    }

    @media (max-width: 1130px) {
        display: none;
    }
`

export const CarCardsSmallScreen = styled.div`
    display: flex;
    margin: auto;

    @media (min-width: 1130px) {
        display: none;
    }
`

export const CarCardsExtraSmallScreen = styled.div`
    display: flex;
    
    & > div {
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: nowrap;
    }

    @media (min-width: 700px) {
        display: none;
    }
`

export const CardsProgressBar = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    width: 100%;
    background-color: #EBEFF2;
    padding-bottom: 40px;

    @media (max-width: 700px) {
        display: none;
    }
`

export const FooterLargeScreen = styled.div`
    padding-right: 167px;

    @media (max-width: 1000px) {
        display: none;
    }
`

export const FooterSmallScreen = styled.div`
    @media (min-width: 1000px) {
        display: none;
    }
`