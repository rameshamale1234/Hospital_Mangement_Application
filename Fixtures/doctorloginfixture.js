import {test as base,expect} from '@playwright/test';
import RegistrationPage from '../Pages/RegistrationPage.js';
import LoginDetailsofDrForappointmentverification from '../Utils/LoginDetailsofDrForappointmentverification.json';


export const test=base.extend({
    doctorLoginFixture: async ({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        const userName = LoginDetailsofDrForappointmentverification[0].username;
        const password = LoginDetailsofDrForappointmentverification[0].password;
        await registrationPage.doctorLogin(userName, password);
        await use(page);
    }
})

export {expect};