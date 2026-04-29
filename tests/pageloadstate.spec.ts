//load:
//domcontentloaded
//networkidle
//commit

import {test, Page} from '@playwright/test'

test('page load state', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil:'load'});

await page.getByRole('textbox', {name: 'First Name'}).fill('Naveen Labs');
let firstNameValue = await page.getByRole('textbox', {name: 'First Name'}).inputValue();

console.log(firstNameValue);
});