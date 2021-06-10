describe('Card', () => {
    beforeEach(() => {
        cy.loadStubs();
        cy.visit('/')
    })
    it("Should have a name an image inside a card", () => {
        cy.visit('/')
        cy.get('.card').first().children().should('contain', "horse")
            .children().get('.card-img').should('have.attr', 'src')
            .should('include', "https://botw-compendium.herokuapp.com/api/v2/entry/horse/image")
    })
    it("Should have a decription a button inside a card", () => {
        cy.visit('/')
        cy.get('.card').first().children().children().get('.description').should('contain', "These can most often be found on plains.")
        cy.get('.card').first().children().children().get('.found-button').should('contain', "Met Friend")
    })
    it("Should be able to click met friend button and see image change", () => {
        cy.visit('/')
        cy.get('.found-button').first().click()
        cy.get('.found-button').first().children()
            .should('have.attr', "alt").should('include', "Triforce")
    })
    it("Should be able to click met friend button and click it again to see it change back", () => {
        cy.visit('/')
        cy.get('.found-button').first().click().click()
        cy.get('.found-button').first().children()
            .should('have.attr', "alt").should('include', "Empty Triforce")
    })
})


