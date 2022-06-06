describe('Logowanie', () => {
    const incorrectEmail = 'jhdvchdsh';
    const correctEmail = 'user23211@gmail.com';
    const userName = 'user23211';
    const weakPassword = 'hhjhj';
    const strongPassword = 'hhjhjfferfgerq34343';
    const baseURL = 'https://hanzastore.pl/moje-konto/';

    beforeEach(() => {
        cy.visit('/moje-konto');
      });

    it('Log in with valid data', () => {

      cy.get('#username').type(correctEmail);
      cy.get('#password').type(strongPassword);
      cy.get('button[type=submit]')
        .contains('Zaloguj się')
        .click()
        .url()
        .should('eq', baseURL);
         cy.get('p').contains(userName)

    });

    it('Log in with no data', () => {
        cy.get('button[type=submit]')
          .contains('Zaloguj się')
          .click()
          .url()
          .should('eq', baseURL);
          cy.get('li').contains('Nazwa użytkownika jest wymagana.')
  
      });
  
    it('Log in with invalid email', () => {
        cy.get('#username').type(incorrectEmail);
        cy.get('#password').type(strongPassword);
        cy.get('button[type=submit]')
          .contains('Zaloguj się')
          .click()
          .url()
          .should('eq', baseURL);
           cy.get('li').contains('Brak '+incorrectEmail+' wśród zarejestrowanych w witrynie użytkowników. Jeśli nie masz pewności co do nazwy użytkownika, użyj adresu e-mail.')
      });

      it('Log in with invalid password for email', () => {
        cy.get('#username').type(correctEmail);
        cy.get('#password').type(weakPassword);
        cy.get('button[type=submit]')
          .contains('Zaloguj się')
          .click()
          .url()
          .should('eq', baseURL);
           cy.get('li').contains('Dla adresu e-mail '+correctEmail+' podano nieprawidłowe hasło.');
      });

      
      it('Log in with invalid password for user', () => {
        cy.get('#username').type(userName);
        cy.get('#password').type(weakPassword);
        cy.get('button[type=submit]')
          .contains('Zaloguj się')
          .click()
          .url()
          .should('eq', baseURL);
           cy.get('li').contains('Wprowadzone hasło dla użytkownika '+userName+' jest niepoprawne.');
      });


  });