import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from '@iconify/react';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 96px;
    display: flex;
    z-index: 10;
 `

export const NavbarLogo = styled.img`
    width: 48.75px;
    margin-left: 32.15px;

    @media (max-width: 750px) {
        margin-left: 0;
    } 
`

export const NavbarLoginContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15.25px;
`

export const NavbarIcon = styled(Icon)`
    color: white;
    font-size: 30px;
    margin-right: 68.25px;
`

export const NavbarLinksContainer = styled.div`
    display: flex;
    width: 100%;
    height: 96px;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        color: #1D2527;
        margin-top: 48.12px;
    }
`

export const NavbarLink = styled(Link)`
    text-decoration: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #EBEFF2;
    margin: auto;

    &:hover {
        border-bottom: 2px solid #1D2527;
    }

   @media (max-width: 750px) {
        color: #1D2527;
        margin-left: 0;
        margin-bottom: 32px;

    } 
`

export const NavbarLargeScreenContainer = styled.div`
    max-width: 1366px;
    height: 96px;
    display: flex;
    align-items: center; 
    margin: auto;
    width: inherit;

    @media (max-width: 750px) {
        display: none;
    }
`

export const OpenSideBar = styled.button`
    height: 28.875px;
    width: 32.8125px;
    background: none;
    margin-left: 32.12px;
    margin-block: auto;
    border: none;
    color: white;
    cursor: pointer;

    @media (min-width: 750px) {
        display: none;
    }
`

export const CloseSideBar = styled.button`
    height: 28.875px;
    width: 32.8125px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    margin-bottom: 48.12px;
`

export const NavbarSmallScreenContainer = styled.div`
    width: 270px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    position: absolute;
    padding-top: 40.12px;
    padding-left: 32.13px;
    box-shadow: 3px 0px 9px rgba(0, 0, 0, 0.15);
    border-radius: 0px 24px 24px 0px;
    z-index: inherit;

    @media (min-width: 750px) {
        display: none;
    }
`