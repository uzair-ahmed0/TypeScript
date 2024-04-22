"use strict";
/*6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
// // Store the person's name with whitespace characters
// const personName: string = "\t Uzair Ahmed \n";
// // Print the name with the whitespace
// console.log(`Original name (with whitespace): '${personName}'`);
// // Remove leading and trailing whitespaces using trim()
// const strippedName: string = personName.trim();
// // Print the name after stripping the whitespaces
// console.log(`Stripped name: '${strippedName}'`);
let person_name = "\t \n Uzair Ahmed\t \n";
console.log("WhiteSpace Person Name:", person_name);
let stripped_name = person_name.trim();
console.log("stripped Name:", stripped_name);
