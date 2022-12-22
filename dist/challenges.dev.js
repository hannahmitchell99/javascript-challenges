"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
var numberPositiveResult = true;

var isNumberPositive = function isNumberPositive(numberTest) {
  if (numberTest > 0) {
    return numberPositiveResult = true;
  } else {
    return numberPositiveResult = false;
  }
};

console.log(isNumberPositive(-5)); // Write a function that takes a number of days and converts it into an age.

var convertDaysToAge = function convertDaysToAge(daysToConvert) {
  var calculatingDaysToAge = daysToConvert / 365;
  return calculatingDaysToAge;
};

console.log(convertDaysToAge(3650)); // Write a function that takes three numbers and returns the largest of the three numbers.

var getLargestNumber = function getLargestNumber(firstNumber, secondNumber, thirdNumber) {
  return Math.max(firstNumber, secondNumber, thirdNumber);
};

console.log(getLargestNumber(5, 7, 20)); // Write a function that takes an array of names and returns the last name from the array of names.

var getLastName = function getLastName(_ref) {
  var _ref2 = _toArray(_ref),
      args = _ref2.slice(0);

  var nameArray = _toConsumableArray(args);

  var lastName = nameArray[nameArray.length - 1];
  return lastName;
};

console.log(getLastName(['Nina', 'Raffie', 'Hannah']));
console.log(getLastName(['Mzo', 'Michael'])); // Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

var resultofChecking = true;

var allNumbersPositive = function allNumbersPositive(_ref3) {
  var _ref4 = _toArray(_ref3),
      args = _ref4.slice(0);

  var numbersChecked = _toConsumableArray(args);

  for (var i = 0; i < numbersChecked.length; i++) {
    if (numbersChecked[i] <= 0) {
      resultofChecking = false;
      break;
    }
  }

  return resultofChecking;
};

console.log(allNumbersPositive([1, -10, 13, 12, 19]));