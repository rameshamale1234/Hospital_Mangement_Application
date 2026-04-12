import {test as base,expect} from '@playwright/test';
import RegistrationPage from '../Pages/RegistrationPage.js';
import adminLoginData from '../Utils/adminLoginData.json';

export const test=base.extend({
    adminLoginfixture: async ({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        const { username, password } = adminLoginData[0];
        await registrationPage.adminLogin(username, password);
         await expect(page).toHaveURL(
            'http://localhost/hospital-management-system-master/admin-panel1.php'
        );
        await use(page);
    }
});

export {expect};