import { test,expect} from '../Fixtures/adminLoginfixture.js';
import ReceptionistPageDashBoardPage from '../Pages/ReceptionistPageDashBoardPage.js';
import AddDrPage from '../Pages/AddDrPage.js';
import addDrData from '../Utils/AddDrData.json';

test('Add Doctor Test', async ({ adminLoginfixture }) => {
    const receptionistPageDashBoardPage = new ReceptionistPageDashBoardPage(adminLoginfixture);
    await receptionistPageDashBoardPage.clickAddDoctorTab();
    const addDrPage = new AddDrPage(adminLoginfixture);
    await addDrPage.addDoctor(addDrData[0].drName, addDrData[0].specialization, addDrData[0].email, addDrData[0].password, addDrData[0].confirmPassword, addDrData[0].consultationFee);   
});
