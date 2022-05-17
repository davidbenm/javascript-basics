var message = prompt("Write your message here: ");

charactersWritten = message.length;
charactersRemaining = 140 - charactersWritten;

alert("You have written " + charactersWritten + " characters, you have" + charactersRemaining + " characters left");