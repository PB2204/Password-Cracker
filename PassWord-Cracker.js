const MAX = 999999;
var pin = -1;

while (pin < 0 || pin > MAX) {
  pin = Number(prompt("What is your PIN from 0 to 999999? "));
}
console.log("Please wait...");

var choices = new Array(MAX+1); // allocate and array of size 10K
// initialize the array elements to equal the index
for (var i = 0; i < choices.length; i++) {
  choices[i] = i;
}

for (var tries = 1; choices.length > 0; tries++) {
  // guess index between 0 and choices.length - 1
  var guessIndex = Math.floor(Math.random() * choices.length);
  var guessValue = choices[guessIndex];
  if (guessValue === pin) {
    console.log(`Guessed PIN ${pin} in ${tries} tries.`);
    break;
  }
  console.log(`Trial ${tries}: tried the number ${guessValue}, guesses left ${choices.length}`);
  // remove guess from choices
  choices.splice(guessIndex, 1);
}

if (choices.length === 0) {
  console.log("Sorry, something went wrong, you should not see this!");
}
