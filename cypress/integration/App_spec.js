describe('App', () => {
    beforeEach(() => {
        cy.loadStubs();
        cy.visit('/');
    })
    it("Should have a header component", () => {
        cy.get('.header')
    })
})