const namesFunction = require('./names');
const hobbiesFunction = require('./hobbies');

function createPerson() {
    const {firstName ,  lastName} = namesFunction('Damiano' , 'Mariscoli')
    const {hobbies} = hobbiesFunction('Reading', 'Painting', 'Cooking')
    const person = {
        firstName,
        lastName,
        hobbies
    }
    return person
 }
console.log(createPerson())