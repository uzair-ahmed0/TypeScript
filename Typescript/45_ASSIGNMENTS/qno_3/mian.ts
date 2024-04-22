/*3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

//Strong the Person's name in a varibale
const person_name: string = "Eric";

// printing the name in different cases

const lowercasedString: string = person_name.toLowerCase();
const uppercasedString: string = person_name.toUpperCase();
console.log(lowercasedString, uppercasedString);

// show in titlecase
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1));
