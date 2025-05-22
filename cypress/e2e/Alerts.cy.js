describe("Alerts",()=>{
    
    it("Js Alert",()=>{
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        
        cy.get("button[onclick='jsAlert()']").click();
        // trigger an event : in this case is "Window alert"
        //normal alert automatically closed by cypress but here we want to validate alert message 
        cy.on("window:alert",(t)=>{
            expect(t).to.contains("I am a JS Alert");
        })
        cy.get("#result").contains("You successfully clicked an alert");
    })

    it("JS confirm Alert- OK",()=>{
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
       
        cy.get("button[onclick='jsConfirm()']").click();
       
        cy.on("window:confirm",(t)=>{
            expect(t).to.contains("I am a JS Confirm");
        })
        
        cy.get("#result").should('have.text','You clicked: Ok');
    })


    it("JS confirm Alert- Cancel",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on("window:confirm",(t)=>{
            expect(t).to.contains("I am a JS Confirm");
        })

        cy.on("window:confirm",()=>false); //cypress will close alert window with cancel button 

        cy.get("#result").should("have.text","You clicked: Cancel");

    })

    it("JS Prompt Alert with writing and confirm",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("wellcome");
        })
       
        cy.get("button[onclick='jsPrompt()']").click();

        cy.get("#result").should("have.text","You entered: wellcome");
        
    })

    it("JS Prompt Alert with cancel",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns(null);
        })

        cy.get("button[onclick='jsPrompt()']").click();

        cy.get("#result").should("have.text","You entered: null");
        
    })

    it("Authenticated Alert with valid auth", ()=>{
         
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                                {username: "admin",
                                                                 password: "admin"}});
         
        cy.get("div[class='example'] p").contains("Congratulations! You must have the proper credentials");
        
    })

    it("Authenticated Alert", ()=>{
         
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                                {username: "admin",
                                                                 password: "admin"}});
         
       cy.get("div[class='example'] p").contains("Congratulations! You must have the proper credentials");
        
    })
  
})