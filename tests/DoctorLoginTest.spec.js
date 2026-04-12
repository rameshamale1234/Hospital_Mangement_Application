import{test,expect} from '@playwright/test';
import  RegistrationPage from '../Pages/RegistrationPage.js';
import  DoctorDashboardPage from '../Pages/DoctorDashboardPage.js'
import drLoginData from '../Utils/drLoginData.json';


test('Doctor Login Test', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const doctorPanelPage = new DoctorDashboardPage(page);
    for (const { userName, password } of drLoginData) {
        await registrationPage.doctorLogin(userName, password);
        const welcomeMessage = (await doctorPanelPage.getWelcomeMessage()).trim().replace(/\s+/g, ' ');
        expect(welcomeMessage).toContain(`Welcome ${userName}`);

    }
});

