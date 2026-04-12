class AddDrPage {
    constructor(page){
        this.drName=page.getByRole('textbox', { name: 'doctor' });
        this.specialization=page.getByRole('combobox');
    }
}