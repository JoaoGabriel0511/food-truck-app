import * as foodTruckApi from '../api';
import * as fixtures from './fixtures.ts'
import {api} from "../api";
describe('Running tests fo the api', () => {
    describe('Success test', () => {
        beforeAll(() => {
            const apiMock = jest.spyOn(api, 'get')
            apiMock.mockReturnValue(Promise.resolve(fixtures.foodTruckSuccessResponse))
        })
        it('should correctly return the food truck data from api', async () => {
            const foodTruckData = await foodTruckApi.getFoodTruckData()
            expect(foodTruckData.at(0)?.locationId).toEqual(1575198)
            expect(foodTruckData.length).toEqual(489)
        })
    })
    describe('Failure test', () => {
        beforeAll(() => {
            const apiMock = jest.spyOn(api, 'get')
            apiMock.mockReturnValue(Promise.resolve(fixtures.foodTruckFailResponse))
        })
        it('should return an error if request response status is not 200', async () => {
            await expect(foodTruckApi.getFoodTruckData).rejects.toThrow(Error)
        })
    })
})