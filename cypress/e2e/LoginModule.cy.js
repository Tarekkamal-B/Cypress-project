
describe('Login Module', () => {
  
  it('verify title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.title().should('eq','OrangeHRM');
  })

  it('Verify login with valid username, password', ()=>{
    cy.login('Admin','admin123');
    cy.url().should('include','/dashboard');
  })


  it('Verify login with valid username, invalid password', ()=>{
    cy.login('Admin','admin12345');
    cy.get('.oxd-alert-content.oxd-alert-content--error').should('contain',"Invalid credentials");
  })

  it('Verify login with invalid username, valid password', ()=>{
    cy.login('Addmin','admin123');
    cy.get('.oxd-alert-content.oxd-alert-content--error').should('contain',"Invalid credentials");
  })

  it.skip('verify log out', ()=>{
    cy.login('Admin','admin123');
    cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    cy.xpath("//a[normalize-space()='Logout']").click();
    cy.url().should('contain','/login');
    cy.xpath("//input[@placeholder='Username']").should('be.visible');
  })

})

