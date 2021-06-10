describe('Dashboard', () => {
    beforeEach(() => {
        cy.loadStubs();
    })
    it("Should have a horse card", () => {
        cy.visit('/')
        cy.get('.card').first().children().should('contain', "horse")
    })

    it("Should be able to view animals that have been met", () => {
        cy.visit('/')
        cy.get('.found-button').first().click()
        cy.get('Header').children().children().eq(1).click()
        cy.get('.card').first().children().should('contain', "horse")

    })
    it("Should be able to view unMet animals and see that the horse is not there", () => {
        cy.visit('/')
        cy.get('.found-button').first().click()
        cy.get('Header').children().children().eq(2).click()
        cy.get('.card').first().children().should('not.contain', "horse")
    })
})