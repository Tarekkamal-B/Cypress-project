describe("Handling frames",()=>{

    it("Approach 1",()=>{

        cy.visit("https://practice.expandtesting.com/iframe");
        let iframe = cy.get("#mce_0_ifr")
            .its("0.contentDocument.body")
            .should("be.visible")
            .then(cy.wrap);
        
        iframe.clear().type("Hello Iframe {ctrl+a}");

    })

    it("Approach 2 by using custom command",()=>{

        cy.visit("https://practice.expandtesting.com/iframe");

        let iframe = cy.GetIframe('#mce_0_ifr');
        
        iframe.clear().type("Hello From Cypres custom command {ctrl+a}");
    }) 

    it("Approach 3 by using Cypress iframe Plugins",()=>{

        cy.visit("https://practice.expandtesting.com/iframe");

        cy.frameLoaded('#mce_0_ifr'); //this command load the frame , so we can interact with the frame

        cy.iframe('#mce_0_ifr').clear().type("Hello from cypress-iframe plugin {ctrl+a}");//interact with the frame

    })
})