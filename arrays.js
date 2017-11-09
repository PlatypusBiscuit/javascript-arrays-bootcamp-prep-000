var ChocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}
function addElementToBeginningOfArray(array, element) {
  return [...array, element];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.push(element);
}
