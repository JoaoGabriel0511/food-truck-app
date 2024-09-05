import {Button, Checkbox, FormControl, Grid2, InputLabel, ListItemText, MenuItem, Select} from "@mui/material";
import {FiltersProps} from "../../interfaces/props.ts";
export const FiltersSection = (props: FiltersProps) => {
    const {
        foodOptions,
        quantityOptions,
        selectedFoods,
        selectedQuantity,
        handleSelectedFoodChange,
        handleSelectedQuantityChange,
        shuffleFoodTrucks
    } = props
    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 size={"grow"} />
                <Grid2 size={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type of Food</InputLabel>
                        <Select
                            multiple
                            label="Type of Food"
                            value={selectedFoods}
                            onChange={handleSelectedFoodChange}
                            renderValue={(selected: string[]) => selected.join(', ')}
                            variant={'filled'}
                            className={'foodList'}
                        >
                            {
                                foodOptions.map((option) => {
                                    return (
                                        <MenuItem key={option} value={option} className={'foodItem'}>
                                            <Checkbox checked={selectedFoods.indexOf(option) > -1}  />
                                            <ListItemText primary={option} />
                                        </MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </Grid2>
                <Grid2 size={2}>
                    <FormControl fullWidth>
                        <InputLabel >Quantity</InputLabel>
                        <Select
                            label="Quantity"
                            value={selectedQuantity}
                            onChange={handleSelectedQuantityChange}
                            variant={'filled'}
                            className={'quantityList'}
                        >
                            {
                                quantityOptions.map((option) => {
                                    return (
                                        <MenuItem className={'quantityItem'} key={option} value={option}>
                                            <ListItemText primary={option} />
                                        </MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </Grid2>
                <Grid2 size={'grow'} />
            </Grid2>
            <Grid2 container justifyContent={'center'}>
                <Button variant={'contained'} onClick={shuffleFoodTrucks} className={'shuffleButton'}>Search</Button>
            </Grid2>
        </>
    )
}