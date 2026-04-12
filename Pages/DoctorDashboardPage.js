export default class DoctorDashboardPage {
    constructor(page) {
        this.page = page;
        this.welcomeMessage = page.locator('h3:visible'); 
        this.appointMentTab = page.getByRole('tab', { name: 'Appointments' });
        this.rows = page.locator('table tbody tr');
    }

    async getWelcomeMessage() {
        return await this.welcomeMessage.textContent();
    }

    async VerifyAppointmentIsCreated(pid, email) {
        await this.appointMentTab.click();
        const row = this.rows.filter({ hasText: pid })
        .filter({ hasText: email });
        return row;
    }

}