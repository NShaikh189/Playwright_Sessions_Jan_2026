import { Page, test } from "@playwright/test";

test('shadow Dom test',async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');
    await page.locator('#shadow-btn').click();

    await page.pause();
});