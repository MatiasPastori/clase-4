import Persona from './persona.js';
import Perro from './perro.js';
import Gato from './gato.js';
import Animal from './animal.js';

let myPerson = new Persona('Juan', 'Perez', 23, 1.8);

console.log(myPerson.saludar());


let myPerro = new Perro('Firulais', 'Chihuahua', 2);

let myCat = new Gato('Jack', 11, 'Siames');

console.log(myPerro.ladrar());
console.log(myPerro.speak());
console.log(myCat.getEdad());
console.log(myCat.getRaza());