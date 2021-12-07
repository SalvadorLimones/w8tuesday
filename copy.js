/* Shallow copy vs Deep copy
Shallow copy: spread
Deep copy: Object.assign(), JSON */


const person = {
  firstName: "Armandina",
  lastName: "Atom"
};

// spread
let p1 = {
  ...person,
};

//Object.assign()
let p2 = Object.assign({}, person)

//JSON
let p3 = JSON.parse(JSON.stringify(person));

console.log(p1);
console.log(p2);
console.log(p3);

// ezek nem copy, csak a copiedPerson is ugyanoda mutat, mint a person:
let copiedPerson = person;
copiedPerson.firstName = "Richárd";
console.log(person);

let num = 1;
let copiedNum = num;

copiedNum = 2;
console.log(num, copiedNum);


let person2 = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
      street: 'North 1st street',
      city: 'San Jose',
      state: 'CA',
      country: 'USA'
  }
};

let copiedPerson2 = Object.assign({}, person2);
copiedPerson.firstName = "Richárd";

copiedPerson2.address.street = "példa utca";
console.log(person2, copiedPerson2);

let copiedPerson3 = JSON.parse(JSON.stringify(person2));

copiedPerson3.firstName = "Józsi";
copiedPerson3.address.street = "Fő utca";

console.log(person2, copiedPerson3);


