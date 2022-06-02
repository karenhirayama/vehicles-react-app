import { useSelector } from "react-redux"
import { selectCars } from "../../redux"
import { TableBody, TableHeader } from "./components"
import { CarProps } from '../../interfaces/CarPorps';
import { useEffect, useState } from 'react';

export const Table = () => {
  const cars = useSelector(selectCars);

  return (
    <div>
      <TableHeader />
      {cars?.map(({ id, name, year, speed, economic_rating, users_rating, image_src, product_link, image_style }: CarProps) => (
        <div key={id}>
          <TableBody
            id={id}
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
    </div>
  )
}
