class Login
{
    txtUserName = 'input[placeholder="Username"]';
    txtPassword = 'input[placeholder="Password"]';
    btnSubmit = 'button[type="submit"]';
    lblMessage = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickOnSubmit()
    {
        cy.get(this.btnSubmit).click(); 
    }

    verifyLogin()
    {    
        cy.url().should('include','/dashboard');
        cy.get(this.lblMessage)
        .should('have.text','Dashboard');
    }
}

export default Login;