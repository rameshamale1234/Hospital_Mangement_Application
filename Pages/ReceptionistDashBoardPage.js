export default class ReceptionistDashBoardPage{
    constructor(page){
        this.page = page;
        this.addDoctorTab = this.page.getByRole('tab', { name: 'Add Doctor' });  
        this.deleteDoctorTab = this.page.getByRole('tab', { name: 'Delete Doctor' });
        this.drDeleteEmail = this.page.locator('input.form-control:visible')
        this.deleteButton = this.page.locator('[name="docsub1"]')
    }
    async clickAddDoctorTab(){
        await this.addDoctorTab.click();
    }

    async deletedoctor(email){
        await this.deleteDoctorTab.click();
        await this.drDeleteEmail.fill(email);
        await this.page.on('dialog',async (dialog) => {
            console.log(dialog.message());
            await dialog.accept();
        });
        await this.deleteButton.click();
    }

}