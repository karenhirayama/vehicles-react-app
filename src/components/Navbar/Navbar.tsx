import { useEffect, useState } from "react";
import { NavbarContainer, NavbarLogo, NavbarLargeScreenContainer, NavbarLink, NavbarLinksContainer, NavbarLoginContainer, NavbarIcon, OpenSideBar, NavbarSmallScreenContainer, CloseSideBar } from "../../styles";
import LogoLight from '../../assets/images/logo-light-mode.svg';
import LogoDark from '../../assets/images/logo-dark-mode.svg';
import { useLocation } from "react-router-dom";

export const Navbar = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [navbarBg, setNavbarBg] = useState('transparent');
    const location = useLocation();
    
    useEffect(() => {
        if (location.pathname !== '/') {
            setNavbarBg('#1D2527');
        } else {
            setNavbarBg('transparent');
        }
    }, [location])

    const handleOpenSideBar = () => {
        setOpenSideBar(!openSideBar)
    };

    return (
        <NavbarContainer style={{ backgroundColor: navbarBg }}>
            {openSideBar ?
                <NavbarSmallScreenContainer>
                    <CloseSideBar>
                        <NavbarLogo src={LogoDark} onClick={handleOpenSideBar} />
                    </CloseSideBar>
                    <NavbarLinksContainer>
                        <NavbarLink to='/'>Home</NavbarLink>
                        <NavbarLink to='/fale-conosco'>Fale Conosco</NavbarLink>
                        <NavbarLink to='/sobre'>Sobre</NavbarLink>
                        <NavbarLink to='/tabela'>Tabela</NavbarLink>
                    </NavbarLinksContainer>
                </NavbarSmallScreenContainer>
                :
                <OpenSideBar>
                    <NavbarIcon icon="charm:menu-hamburger" onClick={handleOpenSideBar} />
                </OpenSideBar>
            }
            <NavbarLargeScreenContainer>
                <NavbarLinksContainer>
                    <NavbarLogo src={LogoLight} />
                    <NavbarLink to='/'>Home</NavbarLink>
                    <NavbarLink to='/sobre'>Sobre</NavbarLink>
                    <NavbarLink to='/tabela'>Tabela</NavbarLink>
                    <NavbarLink to='/fale-conosco'>Fale Conosco</NavbarLink>
                </NavbarLinksContainer>
                <NavbarLoginContainer>
                    <NavbarLink to='/login'>Entrar</NavbarLink>
                    <NavbarIcon icon="bx:user" />
                </NavbarLoginContainer>
            </NavbarLargeScreenContainer>
        </NavbarContainer>
    )
}
