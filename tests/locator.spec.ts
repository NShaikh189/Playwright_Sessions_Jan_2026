
import {test, Page} from '@playwright/test';

test('register page', async ({page})=> {
    let username =  page.getByTestId('username-input');
//await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
// page.getByRole('textbox', {name:'First Name'});
await page.goto("https://naveenautomationlabs.com/opencart/ui/data-testid-page.html");
//await username.highlight();
await username.pressSequentially("Wonderland", {delay:300});
// await username.fill('hello wonder');
await page.waitForTimeout(5000);


});