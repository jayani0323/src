import { Selector, t } from 'testcafe';
// import faker from 'faker';

export class LoginPage {
  usernameInput = Selector('#user-name');
  passwordInput = Selector('#password');
  loginButton = Selector('#login-button');

  async login(username: string, password: string) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginButton);
  }
}

export class InventoryPage {
  item = Selector('inventory_item_name').withText('Sauce Labs Fleece Jacket')
  itemPrice = Selector('.inventory_item_price');
  addButton = Selector('.btn_primary.btn_inventory');

  async addItemToCart() {
    await t
      .click(this.addButton)
      .wait(2000)
  }

  async checkItemPrice(expectedPrice: string) {
    await t
      .expect(this.itemPrice.withText(expectedPrice).exists).ok();
  }
}

export class CartPage {
  cartLink = Selector('.shopping_cart_link');
  cartItems = Selector('.cart_item');
  checkoutButton = Selector('.checkout_button');

  async goToCart() {
    await t
      .click(this.cartLink)
      .wait(2000)
  }

  async checkCartItemCount(expectedCount: number) {
    await t
      .expect(this.cartItems.count).eql(expectedCount);
  }

  async checkout() {
    await t
      .click(this.checkoutButton)
      .wait(2000)
  }
}

export class CheckoutPage {
  firstNameInput = Selector('#first-name');
  lastNameInput = Selector('#last-name');
  zipCodeInput = Selector('#postal-code');  
   continueButton = Selector('.btn_action');
   finishButton = Selector('cart_button');   

  async fillCheckoutForm(firstName: string, lastName: string, zipCode: string) {
    await t
      .typeText(this.firstNameInput, firstName)
      .typeText(this.lastNameInput, lastName)
      .typeText(this.zipCodeInput, zipCode)
      .wait(2000)
      .click(this.continueButton)
  }
  async continueCheckout(){
    await t 
      .click(this.continueButton)
      .wait(2000)
  }

  async finishCheckout() {
    await t
      .click(this.finishButton);
  }
}






