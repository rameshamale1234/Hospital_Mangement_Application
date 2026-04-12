export default class AddDrPage{
    constructor(page){
        this.page = page;
        this.drName=page.locator('[name="doctor"]')
        this.drSpecialization=page.getByRole('combobox')
        this.drEmail=page.locator("//div[@id='list-settings']//input[@name='demail']")
        this.password=page.locator('#dpassword');
        this.confirmPassword=page.locator('#cdpassword')
        this.fees=page.locator('[name="docFees"]');
        this.submit=page.locator('[name="docsub"]')
    }

    async addDoctor(name, specialization, email, password, confirmPassword, fees) {
    await this.drName.fill(name);
    await this.drSpecialization.selectOption(specialization);
    await this.drEmail.fill(email);
    await this.password.fill(password);
    await this.confirmPassword.fill(confirmPassword);
    await this.fees.fill(fees.toString());

    const dialogPromise = this.page.waitForEvent('dialog');

    await this.submit.click();

    const dialog = await dialogPromise;
    console.log(dialog.message());
    await dialog.accept();
}
}