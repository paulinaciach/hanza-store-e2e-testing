describe('Register', () => {
    const incorrectEmail = 'jhdvchdsh';
    const correctEmail = 'user23211@gmail.com';
    const userName = 'user23211';
    const weakPassword = 'hhjhj';
    const strongPassword = 'hhjhjfferfgerq34343';
    const baseURL = 'https://hanzastore.pl/moje-konto/';

    it('Register with valid data', () => {
        cy.visit('https://hanzastore.pl/moje-konto/');
        cy.get('#reg_email').type(correctEmail);
        cy.get('#reg_password').type(strongPassword);
        cy.get('button[type=submit]')
          .contains('Zarejestruj się')
          .click()
          .url()
          .should('eq', baseURL);
           cy.get('p').contains(userName)
  
      });

    it('Register with inavlid emial', () => {
      cy.visit('https://hanzastore.pl/moje-konto/');
      cy.get('#reg_email').type(incorrectEmail);
      cy.get('#reg_password').type(strongPassword);
      cy.get('button[type=submit]')
        .contains('Zarejestruj się')
        .click()
        .url()
        .should('eq', baseURL);
         cy.get('input:invalid').should('have.length', 1)

    });

    it('Register with invalid password', ()=>{
        cy.visit('https://hanzastore.pl/moje-konto/');
        cy.get('#reg_email').type(correctEmail);
        cy.get('#reg_password').type(weakPassword);
        cy.get('button[type=submit]')
          .should('be.disabled');
    });

    it('Register with existing user', () => {
        cy.visit('https://hanzastore.pl/moje-konto/');
        cy.get('#reg_email').type(correctEmail);
        cy.get('#reg_password').type(strongPassword);
        cy.get('button[type=submit]')
          .contains('Zarejestruj się')
          .click()
          .url()
          .should('eq', baseURL);
           cy.get('li').contains('Konto z Twoim adresem e-mail jest już zarejestrowane.')
  
      });


  });