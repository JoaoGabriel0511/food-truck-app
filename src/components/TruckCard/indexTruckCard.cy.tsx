import { TruckCard } from './index'
import FoodTruck from "../../interfaces/foodTruck.ts";

describe('<TruckCard />', () => {
  it('renders', () => {
    const foodTruck: FoodTruck = {
      locationId: 1,
      applicant: 'applicant',
      facilityType: "Truck",
      cnn: 'cnn',
      locationDescription: "locationDescription",
      address: "address",
      blockLot: "blockLot",
      block: "block",
      lot: "lot",
      permit: "permit",
      status: "EXPIRED",
      foodItems: "foodItems",
      x: 9,
      y: 9,
      latitude: 23.1,
      longitude: 45.2,
      schedule: "schedule",
      daysHours: "daysHours",
      nOISent: "nOISent",
      approved: new Date(),
      received: "received",
      priorPermit: 1,
      expirationDate: new Date(),
      location: "location",
      firePreventionDistricts: 2,
      policeDistricts: 4,
      supervisorDistricts: 6,
      zipCodes: "zipCodes",
      neighborhoods: 8
    }
    cy.mount(<TruckCard foodTruck={foodTruck} />)
    cy.get('.MuiTypography-h5').should('have.text', 'applicant')
    cy.get('.MuiTypography-body1').should('have.text', 'address')
    cy.get('.MuiTypography-body2').should('have.text', 'foodItems')
  })
})