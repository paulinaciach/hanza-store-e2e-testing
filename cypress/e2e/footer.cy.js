describe("Footer", () => {
  const baseURL = "https://hanzastore.pl/";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Footer contain specif elements", () => {
    cy.get("footer").within(() => {
      cy.get("p").contains("INFORMACJE");
      cy.get("p").contains("OBSŁUGA KLIENTA");
      cy.get("p").contains("MOJE KONTO");
      cy.get(".dipl_facebook_embedded_page");
    });
  });

  it("Informacje contains specif elements", () => {
    cy.get(".et_pb_text_inner").within(() => {
      cy.get("a").contains("O sklepie");
      cy.get("a").contains("Regulamin");
      cy.get("a").contains("Polityka prywatności");
      cy.get("a").contains("Dostawa");
      cy.get("a").contains("Płatności");
    });
  });

  it("O sklepie", () => {
    cy.get("a")
      .contains("O sklepie")
      .click()
      .url()
      .should("eq", "https://hanzastore.pl/o-sklepie/");
  });

  it("Regulamin", () => {
    cy.get("a")
      .contains("Regulamin")
      .click()
      .url()
      .should("eq", "https://hanzastore.pl/regulamin/");
  });

  it("Polityka prywatności", () => {
    cy.get("a")
      .contains("Polityka prywatności")
      .click()
      .url()
      .should("eq", "https://hanzastore.pl/polityka-prywatnosci/");
  });

  it("Dostawa", () => {
    cy.get("a")
      .contains("Dostawa")
      .click()
      .url()
      .should("eq", "https://hanzastore.pl/dostawa/");
  });

  it("Płatnoście", () => {
    cy.get("a")
      .contains("Płatności")
      .click()
      .url()
      .should("eq", "https://hanzastore.pl/platnosci/");
  });

  it("Obsluga contains specif elements", () => {
    cy.get(".et_pb_text_inner").within(() => {
      cy.get("a").contains("Kontakt");
      cy.get("a").contains("FAQ");
      cy.get("a").contains("Zwroty i reklamacje");
    });
  });

  it("Moje konto", () => {
    cy.get(".et_pb_text_inner").within(() => {
      cy.get("a").contains("Logowanie/Rejestracja");
      cy.get("a").contains("FAQ");
      cy.get("a").contains("Zwroty i reklamacje");
    });
  });
});
