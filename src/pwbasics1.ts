//IIFE function: config file is not applicable

import { chromium, Browser, Page, Locator } from "playwright";

(async ()=>{
//console.log("Hello World");
//let browser:Browser = await chromium.launch({channel:'chromium',headless:false});
let browser:Browser = await chromium.launch({channel:'chrome',headless:false});

//let browser:Browser = await chromium.launch({channel:'msedge',headless:false});
//let browser:Browser = await chromium.launch({channel:'brave',headless:false});

let page: Page = await browser.newPage();
await page.goto("https://www.flipkart.com");

let title:string = await page.title();
let url: string = page.url();


//browser.close();
})();