export default class ReceptionistPageDashBoardPage{
    constructor(page){
        this.page = page;
        this.addDoctorTab = this.page.getByRole('tab', { name: 'Add Doctor' });  
    }
    async clickAddDoctorTab(){
        await this.addDoctorTab.click();
    }

}