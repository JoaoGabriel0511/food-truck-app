describe('template spec', () => {
  before(() => {
    cy.intercept(
        {
          method: 'GET',
          url: 'https://data.sfgov.org/api',
        },
        {fixture: 'foodTruck.json'}
    ).as('views/rqzj-sfat/rows.csv')
  })

  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('.foodList').click()
    cy.get('.foodItem').eq(0).click()
    cy.get('html').click()
    cy.get('.quantityList').click()
    cy.get('.quantityItem').eq(6).click()
    cy.get('.shuffleButton').click()
    cy.get('.foodTruckCard').should('have.length', 7)
  })
})