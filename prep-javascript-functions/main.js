function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}
var minutes = convertHoursToMinutes(2);
console.log('Minutes:', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var name = getGreeting('Bryan');
console.log('Greeting:', name);

function addMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addMultiplyBy5Result = addMultiplyBy5(3, 5);
console.log('Add Multiply Result:', addMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(8, 5);
console.log('Multiply and Divide Result:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(3, 1);
console.log('Subtract Result:', subtractTwoNumbersResult);

function getCircleCircumfrerence(radius) {
  return (2 * Math.PI) * radius;
}
var getCircleCircumfrerenceResult = getCircleCircumfrerence(7);
console.log('Circumference:', getCircleCircumfrerenceResult);

function getFullName(firstname, lastname) {
  return firstname + lastname;
}
var getFullNameResult = getFullName('Bryan ', 'Amora');
console.log('Full Name:', getFullNameResult);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(8);
console.log('Cube Result: ', cubeResult);
