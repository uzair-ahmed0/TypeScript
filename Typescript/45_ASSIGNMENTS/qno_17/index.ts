/* 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program*/

let guestList: string[] = ["Uzair", "Subhan", "Hashir"];

// Print Message
console.log(
  "Unfortunately! the new diner table wont arrive so we can invaite only 2 guest "
);

guestList.unshift("alice", "bob");

// Print message updated list
console.log("update list of guest", guestList);

// remove guest from list
while (guestList.length > 2) {
  let removeGuest: string | undefined = guestList.pop();
  if (removeGuest !== undefined) {
    console.log(`Sorry ${removeGuest}, we cant invite you`);
  }
}

// Print message 
guestList.forEach(guest => {
  console.log(`Dear ${guest}, you both are invited the dinner`);
  
});

//remove 2 name from the list 
guestList.slice(0, guestList.length)

// print updated list 
 console.log("updated list the guest []");
 