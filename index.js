// SyntaxError: Illegal return statement in JavaScript

// EXAMPLE 1 - Only use the return statement inside functions

// ✅ return inside named function
function getNum() {
  return 42;
}

// ✅ return inside arrow function
const example = () => {
  return 42;
};

// ✅ implicit return using arrow function
const another = () => 'bobbyhadz.com';

// ✅ implicitly return object from arrow function
const another2 = () => ({
  id: 1,
  site: 'bobbyhadz.com',
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Use the `break` statement if you need to exit a loop

// const arr = ['bobby', 'hadz', 'com'];

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);

//   if (arr[index] === 'hadz') {
//     // 👇️ exit the loop
//     break;
//   }
// }
