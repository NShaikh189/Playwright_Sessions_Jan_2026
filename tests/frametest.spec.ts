import {Page, test} from "@playwright/test";

test('Frame test',async({page})=>{

    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    
});