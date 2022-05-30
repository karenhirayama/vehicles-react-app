import { useState } from 'react';
import { CarList, FooterLargeScreenContent, FooterSmallScreenContent } from "../../helpers";
import { CarProps } from "../../interfaces";
import { CarCard } from "../../layout";
import { CarCardsLargeScreen, CarCardsMediumScreen, CarCardsSmallScreen, CardsBtn, CardsContainer, CardsProgressBar, FooterLargeScreen, FooterSmallScreen, HomeBgImg, HomeContainer } from "../../styles";
import { Footer, ProgressBar } from "../../components";

export const Home = () => {
  const [numberSlice, setNumberSlice] = useState(0);

  const handleSumNumberSlice = () => {
    if (numberSlice < CarList.length - 1) {
      setNumberSlice(numberSlice + 1)
    } else {
      setNumberSlice(0)
    }
  }

  const handleSubtractNumberSlice = ( ) => {
    if (numberSlice !== 0) {
      setNumberSlice(numberSlice - 1)
    }
  }

  return (
    <HomeContainer>
      <HomeBgImg />
       <CardsContainer>
        <CardsBtn icon="akar-icons:chevron-left" style={(numberSlice === 0) ? { color: '#D2D4D9' } : {}} onClick={handleSubtractNumberSlice} />
        <CarCardsLargeScreen>
          {CarList?.slice(0 + numberSlice, 3 + numberSlice).map(({ name, year, speed, economic_rating, users_rating, image_src, product_link, image_style }: CarProps, index) => (
            <div key={index}>
              <CarCard
                index={index}
                name={name}
                year={year}
                speed={speed}
                economic_rating={economic_rating}
                users_rating={users_rating}
                image_src={image_src}
                product_link={product_link}
                image_style={image_style}
              />
            </div>
          ))}
        </CarCardsLargeScreen>
        <CarCardsMediumScreen>
          {CarList?.slice(0 + numberSlice, 2 + numberSlice).map(({ name, year, speed, economic_rating, users_rating, image_src, product_link, image_style }: CarProps, index) => (
            <div key={index}>
              <CarCard
                index={index}
                name={name}
                year={year}
                speed={speed}
                economic_rating={economic_rating}
                users_rating={users_rating}
                image_src={image_src}
                product_link={product_link}
                image_style={image_style}
              />
            </div>
          ))}
        </CarCardsMediumScreen>
        <CarCardsSmallScreen>
          {CarList?.slice(0 + numberSlice, 1 + numberSlice).map(({ name, year, speed, economic_rating, users_rating, image_src, product_link, image_style }: CarProps, index) => (
            <div key={index}>
              <CarCard
                index={index}
                name={name}
                year={year}
                speed={speed}
                economic_rating={economic_rating}
                users_rating={users_rating}
                image_src={image_src}
                product_link={product_link}
                image_style={image_style}
              />
            </div>
          ))}
        </CarCardsSmallScreen>
        <CardsBtn icon="akar-icons:chevron-right" onClick={handleSumNumberSlice} />
      </CardsContainer>
      <CardsProgressBar>
        <ProgressBar
          transitionValue={numberSlice}
          sizeBar={CarList.length}
        />
      </CardsProgressBar>
      <FooterLargeScreen>
        <Footer
          title={FooterLargeScreenContent.title}
          text={FooterLargeScreenContent.text}
        />
      </FooterLargeScreen>
      <FooterSmallScreen>
        <Footer
        title={FooterSmallScreenContent.title}
        text={FooterLargeScreenContent.text}
        />
      </FooterSmallScreen>
    </HomeContainer>
  )
}
