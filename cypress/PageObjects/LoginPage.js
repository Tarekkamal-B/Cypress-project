class Login
{
    
    setUserName(username){

        cy.get('input[placeholder="Username"]').type(username);
    }

    setPassword(password){

        cy.get('input[placeholder="Password"]').type(password);
    }

    clickOnSubmit(){

        cy.get('button[type="submit"]').click(); 
    }

    verifyLogin(){
        
        cy.url().should('include','/dashboard');
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should('have.text','Dashboard');
    }
}

export default Login;