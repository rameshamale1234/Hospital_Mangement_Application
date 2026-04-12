import{test,expect} from '../Fixtures/patientloginFixture';
import PatientDashboardPage from '../Pages/PatientDashboardPage.js';
import appointmentData from '../Utils/AppointmentBooking.json';

test('Book Appointment Test', async ({ loginFixture }) => {
    const patientDashboardPage = new PatientDashboardPage(loginFixture);
    const data=appointmentData.booking;
    await patientDashboardPage.bookAppointment(
        data.Specialization,
        data.doctor,
        data.date,
        data.time
    );

});
