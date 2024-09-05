export class LoginPage {

    getLoginLink() {
      cy.get('a[href*="/customer/account/login/"]').first().click();
    }
  
    enterEmailId(email: string) {
      cy.get('#email').type(email);
    }
  
    enterPassword(password: string) {
      cy.get('#pass').type(password);
    }
  
    enterLoginDetails(email: string, password: string) {
      this.enterEmailId(email);
      this.enterPassword(password);
    }
  
    clickLoginButton() {
      cy.get("div>button[class='action login primary']>span").click();
    }
  
    verifyLoginSuccessfully() {
      cy.get("div[class='field search']>div[class='control']>input[id='search']").should('be.visible');
    }
  }
  
  export const loginPage = new LoginPage();
  