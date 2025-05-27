describe("Mouse operations", ()=>{

    it("Mouse Hover", ()=>{

        cy.visit("https://the-internet.herokuapp.com/hovers");

        cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > h5:nth-child(1)')
            .should('not.be.visible');

        /* here i used realHover from cypress-real-events plugin cuz <h5> which include "user1" is inside 
        figcaption and cypress can't simulate real Hover for this scenario so the solution is  cypress-real-events plugin */     
        cy.get("div[class='figure']").first()
            .realHover();

        cy.get('.figure').first().find('h5').should('be.visible').and('contain','user1');
    })


    it("Right Click First Approach",()=>{

        cy.visit("https://the-internet.herokuapp.com/context_menu");

        cy.on('window:alert',(alertElemnt)=>{

            expect(alertElemnt).to.contains('You selected a context menu');
        })

        cy.get("#hot-spot").trigger('contextmenu');
    })


    it("Right Click Seconed Approach",()=>{

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should('be.not.visible');

        // u can use here rightClick() function or trigger('contextmenu') it's optional and senario based.
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');

        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should('be.visible');

        cy.on('window:alert',(e)=>{
            expect(e).to.contains("clicked: copy");
        })

        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").click();
    })


    it("Double Click",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/");

        cy.get("#field1").should('have.value', 'Hello World!');
        cy.get("#field2").should('have.value', '');
        
        // can use dblclick() instead odf trigger('dblclick')
        cy.get("button[ondblclick='myFunction1()']").trigger('dblclick');

        cy.get("#field1").should('have.value', 'Hello World!');
        cy.get("#field2").should('have.value', 'Hello World!');
        cy.log("✅ Your Test Passed: Texts match.");
        
    })

    it("Drag and Drop using Plugin",()=>{
        cy.visit("http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html");
        
        cy.get("#box6").drag("#box106",{ force: true });
        cy.wait(500);
       /* cy.get("#box7").drag("#box107");
        cy.get("#box5").drag("#box105",{ force: true });
        cy.get("#box4").drag("#box104",{ force: true });
        cy.get("#box3").drag("#box103",{ force: true });
        cy.get("#box2").drag("#box102",{ force: true });
        cy.get("#box1").drag("#box101",{ force: true });
        */
        //cy.get("div[id='box106']>div[id='box6']").should('be.visible');
    })


    it("Scrolling Page",()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        
        cy.get(':nth-child(1) > tbody > :nth-child(57) > :nth-child(1) > img').scrollIntoView({duration:6000});
        cy.get(':nth-child(1) > tbody > :nth-child(57) > :nth-child(1) > img').should('be.visible');
        
        cy.get(":nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img")
            .scrollIntoView({duration:6000});
        cy.get(":nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img").should('be.visible');  
        
        cy.get("#footer").scrollIntoView({duration:6000});
        cy.get("#footer").should('contain','www.countries-ofthe-world.com');
    })


})