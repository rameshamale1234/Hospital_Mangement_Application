const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../Pages/RegistrationPage.js'); 
import { generateUserData } from '../Utils/registrationData.js';

test('npx playwright test -g "Patient registration" --ui', async ({ page }) => {
    // Create object of the Page class
    const registrationPage = new RegistrationPage(page);

    // Navigate to the registration page
    await registrationPage.goToRegistrationPage();

    const userData = generateUserData();

    // Fill the registration form and submit
    await registrationPage.patientRegistration(userData);

    // Verify registration success
    await expect(page).toHaveURL('http://localhost/hospital-management-system-master/admin-panel.php');
});