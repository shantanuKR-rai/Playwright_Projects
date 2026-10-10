const {test, expect} = require('@playwright/test')
test('launching', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');
    await expect(page).toHaveTitle(/Test Login Page for Automation Testing Practice/);
    await page.getByRole("textbox",{name:'username'}).fill('practice');
    await page.getByRole("textbox", {name:'password'}).fill('SuperSecretPassword');
    await page.getByRole("Button",{name:'Login'}).click();
    const errorMessage = page.getByText('Your password is invalid!');
    await expect(errorMessage).toBeVisible();
})