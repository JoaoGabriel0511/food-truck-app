import {
    Grid2,
} from "@mui/material";
import {ShuffledFoodTrucksSection} from "./ShuffledFoodTrucksSection.tsx";
import {FiltersSection} from "./filtersSection.tsx";
import {useComponent} from "./useComponent.ts";
import './index.css'

export function Main() {

    const {
        foodOptions,
        quantityOptions,
        selectedFoods,
        selectedQuantity,
        handleSelectedFoodChange,
        handleSelectedQuantityChange,
        shuffleFoodTrucks,
        shuffledTrucks
    } = useComponent()

    return(
        <div className={'main-page-container'}>
            <Grid2 container justifyContent={'center'} className={'welcome-container'}>
                <h1>Welcome to the Food Truck shuffler</h1>
            </Grid2>
            <Grid2 container justifyContent={'center'} className={'subtitle-container'}>
                <h2>Here you can select your favorite type of food and wee will recommend some new food trucks for you
                    to try it out</h2>
            </Grid2>
            <div className={'filters-section'}>
                <FiltersSection
                    foodOptions={foodOptions}
                    quantityOptions={quantityOptions}
                    selectedFoods={selectedFoods}
                    selectedQuantity={selectedQuantity}
                    handleSelectedFoodChange={handleSelectedFoodChange}
                    handleSelectedQuantityChange={handleSelectedQuantityChange}
                    shuffleFoodTrucks={shuffleFoodTrucks}
                />
            </div>
            <ShuffledFoodTrucksSection shuffledFoodTrucks={shuffledTrucks}></ShuffledFoodTrucksSection>
        </div>
    )
}