/* function called lastElement, accepts a single array [] argument, 
function should return last element of the array, 
if array is empty the function should return null*/

function lastElement(array) {
  if (array.length === 0) {
    return null;
  }
  var lastPosition = array.length - 1;
  return array[lastPosition];
}
let array = [];
let array2 = [2, 6, 1, 7, 9];

console.log(lastElement(array));
console.log(lastElement(array2));
