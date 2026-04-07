import { test, expect } from '../Fixtures/patientloginFixture';
import PatientDashboardPage from '../Pages/PatientDashboardPage.js';
import appointmentData from '../Utils/AppointmentBooking.json';

test('Verify Appointment In Patient History', async ({ loginFixture }) => {
    const patientDashboardPage = new PatientDashboardPage(loginFixture);
    const row=await patientDashboardPage.VerifyAppointmentBookingInAppointmentHistory(
      appointmentData.booking.doctor,appointmentData.booking.date,"16:00:00");
      const rowData = await row.first().locator('td').allTextContents();
      const trimmedData = rowData.map(text => text.trim());
      expect(trimmedData).toContain(appointmentData.booking.doctor);
});