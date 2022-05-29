import styled from 'styled-components';
import FooterLargeScreen from '../../assets/images/footer-large-screen.svg';
import FooterSmallScreen from '../../assets/images/footer-small-screen.png';
import FooterCloud from '../../assets/images/footer-small-screen-cloud.png'; 

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 543px;
    background-image:linear-gradient(270deg, rgba(29, 37, 39, 0.6) 0%, rgba(29, 37, 39, 0.6) 24.79%, rgba(29, 37, 39, 0.534) 54.48%, rgba(29, 37, 39, 0.006) 78.67%, rgba(29, 37, 39, 0) 100%),
    url(${FooterLargeScreen});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-right: 167px;
    backdrop-filter: blur(17px);

    @media (max-width: 1000px) {
        background-image: url(${FooterSmallScreen}), url(${FooterCloud});
        height: 883px;
        width: auto;
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        padding-right: 24px;
    }

`

export const FooterTitle = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 150%;
    text-align: right;
    color: #FFFFFF;
    cursor: pointer;

    @media (max-width: 1000px) {
        font-size: 32px;
    }
`

export const FooterText = styled.p`
    width: 616px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 200%;
    color: #FFFFFF;

    @media (max-width: 1000px) {
        font-size: 16px;
        width: 312px;
    }
`

export const FooterBtn = styled.button`
    border: 1px solid #EBEFF2;
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

    color: #FFFFFF;

    @media (max-width: 1000px) {
        margin-top: 20px;
        padding: 4px 56px;
    }
`