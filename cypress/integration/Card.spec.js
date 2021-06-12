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
    it('Should display the locations of an animal if they have common_locations', () => {
        cy.visit('/')
        cy.get('.card').eq(1).children().eq(1).children().eq(3).should('contain', '| Gerudo Desert |')
    })
    it('Should display no know location if the animal has no common_locations', () => {
        cy.visit('/')
        cy.get('.card').eq(0).children().eq(1).children().eq(4).should('contain', 'No known locations')
    })
})


