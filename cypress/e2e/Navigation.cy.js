describe("My Test Suit",()=>{

    it("Navigation Test",()=>{

        cy.visit("https://www.litecart.net/demo");
        
        cy.title().should('eq','Demo | LiteCart');
        cy.get(':nth-child(4) > .nav-link').click();

        cy.title().should('eq','LiteCart Translations');
        cy.get("h1[class='card-title']").should('contain','Translations');

        cy.go('back'); //back to home page
        cy.title().should('eq','Demo | LiteCart');

        cy.go('forward'); // go forward to Translation
        cy.title().should('eq','LiteCart Translations');
        cy.get("h1[class='card-title']").should('contain','Translations');

        cy.go(-1); //back to home page
        cy.title().should('eq','Demo | LiteCart');

        cy.go(1); // go forward to Translation
        cy.title().should('eq','LiteCart Translations');
        cy.get("h1[class='card-title']").should('contain','Translations');

        cy.reload();

    })

 

})