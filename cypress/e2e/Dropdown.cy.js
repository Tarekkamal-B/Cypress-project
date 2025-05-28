describe("Hanlding Dropdown",()=>{

    it("Dropdown With Select",()=>{

        cy.visit("https://letcode.in/dropdowns");
        cy.get("#fruits").select("Apple").should('have.value','0');  //have value = 0 coz Apple index is 0
    })

    it("Dropdown Without Select",()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get("#select2-billing_country-container").click();
        cy.get("input[role='combobox']").type("Egypt").type('{enter}');
        cy.get("#select2-billing_country-container").should('have.text','Egypt');

    })
    
    it("Auto Suggetion Dropdown ",()=>{

        cy.visit("https://www.wikipedia.org/");
        
        cy.get("#searchInput").click().type("Egypt");
        cy.get(".suggestion-link").contains("Egypt national football team").click();
        
    })

    it.skip("Dynamic Dropdown ",()=>{

        cy.visit("https://www.google.com/");

        cy.get("#APjFqb").type("cypress automation",{delay:100});
        cy.get(".wM6W7d").should('be.visible');
        cy.get(".wM6W7d").each(($el, index, $list)=>{
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click();
            }
        })
        
        cy.get("#APjFqb").should('have.value','cypress automation tool');
        
    })


})