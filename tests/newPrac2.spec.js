const {test,expect}= require('@playwright/test');
test('uploadd',async ({page}) => {

    await page.goto('https://practice.expandtesting.com/upload');
    await page.locator('#fileInput').setInputFiles("C:\\Users\\shant\\OneDrive\\Pictures\\1785933336472.jpg")
    await page.getByRole('button',{name:'Upload'}).click();
    await page.waitForTimeout(4000);

})