import { LoginPage, InventoryPage, CartPage, CheckoutPage } from './Page-model';

fixture('Sauce Demo Automation')
  .page('https://www.saucedemo.com');

test('Login, Add items to cart, checkout and confirm order', async () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  // Login to the system
  await loginPage.login('performance_glitch_user', 'secret_sauce');

  // Check the price of the Fleece Jacket
  await inventoryPage.checkItemPrice('$49.99');

  // Add two products to the cart
  await inventoryPage.addItemToCart();
  await inventoryPage.addItemToCart();

  // Go to the cart page
  await cartPage.goToCart();

  // Verify the selected items are in the cart
  // await cartPage.checkCartItemCount(2);

  // Proceed to checkout
  await cartPage.checkout();

  // Fill out the checkout form with random data
  const firstName = 'John';
  /* const firstname = faker.name.firstName(); */
  const lastName = 'Doe';
  /* const firstname = faker.name.lastName(); */
  const zipCode = '12345';
  /* const firstname = faker.address.zipCode(); */

  await checkoutPage.fillCheckoutForm(firstName, lastName, zipCode);

  // Continue to order review
  await checkoutPage.continueCheckout();

  // Finish the order
  await checkoutPage.finishCheckout();
});



/*    Note: Tried to install 'faker' but couldn't. So I entered data manually. :(   */