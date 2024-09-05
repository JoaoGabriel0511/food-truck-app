import axios from "axios";
import FoodTruck from "../../interfaces/foodTruck.ts";
const baseURL = 'https://data.sfgov.org/api'

export const api = axios.create({
    baseURL
})

export const getFoodTruckData = async (): Promise<FoodTruck[]> => {
    const result = await api.get('views/rqzj-sfat/rows.csv')
    if(result.status === 200) {
        const csv = result.data.split('\n').map((d: string) => d.split(','))
        csv.shift()
        csv.pop()

        return csv.map((row: string[]): FoodTruck => ({
            locationId: Number(row[0]),
            applicant: row[1],
            facilityType: row[2] as "Truck" | "Push Cart" | undefined,
            cnn: row[3],
            locationDescription: row[4],
            address: row[5],
            blockLot: row[6],
            block: row[7],
            lot: row[8],
            permit: row[9],
            status: row[10] as "EXPIRED" | "APPROVED" | "SUSPENDED" | "REQUESTED",
            foodItems: row[11],
            x: Number(row[12]),
            y: Number(row[13]),
            latitude: Number(row[14]),
            longitude: Number(row[15]),
            schedule: row[16],
            daysHours: row[17],
            nOISent: row[18],
            approved: new Date(row[19]),
            received: row[20],
            priorPermit: Number(row[21]),
            expirationDate: new Date(row[22]),
            location: row[23],
            firePreventionDistricts: Number(row[24]),
            policeDistricts: Number(row[25]),
            supervisorDistricts: Number(row[26]),
            zipCodes: row[27],
            neighborhoods: Number(row[28])
        }))
    } else {
        throw new Error('An error occurred when retrieving the food trucks data')
    }
}