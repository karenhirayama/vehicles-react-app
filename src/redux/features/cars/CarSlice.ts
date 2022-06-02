import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarList } from '../../../helpers/CarList';
import { CarProps } from '../../../interfaces/CarPorps';
import { RootState } from "../../index";

const initialState = {
    cars: CarList
};

export const CarSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        createCar(state, action: PayloadAction<any>) {
            state.cars?.push(action.payload)
        },
        updateCar(state, action: PayloadAction<any>) {
            const car = state.cars.find((car: CarProps) => car.id === action.payload.id)
            if (car) {
                car.name = action.payload.name;
                car.year = action.payload.year;
                car.speed = action.payload.speed;
                car.economic_rating = action.payload.economic_rating;
                car.users_rating = action.payload.users_rating;
                car.image_src = action.payload.image_src;
            }
        },
        deleteCar(state, action: PayloadAction<any>) {
            state.cars = state.cars.filter((car: CarProps) => car.id !== action.payload)
        }
    }
});

const carsReducer = CarSlice.reducer;
export default carsReducer;

export const { createCar, updateCar, deleteCar } = CarSlice.actions;

export const selectCars = (state: RootState) => state.cars?.cars;

