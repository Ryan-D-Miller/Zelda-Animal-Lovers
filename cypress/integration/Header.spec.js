describe('Header', () => {
    beforeEach(() => {
        cy.loadStubs();
        cy.visit('/')
    })
    it("Should have 3 links and a title in the header", () => {
        cy.get('Header').get('h1').should('have.text', "Zelda Animal Lovers")
        cy.get(".link").should("have.length", 3)
    })
    it("Should update the URL as the links are pressed", () => {
        cy.get(".link").eq(1).click().url().should('eq', 'http://localhost:3000/Met')
        cy.get(".link").eq(2).click().url().should('eq', 'http://localhost:3000/UnMet')
        cy.get(".link").eq(0).click().url().should('eq', 'http://localhost:3000/')
    })
})