import React from "react";
import {getFoodTruckData} from "../../services/foodTruck/api.ts";
import {showErrorToast} from "../../util/error.ts";
import FoodTruck from "../../interfaces/foodTruck.ts";
import {SelectChangeEvent} from "@mui/material";

export const useComponent = () => {
    const foodOptions = ['Burgers', 'Hot Dogs', 'Tacos', 'Lobster', 'Burritos', 'Ice Cream', 'Sandwiches', 'Pizzas']
    const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [selectedFoods, setSelectedFoods] = React.useState<string[]>([])
    const [selectedQuantity, setSelectedQuantity] = React.useState<number>(1)
    const [foodTrucks, setFoodTrucks] = React.useState<FoodTruck[]>([])
    const [shuffledTrucks, setShuffledTrucks] = React.useState<FoodTruck[]>([])
    const isFirstRender = React.useRef(true);


    React.useEffect(() => {
        if (isFirstRender.current) {
            fetchFoodTrucks()
        }

        isFirstRender.current = false;


        return () => { isFirstRender.current = true };
    }, [])

    const fetchFoodTrucks = async () => {
        try {
            const data = await getFoodTruckData()
            setFoodTrucks(data)
        } catch (error) {
            console.error(error)
            showErrorToast('An error occurred when retrieving the food trucks data')
        }
    }

    const shuffleFoodTrucks = () => {
        const filteredTrucks = foodTrucks.filter((foodTruck) => selectedFoods.some((selectedFood) => foodTruck.foodItems.toLowerCase().includes(selectedFood.toLowerCase())))
        const shuffleResult: FoodTruck[] = filteredTrucks.length <= selectedQuantity ? filteredTrucks : []
        if(shuffleResult.length === 0) {
            Array.from(Array(selectedQuantity).keys()).forEach(() => {
                const ind =
                    Math.floor(Math.random() * filteredTrucks.length);
                shuffleResult.push(filteredTrucks.splice(ind, 1)[0])
            })
        }
        setShuffledTrucks(shuffleResult)
    }

    const handleSelectedFoodChange = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = event;
        setSelectedFoods(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSelectedQuantityChange = (event: SelectChangeEvent<number>) => {
        const {
            target: { value },
        } = event;
        setSelectedQuantity(Number(value))
    }

    return {
        foodOptions,
        quantityOptions,
        selectedFoods,
        selectedQuantity,
        shuffledTrucks,
        handleSelectedFoodChange,
        handleSelectedQuantityChange,
        shuffleFoodTrucks
    }
}