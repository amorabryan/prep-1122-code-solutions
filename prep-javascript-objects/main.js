var person = {
  firstName: 'Tom ',
  lastName: 'Moreno ',
  hobby: 'gundam'
};

console.log(person);

const fullName = (person.firstName + person.lastName);
console.log("The person's name is:", fullName);

person.job = 'Parasailing';
console.log("This person's current job is:", person.job);

person.previousJob = 'Accountant';
console.log("This person's previous job is:", person.previousJob);

console.log('The complete person object', person);
