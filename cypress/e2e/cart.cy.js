
describe('Cart', () => {


      it('Add 1 piece of wood block to cart', () => {
        cy.visit('')
        cy.get('[id="dgwt-wcas-search-input-1"]')
        .should("have.class", "dgwt-wcas-search-input")
        .type("Amazaque");
        cy.get(".dgwt-wcas-suggestion-product")
        .eq(0)
        .click({ force: true })
        .url()
        cy.get('button').contains('Dodaj do koszyka').click({force: true})
        cy.get(".vi-wcaio-menu-cart-text").contains('1')
      });

      it('Go to cart page and test quantity qantity', () => {
        cy.visit('')
        cy.get('[id="dgwt-wcas-search-input-1"]')
        .should("have.class", "dgwt-wcas-search-input")
        .type("Amazaque");
        cy.get(".dgwt-wcas-suggestion-product")
        .eq(0)
        .click({ force: true })
        .url()
        cy.get('button').contains('Dodaj do koszyka').click({force: true})
        cy.get(".vi-wcaio-menu-cart-text").contains('1')
        cy.get('.vi-wcaio-menu-cart-icon').click({ multiple: true }).url().should('eq', 'https://hanzastore.pl/koszyk/' )
        cy.get("[id*='quantity_']").should('have.attr', 'value').should('eq', '1')
        cy.get("[id*='quantity_']").clear().type('2')
        cy.get('button').contains('Zaktualizuj koszyk').click({force: true})
        cy.get("[id*='quantity_']").should('have.attr', 'value').should('eq', '2')
      });
    

  });