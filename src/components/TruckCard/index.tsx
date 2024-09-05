import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import foodTrcukImage from "../../assets/foodTruck.jpeg";
import {TruckCardProps} from "../../interfaces/props.ts";

export const TruckCard = (props: TruckCardProps) => {
    const truck = props.foodTruck
    return (
        <Card sx={{ maxWidth: 345 }} className={'foodTruckCard'}>
            <CardMedia
                sx={{ height: 140 }}
                image={foodTrcukImage}
                title="sample food truck"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" id={'applicat-text'}>
                    {truck.applicant}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{truck.address}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {truck.foodItems}
                </Typography>
            </CardContent>
        </Card>
    )
}