describe("My test suit",()=>{
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Cannot read properties of undefined (reading 'response')")) {
          return false; // Prevent Cypress from failing the test
        }
      });

    it("DataDrivenTest",()=>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture("OrangeHrm2.json").then((data)=>{
            data.forEach((userdata)=>{

                cy.get('input[placeholder="Username"]').type(userdata.username);
                cy.get('input[placeholder="Password"]').type(userdata.password);
                cy.get('button[type="submit"]').click();

                if(userdata.username == "Admin" && userdata.password == "admin123"){

                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                        .should('have.text',userdata.expected);
                
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
                    cy.get("ul[class='oxd-dropdown-menu']>li:nth-child(4)").click();
                    cy.url().should('contain','/login');    
                }

                else{

                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text',userdata.expected);  
                    cy.url().should('contain','/login'); 
                }
            })
        })
    })
})