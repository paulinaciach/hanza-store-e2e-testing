describe("Search", () => {
  const baseURL = "https://hanzastore.pl/";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Search bar - enable to type", () => {
    cy.get('[id="dgwt-wcas-search-input-1"]')
      .should("have.class", "dgwt-wcas-search-input")
      .type("Test typing...");
    cy.get(".dgwt-wcas-close").click();
    cy.wait(5000);
  });

  it("Search bar placeholder", () => {
    cy.get("input:first").should(
      "have.attr",
      "placeholder",
      "Szukaj produktów"
    );
  });

  it("Search bar - type something: brak wyników", () => {
    cy.get('[id="dgwt-wcas-search-input-1"]')
      .should("have.class", "dgwt-wcas-search-input")
      .type("Test typing...");
    cy.get(".dgwt-wcas-suggestion").contains("Brak wyników");
  });

  it("Search bar - type something: returns product", () => {
    cy.get('[id="dgwt-wcas-search-input-1"]')
      .should("have.class", "dgwt-wcas-search-input")
      .type("Bodo");
    cy.get(".dgwt-wcas-st-title").contains(" bloczek 34x52x130 knifemaking");
    cy.get(".dgwt-wcas-st-title").contains(" okładki 11x52x130 knifemaking");
  });

  it("Search bar - type something: returns product - choose 1st", () => {
    cy.get('[id="dgwt-wcas-search-input-1"]')
      .should("have.class", "dgwt-wcas-search-input")
      .type("Bodo");
    cy.get(".dgwt-wcas-suggestion-product")
      .eq(0)
      .click({ force: true })
      .url()
      .should(
        "eq",
        "https://hanzastore.pl/produkt/bodo-bloczek-34x52x130-knifemaking-10748806208/"
      );
  });
});
