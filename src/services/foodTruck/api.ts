import axios from "axios";
import * as CSV from 'csv-string';
import FoodTruck from "../../interfaces/foodTruck.ts";
const baseURL = 'https://data.sfgov.org/api'

export const api = axios.create({
    baseURL
})

export const getFoodTruckData = async (): Promise<FoodTruck[]> => {
    const result = await api.get('views/rqzj-sfat/rows.csv')
    if(result.status === 200) {
        const csv = CSV.parse(result.data, {output: 'objects'});
        return csv.map((row): FoodTruck => ({
            locationId: Number(row['locationid']),
            applicant: row['Applicant'],
            facilityType: row['FacilityType'] as "Truck" | "Push Cart" | undefined,
            cnn: row['cnn'],
            locationDescription: row['LocationDescription'],
            address: row['Address'],
            blockLot: row['blocklot'],
            block: row['block'],
            lot: row['lot'],
            permit: row['permit'],
            status: row['Status'] as "EXPIRED" | "APPROVED" | "SUSPENDED" | "REQUESTED",
            foodItems: row['FoodItems'],
            x: Number(row['X']),
            y: Number(row['Y']),
            latitude: Number(row['Latitude']),
            longitude: Number(row['Longitude']),
            schedule: row['Schedule'],
            daysHours: row['dayshours'],
            nOISent: row['NOISent'],
            approved: new Date(row['Approved']),
            received: row['Received'],
            priorPermit: Number(row['PriorPermit']),
            expirationDate: new Date(row['ExpirationDate']),
            location: row['Location'],
            firePreventionDistricts: Number(row['Fire Prevention Districts']),
            policeDistricts: Number(row['Police Districts']),
            supervisorDistricts: Number(row['Supervisor Districts']),
            zipCodes: row['Zip Codes'],
            neighborhoods: Number(row['Neighborhoods (old)'])
        }))
    } else {
        throw new Error('An error occurred when retrieving the food trucks data')
    }
}