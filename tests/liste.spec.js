const {test, expect} = require("@playwright/test");
const { count } = require("node:console");
test('wpage', async({page}) => {
    await page.goto("https://practice.expandtesting.com/inputs");
    await expect(page).toHaveTitle(/Web inputs page for Automation Testing Practice/);
    await page.locator('#input-date').fill('2025-09-01');
    await page.locator('#input-number').fill('9');
    await page.locator('#input-text').fill('hello');
    await page.locator('#input-password').fill('hello');
    await page.getByRole("button", {name:'Display Inputs'}).click();
    await page.close();
})
test('apage', async({page}) =>{
    await page.goto('https://practice.expandtesting.com/register')
    await page.locator('#username').fill('hello123');
    await page.locator('#password').fill('hellooooo');
    await page.locator('#confirmPassword').fill('hellooooo');
    await page.getByRole("button",{name:'Register'}).click();

})
test('dynamicDrop', async ({page}) => {
    await page.goto('https://www.yatra.com/');
    await expect(page).toHaveTitle(/Yatra.com – Best Travel Website. Book Flights, Hotels, Trains, Holidays & Bus Tickets/);
    await page.getByLabel('Departure From').click();
    await page.locator('#input-with-icon-adornment').fill('vara',{delay:2000});
    await page.locator('.css-1clltkz').filter({ hasText: 'vara' }).first().click();
    await page.locator('#input-with-icon-adornment').fill('kol',{delay:2000});
    await page.locator('.css-1clltkz').filter({ hasText: 'kol' }).first().click();
    await page.locator('div[aria-label="Choose Monday, September 14th, 2026"]').click();
    await page.getByRole("button", {name:'Done'}).click();
    await page.locator('//*[@id="__next"]/div/div[1]/div[2]/div/div[3]/div/div[2]/div/div[2]/div/button').click();
    
})

test('iframe', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/iframe');
    const frame = page.frameLocator('#email-subscribe');
    await frame.locator('#email').fill('test@example.com');
    await frame.getByRole('button', {name:'Subscribe'}).click();

})

test('dragdrop', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/drag-and-drop-circles');
    const source1 = page.locator('.red');
    const source2 = page.locator('.blue');
    const target = page.locator('#target');
    await source1.dragTo(target);
    await source2.dragTo(target);
    await page.locator('.green').dragTo(page.locator('#target'))
})
test('newTab', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://practice.expandtesting.com/');
    const [newPage1]= await Promise.all([
         context.waitForEvent('page'),
         page.getByRole("link",{name:"Buy us a coffee"}).click()
    ]);
    await page.waitForTimeout(3000);
    await newPage1.getByPlaceholder('Name or @yoursocial').fill("qazxswedc");
    await newPage1.getByPlaceholder('Say something nice...').fill("qazxswedc");
    await newPage1.waitForTimeout(3000);
}
)

test('promptt', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
     page.on('dialog', async dialog =>{
        await dialog.dismiss();// accept()
    })
    await page.getByRole('button',{name:'Click for JS Prompt'}).click();
   

})

test('domPage', async({page})=>{
    await page.goto('https://www.betterbugs.io/development-tools/text-compare');
    
    await page.getByPlaceholder('Paste left text...').fill('https://practice.expandtesting.com');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    await page.getByRole('button',{name:'Compare'}).click();
})