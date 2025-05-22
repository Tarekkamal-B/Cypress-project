describe("Handel tabs",()=>{

    it("Approach 1",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows"); //parent tab

        cy.get("a[href='/windows/new']").invoke("removeAttr","target").click();

        cy.get("div[class='example'] h3").contains("New Window");
        
        //operations

        cy.go('back'); //back to parent tab

        // assertion to validate backing to parent window
        cy.url().should("include","https://the-internet.herokuapp.com/windows");
        cy.get("div[class='example'] h3").contains("Opening a new window");

    })

    it("Approach 2",()=>{

        let child_url;

        cy.visit("https://the-internet.herokuapp.com/windows"); //parent tab

        cy.get("a[href='/windows/new']").then((e)=>{

            child_url = e.prop('href'); // here i capture the child url and store it into varible to navigate later
            
            cy.visit(child_url);
        })

        cy.get("div[class='example'] h3").contains("New Window");

        cy.go('back');

        // assertion to validate backing to parent window
        cy.url().should("include","https://the-internet.herokuapp.com/windows");
        cy.get("div[class='example'] h3").contains("Opening a new window");

    })



})