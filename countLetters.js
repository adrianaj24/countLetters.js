// function to return unique chars in string
function countLetters(string) {
// return an object of # instances of each letter in string
  var newString = string.split(" ").join("");
  var letterCount = {};
 // loop through string
  for (var i = 0; i < newString.length; i++) {
    var currentValue = newString[i];
    if (currentValue in letterCount) {
      letterCount[currentValue] += 1;
    } else {
      letterCount[currentValue] = 1;
    }
  }
  return letterCount;
}
console.log(countLetters("lighthouse in the house"));