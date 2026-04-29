import {test, Page, Locator} from '@playwright/test'

test('Total images on page ', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil:'load'});
let images: Locator[] = await page.locator('img').all();

for(let k of images)
{
    let altVal = await k.getAttribute('alt');
    let srcVal = await k.getAttribute('src');
    console.log(altVal);
    console.log(srcVal);
   
}
});


test('Total links on page state', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil:'load'});
let links: Locator[] = await page.locator('a[href]').all();

for(let k of links)
{
    let text = await k.innerText();

    if(text!=''){
    let hrefValue = await k.getAttribute('href');
    console.log(text);
    console.log(hrefValue);
    }
}
});