import{test,expect} from '../Fixtures/doctorloginfixture';
const {RegistrationPage} = require('../Pages/RegistrationPage');
const {DoctorDashboardPage} = require('../Pages/DoctorDashboardPage');
import appointmentData from '../Utils/AppointmentBooking.json';
import patientData from '../Utils/patienDetailsForVerifyAppointementInDrDashBoard.json';

test('Verify Appointment In Doctor Dashboard', async ({ doctorLoginFixture }) => {
    const registrationPage = new RegistrationPage(doctorLoginFixture);
    const doctorDashboardPage = new DoctorDashboardPage(doctorLoginFixture);
    for (const { email, pid } of patientData) {
        const rows = await doctorDashboardPage.VerifyAppointmentIsCreated(pid, email);
        const rowData = await rows.first().locator('td').allTextContents();
        const trimmedData = rowData.map(text => text.trim());
        expect(trimmedData).toContain(pid);
        expect(trimmedData).toContain(email);
    }
    
});

