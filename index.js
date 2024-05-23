// 1st. Get user input from a prompt
let flavors = prompt(
  'Order 6 froyo scoops. The available flavors are vanilla, strawberry, and coffee.'
);
console.log('Flavors:', flavors); // looks for a key whatever the prompt is

// 2nd. Take our prompt input and convert it to something more useful
//      Prompt input is a STRING
// Use String method called string.prototype.split(),
// which takes a string and converts it into an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// promptInput.split(',');
// this splits string into an array of flavors

const flavorsArray = flavors.split(',');
console.log(flavorsArray);

// 3rd. ARRAY to OBJ
// Loop through array
//     object[flavor] = assignedvalue
//     assign a key if it's not there and give it a value
//     if it is already there, we need to increment the count of how many by 1

// 4th. Print the object out
