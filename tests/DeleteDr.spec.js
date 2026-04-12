import {test,expect} from '../Fixtures/adminLoginfixture.js';
import ReceptionistDashBoardPage from '../Pages/ReceptionistDashBoardPage.js';
import DeleteDrEmail from '../Utils/DeleteDrEmail.json';

test('Delete Doctor', async ({ adminLoginfixture }) => {
    const receptionistDashBoardPage = new ReceptionistDashBoardPage(adminLoginfixture);
    const DrEmail = DeleteDrEmail[0].drEmail;
    await receptionistDashBoardPage.deletedoctor(DrEmail);
});