//Object Destructuring
// const person = {
//   name: 'John',
//   age: 19,
//   location: {
//     city: 'New York',
//     temp: 92
//   }
// };
//
// const { name, age} = person
//
// console.log(`${name} is ${age}.`)

//Array Destructuring
const address = ['1299 S Juniper Street', 'New York', 'New York', '11367']

const [street, city, state, zip] = address;
console.log(`You are in ${street} ${state}`)
