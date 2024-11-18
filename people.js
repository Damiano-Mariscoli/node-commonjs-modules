const namesFunction = require('./names');
const hobbiesFunction = require('./hobbies');

function createPerson() {
    const name = namesFunction('Damiano' , 'Mariscoli')
    const {hobbies} = hobbiesFunction('Reading', 'Painting', 'Cooking')
    const person = {
        name,
        hobbies
    }
    return person
 }
console.log(createPerson())