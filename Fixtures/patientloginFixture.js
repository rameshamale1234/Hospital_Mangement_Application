import { test as base, expect } from '@playwright/test';
import  PatientLoginPage  from '../Pages/PatientLoginPage.js';
import AppointmentBooking from '../Utils/AppointmentBooking.json';



export const test = base.extend({

  loginFixture: async ({ page }, use) => {
    const patientLoginPage = new PatientLoginPage(page);
    const userName = AppointmentBooking.login.userName;
    const password = AppointmentBooking.login.password;
    await patientLoginPage.patientLogin(userName, password);
    await expect(page).toHaveURL('http://localhost/hospital-management-system-master/admin-panel.php');
    await use(page);
  }
});

export { expect };


