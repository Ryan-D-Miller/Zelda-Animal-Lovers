describe('App', () => {
    beforeEach(() => {
        cy.loadStubs();
        cy.visit('/');
    })
    it("Should have a header component", () => {
        cy.get('Header').get('h1').should('have.text', "Zelda Animal Lovers")
    })
})