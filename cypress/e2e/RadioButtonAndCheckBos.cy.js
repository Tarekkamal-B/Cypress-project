describe("Handling Radio Button And Check Boxes",()=>{

    it("Checking Radio button",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/");

        cy.get("input#male").should("be.visible");
        cy.get("input#female").should("be.visible");

        cy.get("input#male").check().should('be.checked'); 
        cy.get("input#female").should('not.be.checked'); 
 
        cy.get("input#female").check().should('be.checked');
        cy.get("input#male").should('not.be.checked'); 
     })

     it("Checking Check Boxes",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/");

        cy.get('input#sunday').should('be.visible');
        cy.get('input#sunday').check().should('be.checked');
        cy.get('input#sunday').uncheck().should('not.be.checked');

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');

        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');
        
     })

    
})