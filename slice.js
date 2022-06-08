let message = prompt("Write your message. It can be only 13 charecters. If not 13 charecters then the message will be sliced.");
let count = message.length;

alert("Your message (only 13 charecters allowed):\n" + " " + message.slice(0,13))