describe("File Upload",()=>{

    it("Single File Upload",()=>{

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("Jmeter CSV.csv");
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
        cy.get('#uploaded-files').should('contain','Jmeter CSV.csv');
    })

    it("File Upload-Rename",()=>{

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath:"Jmeter CSV.csv", fileName:"MyJemter.csv"});
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
        cy.get('#uploaded-files').should('contain','MyJemter.csv');        

    })

    it("File Upload Drag and Drop",()=>{

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload").attachFile("Jmeter CSV.csv", {subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
            .should('have.text','Jmeter CSV.csv');  

    })

    it("Multiple File Upload",()=>{

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(['Jmeter CSV.csv', 'Oreders CSV.csv']);
        cy.get("ul[id='fileList']>li:nth-child(1)").should('have.text','Jmeter CSV.csv');
        cy.get("ul[id='fileList']>li:nth-child(2)").should('have.text','Oreders CSV.csv');
    })

    it("File Upload >> Shadow Dom",()=>{

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile('Jmeter CSV.csv');
        cy.get(".smart-item-name",{includeShadowDom:true}).should('contain','Jmeter CSV.csv');
    })
})