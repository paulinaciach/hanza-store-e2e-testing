describe('Register', () => {

    const baseURL = 'https://hanzastore.pl/';

    beforeEach(() => {
      cy.visit('/');
    });


    it('Search bar type', () =>{
        cy.get('[id="dgwt-wcas-search-input-1"]')
        .should('have.class', 'dgwt-wcas-search-input')
        .type('Test typing...')
        .click()

    })

    it('Search bar placeholder', ()=>{
        cy.get('input:first').should('have.attr', 'placeholder', 'Szukaj produktów')
    })

 
    

});