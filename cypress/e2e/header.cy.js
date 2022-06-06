describe('Register', () => {

    const baseURL = 'https://hanzastore.pl/';

    beforeEach(() => {
      cy.visit('/');
    });


    it('Click on logo, returns base url', ()=>{
        cy.get('.wp-image-2217')
        .click()
        .url()
        .should('eq', baseURL )
    })

    it('Search bar type', () =>{
        cy.get('[id="dgwt-wcas-search-input-1"]')
        .should('have.class', 'dgwt-wcas-search-input')
        .type('Test typing...')
        .click()

    })

    it('Search bar 2', ()=>{
        cy.get('input:first').should('have.attr', 'placeholder', 'Szukaj produktów')
    })

    
    it('Click on HanzaStore, returns base url', ()=>{
        cy.get('a').contains('HanzaStore')
        .click()
        .url()
        .should('eq', baseURL )
    })
    
    it('Click on Kontakt, returns kontakt page', ()=>{
        cy.get('a').contains('Kontakt')
        .click()
        .url()
        .should('eq', 'https://hanzastore.pl/kontakt/' )
    })

    it('Click on Moje Konto, returns moje-konto page', ()=>{
        cy.get('a').contains('Moje konto')
        .click()
        .url()
        .should('eq', 'https://hanzastore.pl/moje-konto/' )
    })

    it('Click on Koszyk, returns koszyk page', ()=>{
        cy.get('.vi-wcaio-menu-cart-nav-wrap')
        .click({ multiple: true })
        .wait(500)
        .url()
        .should('eq', 'https://hanzastore.pl/koszyk/' )
    })

});