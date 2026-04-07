import {test, expect} from '@playwright/test';
const { RegistrationPage } = require('../Pages/RegistrationPage'); 
import adminLoginData from '../Utils/adminLoginData.json';

test('Admin login test', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    for(const{username, password} of adminLoginData){
        await registrationPage.adminLogin(username, password);
       `await expect(page).toHaveURL('http://localhost/hospital-management-system-master/admin-panel.php');`
    }   
}); 