# hanza-store-e2e-testing
#### Testy e2e przy użycia fremworka Cypress

## Spis treści 
* [Wprowadzenie](#wprowadzenie)
* [Uruchomienie](#uruchomienie)
* [Architektura systemu i oprogramowania](#architektura-systemu-i-oprogramowania)
* [Przykładowe testy](#Przykładowe-testy)


## Wprowadzenie 

Niniejszy projekt zwiera testy automatyczne sklepu interentowego Hanza Store. E-sklep jest oparty o CMS WordPress - https://hanzastore.pl .<br/><br/>
Do przeprowadzenia testów automatycznych został wykorzystany freamwork Cypress. <br/><br/>
Testy pokrywaja 6 sekcji, każda sekcja od 2 do 7 przypadków testowych, łacznie 42 testy . <br/><br/>

**Sekcje:**
* cart
* footer
* header
* login
* register 
* search
 
**Przykładowe przypadki testowe dla sekcji login:** 
* Log in with valid data
* Log in with no data
* Log in with invalid email
* Log in with invalid password for email
* Log in with invalid password for user

## Uruchomienie

<b>npm install cypress --save-dev</b>
<b> cypress open</b>

## Architektura systemu i oprogramowania 


**Stack technologiczny:**
* Cypress - JS testing framework

**Architektura uruchomieniowa:**
* Visual Studio Code
* Cypress GUI

## Przykładowe testy


```javascript
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

```


```javascript
  it('Register with existing user', () => {
        cy.get('#reg_email').type(correctEmail);
        cy.get('#reg_password').type(strongPassword);
        cy.get('button[type=submit]')
          .contains('Zarejestruj się')
          .click()
          .url()
          .should('eq', baseURL);
           cy.get('li').contains('Konto z Twoim adresem e-mail jest już zarejestrowane.')
  
      });
```

```javascript
 it('Click on Koszyk, returns koszyk page', ()=>{
        cy.get('.vi-wcaio-menu-cart-nav-wrap')
        .click({ multiple: true })
        .wait(500)
        .url()
        .should('eq', 'https://hanzastore.pl/koszyk/' )
    })
```

```javascript

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
```
