/**15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite. */

let guestList: string[] = ["Hashir", " Subhan", "Hasnian", "Uzair"];

// print the name who can't make dinner
let unableAttend: string = guestList.splice(1, 2)[0];

console.log(` ${unableAttend} cant make dinner`);

// push
guestList.push("Abdul Sami");

//print the message

guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited a dinner`);
    
    
});