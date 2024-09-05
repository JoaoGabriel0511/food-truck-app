import FoodTruck from "./foodTruck.ts";
import {SelectChangeEvent} from "@mui/material";

export interface TruckCardProps {
    foodTruck: FoodTruck
}

export interface ShuffledFoodTrucksProps {
    shuffledFoodTrucks: FoodTruck[]
}

export interface FiltersProps {
    foodOptions: string[]
    quantityOptions: number[]
    selectedFoods: string[]
    selectedQuantity: number
    handleSelectedFoodChange: (event: SelectChangeEvent<string[]>) => void
    handleSelectedQuantityChange: (event: SelectChangeEvent<number>) => void
    shuffleFoodTrucks: () => void
}