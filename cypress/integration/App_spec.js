describe('App', () => {
    beforeEach(() => {
        

    })
    it("Should have a header component", () => {
        cy.loadStubs();
        cy.visit('/');
        cy.get('Header').get('h1').should('have.text', "Zelda Animal Lovers")
    })
    it("Should display an error message if the fetch call sends back an error", () => {

        cy.intercept(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`, {
            "data": {}
        }
        );
        cy.visit('/');
        cy.get('.error').should('have.text', 'Something went wrong Please try again!')
    })
})