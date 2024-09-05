import {Grid2} from "@mui/material";
import FoodTruck from "../../interfaces/foodTruck.ts";
import {ShuffledFoodTrucksProps} from "../../interfaces/props.ts";
import {TruckCard} from "../../components/TruckCard";

export const ShuffledFoodTrucksSection = (props: ShuffledFoodTrucksProps) => {
    const shuffledTrucks = props.shuffledFoodTrucks
    return (
        <Grid2 container>
            <Grid2 size={'grow'}/>
            <Grid2 size={8}>
                <Grid2 container spacing={2}>
                    {shuffledTrucks.map((truck: FoodTruck) => (
                        <TruckCard foodTruck={truck}/>
                    ))}
                </Grid2>
            </Grid2>
            <Grid2 size={'grow'}/>
        </Grid2>
    )
}