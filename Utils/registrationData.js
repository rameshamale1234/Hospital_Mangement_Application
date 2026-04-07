
import { faker } from '@faker-js/faker';

export function generateUserData() {
    return {
        firstName: faker.person.firstName(),   
        lastName: faker.person.lastName(),     
        email: faker.internet.email(),        
        phone: faker.phone.number('##########'), 
        password: faker.internet.password(8),
    };
}