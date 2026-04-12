export default class PatientLoginPage{

    constructor(page){
        this.page=page;
        this.patientEmillId=page.getByRole('textbox',{name:'enter email ID'});
        this.patientPassword=page.getByRole('textbox',{name:'enter password'});
        this.patientLoginButton=page.locator('#inputbtn')
    }

    async patientLogin(userName,password){
        await this.page.goto('http://localhost/hospital-management-system-master/index1.php');
        await this.patientEmillId.fill(userName);
        await this.patientPassword.fill(password);
        await this.patientLoginButton.click();
    }
}
