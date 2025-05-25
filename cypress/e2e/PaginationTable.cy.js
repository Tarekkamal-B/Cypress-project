describe("Handle Pagination",()=>{

    it("pagination",()=>{

        cy.visit("https://datatables.net/examples/basic_init/alt_pagination.html");

        let totalNumberOfEmployee;
        cy.get("#example_info").then((e)=>{
            let Ptext = e.text(); // Showing 1 to 10 of 57 entries
            totalNumberOfEmployee = Ptext.substring(Ptext.indexOf("f")+1, Ptext.indexOf("e")-1);
            cy.log(`Total number of Employee = ${totalNumberOfEmployee}`);
        })

        let totalNumberOfPages = 7;

        for(let p = 3; p <= totalNumberOfPages; p++){

            if(totalNumberOfPages>1){
                
                cy.log("active page is==="+(p-1));
                cy.get("button[class='dt-paging-button']:nth-child("+p+")").click();

                cy.get("table[class='display dataTable']>tbody>tr")
                    .each(($row, index, $rows)=>{
                        cy.wrap($row).within(()=>{

                            cy.get("td:nth-child(3)").then((e)=>{
                                let officeValue = e.text();
                                cy.log(`Office column value: ${officeValue}`);
                            })
                        })
                        
                        
                        
                    })
            }
        }
    })
})