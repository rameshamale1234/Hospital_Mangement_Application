export default class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name *' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name *' })
        this.emailInput = page.getByRole('textbox', { name: 'Your Email *' })
        this.phoneInput = page.getByRole('textbox', { name: 'Your Phone *' })
        this.passwordInput = page.locator('#password')
        this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password *' })
        this.registerButton = page.locator('input[name="patsub1"]');
        this.doctorTab = page.getByRole('tab', { name: 'Doctor' });
        this.ReceptionistTab = page.getByRole('tab', { name: 'Receptionist' });
        this.drUserName = page.locator('[name="username3"]')
        this.drPassword = page.locator('input[name="password3"]')
        this.drLoginButton = page.locator('[name="docsub1"]');
        this.adminUserName=page.locator('[name="username1"]');
        this.adminPassword=page.locator('[name="password2"]');
        this.adminLoginButton=page.locator('[name="adsub"]');
    }

    async goToRegistrationPage() {
        await this.page.goto('Url');
    }

    async patientRegistration(userData) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.emailInput.fill(userData.email);
    await this.phoneInput.fill(userData.phone);
    await this.passwordInput.fill(userData.password);
    await this.confirmPasswordInput.fill(userData.password);
    await this.registerButton.click();
    }

    async doctorLogin(userName, password) {
        await this.page.goto('http://localhost/hospital-management-system-master/');
        await this.doctorTab.click();
        await this.drUserName.fill(userName);
        await this.drPassword.fill(password);
        await this.drLoginButton.click();
        }

    async adminLogin(userName, password) {
        await this.page.goto('http://localhost/hospital-management-system-master/');
        await this.ReceptionistTab.click();
        await this.adminUserName.fill(userName);
        await this.adminPassword.fill(password);
        await Promise.all([
        this.page.waitForNavigation(),
        this.adminLoginButton.click()
    ]);
    }
}

module.exports = { RegistrationPage };