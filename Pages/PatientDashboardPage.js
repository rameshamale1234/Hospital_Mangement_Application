class PatientDashboardPage{

    constructor(page){
        this.page=page;
        this.welcomeMessage=page.locator('h3:visible');
        this.bookAppointmentLink=page.getByRole('link', { name: /Book Appointment/ });
        this.specializationDropdown=page.getByRole('combobox', { name: 'Specialization:' })
        this.doctorDropdown=page.getByRole('combobox', { name: 'Doctors:' })
        this.calender=page.locator('[name="appdate"]')
        this.appointmentTimeDropdown=page.locator('#apptime')
        this.bookButton=page.locator('[name="app-submit"]');
        this.appointMentHistoryTab=page.getByRole('tab', { name: 'Appointment History' })
        this.tableRows=page.locator('table tbody tr');

    }

    async bookAppointment(specialization, doctor,date,appointmentTime) {
        await this.bookAppointmentLink.click();
        await this.specializationDropdown.selectOption(specialization);
        await this.doctorDropdown.selectOption(doctor);
        await this.calender.fill(date);
        await this.appointmentTimeDropdown.selectOption(appointmentTime);
        this.page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
        });
        await this.bookButton.click();
        
    };

    async VerifyAppointmentBookingInAppointmentHistory(doctorName,AppointmentDate,AppointmentTime) {
    await this.appointMentHistoryTab.click();
    const row = this.tableRows
        .filter({ hasText:doctorName })
        .filter({hasText:AppointmentDate})
        .filter({hasText:AppointmentTime})
    return row;
    }
}



export default PatientDashboardPage;