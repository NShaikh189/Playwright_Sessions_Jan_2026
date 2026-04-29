import {test, Page, Locator} from '@playwright/test'

test('Total images on page ', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil:'load'});
let allLinks = await page.locator('a.list-group-item').all();
//let linkCount = await page.locator('a[href]').count();

for(let e of allLinks)
{
    await e.highlight();
    let linkText = (await e.innerText()).trim();
    console.log(linkText);
 await page.waitForTimeout(2000);
    if(linkText === 'Transactions')
    {
        await e.click();
       break;
    }
}
});