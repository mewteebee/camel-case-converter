// write a function that turns a string from snake_case to camelCase

// 1. write function to locate index of underscore
// 2. extract string after underscore 
// 3. extract string before underscore
// 4. capitalise string after underscore 
// 5. concatenate strings without underscore

// test input: 
// 'underscore_case'

function camelCaseConverter(str){
    let snakeCaseStr = str.toLowerCase(); // underscore_case
    if(snakeCaseStr.includes('_')){ // true 
        let stringBeforeUnderscore = snakeCaseStr.slice(0, snakeCaseStr.indexOf('_')); // underscore
        let stringAfterUnderscore = (snakeCaseStr.slice((snakeCaseStr.indexOf('_') + 1), snakeCaseStr.length)); // case
        let stringAfterUnderscoreCapitalized = stringAfterUnderscore[0].toUpperCase() + stringAfterUnderscore.slice(1, (stringAfterUnderscore.length)); // Case
        return stringBeforeUnderscore + stringAfterUnderscoreCapitalized; // underscoreCase
    } else { // false
        return "Error, input must be snake_case.";
    }
}



// tests 
let x = "underscore_case";
let y = "first_name";
let z = "Some_Variable";
let j = "calculate_AGE";
let k = "delayed_departure";

console.log(camelCaseConverter(x)); // underscoreCase
console.log(camelCaseConverter(y)); // firstName
console.log(camelCaseConverter(z)); // someVariable
console.log(camelCaseConverter(j)); // calculateAge
console.log(camelCaseConverter(k)); // delayedDeparture



