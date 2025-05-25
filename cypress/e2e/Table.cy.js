describe("Handeling Tables",()=>{

    beforeEach('Login',()=>{
        
        //navigate to website and enter username and password and submit
        cy.visit("https://demo3x.opencartreports.com/admin/");
        cy.get("#input-username").clear().type("demo");
        cy.get("#input-password").clear().type("demo");
        cy.get("button[type='submit']").click();

        // naigation to customers screen
        cy.get("#menu-customer>a").click(); //cutomers main menu
        cy.get("#menu-customer>ul>li:first-child").click(); 

    })

    it("Check number of Rows & Columns",()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','7'); //No.ofRows
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','10'); //No.ofCol
    })

    it("Check cell data from specific Row or Column",()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(6)")
        .contains("$2,107.67");
    })

    it("Read all the Rows & Columns data in the first page",()=>{
        
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows)=>{
                
                cy.wrap($row).within(()=>{
                
                    cy.get("td").each(($col, index, $cols)=>{
                
                        cy.log($col.text());
                    })
                })
        })
    })

    
    it("pagination",()=>{

        //find total number of pages
        let totalNumberOfPages
        cy.get(".col-sm-6.text-right").then((e)=>{
            let Ptext = e.text(); //Showing 1 to 7 of 7 (1 Pages)
            totalNumberOfPages = Ptext.substring(Ptext.indexOf("f")+1, Ptext.indexOf("(")-1);
            cy.log(`Total number of pages = ${totalNumberOfPages}`);
       
        })
    
    })

})

