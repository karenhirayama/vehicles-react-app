import { FC } from "react";
import { FooterBtn, FooterCloudBackground, FooterContainer, FooterText, FooterTitle } from "../../styles";

interface FooterProps {
  title: string;
  text: string;
}

export const Footer: FC<FooterProps> = ({ title, text }) => {
  return (
    <FooterContainer>

        <FooterTitle>{title}</FooterTitle>
        <FooterText>{text}</FooterText>
        <FooterBtn>Ver carros</FooterBtn>
    </FooterContainer>
  )
}
