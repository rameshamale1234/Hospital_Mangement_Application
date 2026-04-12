const {test, expect} = require('@playwright/test');
import PatientLoginPage  from '../Pages/PatientLoginPage.js';
import patientLoginData from '../Utils/patientLoginData.json';    

test('Patient Login Test', async ({ page }) => {
    const patientLoginPage = new PatientLoginPage(page);
    for (const { EmailId, password } of patientLoginData) {
        await patientLoginPage.patientLogin(EmailId, password);
        await expect(page).toHaveURL('http://localhost/hospital-management-system-master/admin-panel.php');
    }
});