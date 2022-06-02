import { FC } from "react";
import { CarProps } from "../../interfaces";
import { CarLink, CarCardContainer, CarImg, CarImgContainer, CarInfo, CarInfosContainer, CarName, InfoIcon } from "../../styles";

export const CarCard: FC<CarProps> = ({ name, year, speed, economic_rating, users_rating, image_src, product_link, image_style }) => {

  return (
    <CarCardContainer>
      <CarImgContainer>
        <CarImg src={image_src} alt={`Image do carro ${name}`} style={image_style} />
      </CarImgContainer>
      <CarName>{name}</CarName>
      <CarInfosContainer>
        <CarInfo>
          <InfoIcon icon="bi:calendar2-date" />
          {year}
        </CarInfo>
        <CarInfo>
          <InfoIcon icon="fluent:top-speed-20-regular" />
          {speed} Km/h
        </CarInfo>
        <CarInfo>
          <InfoIcon icon="simple-line-icons:energy" />
          {economic_rating * 10}/10
        </CarInfo>
        <CarInfo>
          <InfoIcon icon="fluent:people-20-regular" />
          {users_rating * 10}/10
        </CarInfo>
      </CarInfosContainer>
      <CarLink href={product_link}>
        Ver carro
      </CarLink>
    </CarCardContainer>
  )
}
