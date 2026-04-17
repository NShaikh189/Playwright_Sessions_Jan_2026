import { test,Browser, firefox, expect, Page } from "@playwright/test";


test('google test',async({})=>{
  let browser:Browser =  await firefox.launch({channel:'firefox', headless: false});
  let page: Page = await browser.newPage();
  await page.goto('https://www.google.com/');
  let title:string  = await page.title();
   expect(title).toContainEqual('google');
});


test('flipkart test',async({ page})=>{

})