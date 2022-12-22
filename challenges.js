//Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

let numberPositiveResult = true;
const isNumberPositive = (numberTest) =>{
    if (numberTest > 0){
        return numberPositiveResult = true
    } else {
        return numberPositiveResult = false
    }
}

console.log(isNumberPositive(-5));

// Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (daysToConvert) =>{
    const calculatingDaysToAge = daysToConvert/365;
    return calculatingDaysToAge;
}

console.log(convertDaysToAge(3650));

// Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber =(firstNumber, secondNumber, thirdNumber) => {
    return Math.max(firstNumber,secondNumber,thirdNumber);
}
console.log(getLargestNumber(5,7,20));

// Write a function that takes an array of names and returns the last name from the array of names.
const getLastName = ([...args]) =>{
   const nameArray = [...args];
   let lastName = nameArray[nameArray.length-1];
   return lastName;
}

console.log(getLastName(['Nina', 'Raffie', 'Hannah']));
console.log(getLastName(['Mzo', 'Michael']));

// Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

let resultofChecking = true;
const allNumbersPositive = ([...args]) => {
    let numbersChecked = [...args];
    for (let i =0; i < numbersChecked.length; i++){
        if(numbersChecked[i]<=0) {
            resultofChecking = false;
            break;
        } 
    }
    return resultofChecking;
}

console.log(allNumbersPositive([1,-10,13,12,19]));