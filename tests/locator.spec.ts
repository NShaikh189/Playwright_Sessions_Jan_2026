
import {test, Page} from '@playwright/test';

test('register page', async ({page})=> {
//await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
// page.getByRole('textbox', {name:'First Name'});
await page.goto("https://naveenautomationlabs.com/opencart/ui/data-testid-page.html");

 await page.getByTestId('username-input').fill('hello wonder');
await page.waitForTimeout(3000);


});