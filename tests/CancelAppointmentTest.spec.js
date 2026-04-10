import {test,expect} from '../Fixtures/patientloginFixture'
import PatientDashboardPage from '../Pages/PatientDashboardPage.js';
import cancelAppointmentData from '../Utils/CancelAppointMentData.json';

test.only('Appoint cancel test',async({loginFixture})=>{
    const patientDashboardPage = new PatientDashboardPage(loginFixture);
    const data = cancelAppointmentData[0];
    let row=await patientDashboardPage.CancelAppointment(data.drName,data.appointmentDate,data.appointmentTime)
}
)
