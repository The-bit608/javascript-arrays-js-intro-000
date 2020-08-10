var chocolateBars1 = "snickers"
var chocolateBars2 = "hundred grand"
var chocolateBars3 = "kitkat"
var chocolateBars4 = "skittles"
var chocolateBars = [chocolateBars1, chocolateBars2, chocolateBars3, chocolateBars4];

//var section end

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function removeElementFromBeginningOfArray(array) {
return(array.slice(1))
}
function removeElementFromEndOfArray(array) {
array.slice()
return(array)
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()
return(array)
}
function accessElementInArray(array, index) {
return(array[index])
}
function destructivelyRemoveElementFromEndOfArray(array) {
array.pop()
return array
}
