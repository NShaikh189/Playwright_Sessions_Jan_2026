
import {Browser, BrowserContext, Page, chromium, firefox, webkit} from "@playwright/test";

(async()=>{
    let browser: Browser = await chromium.launch({channel:'chrome',headless: false, slowMo: 500});
//slowMo : 500 milliseconds
    let ctx1: BrowserContext = await browser.newContext();
    let ctx2: BrowserContext= await browser.newContext();

    let page1: Page = await ctx1.newPage();
    let page2: Page = await ctx2.newPage();

    await page1.goto("https://google.com");
   await page2.goto("https://amazon.in");
})();
