const {test, expect}= require('@playwright/test');
 
test('view the brand is display or not', async ({page})=>{

   await page.goto("https://automationexercise.com/");

//click on the product butten
  await  page.locator("//a[@href='/products']").click()

    //chech the brand are available or not 
    const brand =page.locator("//h2[normalize-space()='Brands']")
    await  expect (brand).toBeVisible();

    //click on any brand name
   await page.locator("//a[@href='/brand_products/Madame']").click({
    force: true
})
   const brandTitle = page.locator("//h2[normalize-space()='Brand - Madame Products']")
   await expect(brandTitle).toBeVisible();

   // check brand products are displayed or not
   const brandProduct = page.locator(".product-image-wrapper").first();
   await expect(brandProduct).toBeVisible();

   // click on any other brand
   await page.locator("//a[@href='/brand_products/Babyhug']").click();

   // verify the user goes to the new brand page and sees products
   await expect(page.locator("//h2[contains(text(),'Brand -')]")).toBeVisible();






})