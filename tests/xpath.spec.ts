import {test, Page} from '@playwright/test';

test('test xpath locator',async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
await page.locator("//input[@id='input-firstname']").fill('Nayum');
let headerText = await page.locator("//h1[text()='Register Account']").textContent();
console.log(headerText);
let headerInner = await page.locator("//h1[text()='Register Account']").innerText();
console.log(headerInner);
//innerText() : exact text
//textContent(): text with the white spaces + blank lines

// //htmltag[contains(@attribute,'value')];
// htmltag[contains(text(),'value')]
// htmltag[starts-with(text(),'value')]
// page.locator('h1:has-text("Register Account")'); //partial matching
// page.locator('h1:has-text("Register")');
//page.locator('h1:text-is("Register Account")'); Exact Match

//page.locator('text=Register Account');
});