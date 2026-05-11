import { Page, test } from "@playwright/test";

test('Flipkart SVG element test',async({page})=>{

    await page.goto('https://flipkart.com');
    await page.locator('#shadow-btn').click();
    
    await page.pause();
});