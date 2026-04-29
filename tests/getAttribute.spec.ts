import {test, Page} from '@playwright/test'

test('get attribute', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil:'load'});

let placeholderValue = await page.getByRole('textbox', {name: 'First Name'}).getAttribute('placeholder');
 
let hrefValue = await page.getByRole('link',{name: 'Forgotten Password'}).getAttribute('href');
console.log(placeholderValue);
console.log(hrefValue);
});