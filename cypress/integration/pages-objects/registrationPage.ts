export class RegistrationPage {
  
    navigateToApplication() {
      cy.visit('https://magento.softwaretestingboard.com');
    }
  
    tapCreateAccountLink() {
      cy.get('a[href*="/customer/account/create/"]').first().click();
    }
  
    enterFirstName(firstName: string) {
      cy.get('#firstname').type(firstName);
    }
  
    enterLastName(lastName: string) {
      cy.get('#lastname').type(lastName);
    }
  
    enterEmailId(email: string) {
      cy.get('#email_address').type(email);
    }
  
    enterPassword(password: string) {
      cy.get('#password').type(password);
    }
  
    enterConfirmPassword(confirmPassword: string) {
      cy.get('#password-confirmation').type(confirmPassword);
    }
  
    enterRegistrationDetails(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
      this.enterFirstName(firstName);
      this.enterLastName(lastName);
      this.enterEmailId(email);
      this.enterPassword(password);
      this.enterConfirmPassword(confirmPassword);
    }
  
    tapOnRegistrationButton() {
      cy.get('button[title="Create an Account"]').click();
    }
  
    getConfirmationMessage(message: string) {
      cy.contains(message).should('be.visible');
    }
  }
  
  export const registerUser = new RegistrationPage();
  