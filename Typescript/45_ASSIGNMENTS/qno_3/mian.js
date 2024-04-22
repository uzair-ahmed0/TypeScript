
Object.defineProperty(exports, "__esModule", { value: true });
//Strong the Person's name in a varibale 
var person_name = "Eric";
// printing the name in different cases 
var lowercasedString = person_name.toLowerCase();
var uppercasedString = person_name.toUpperCase();
console.log(lowercasedString, uppercasedString);
// show in titlecase
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1));
