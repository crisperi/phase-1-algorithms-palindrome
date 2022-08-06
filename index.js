function isPalindrome(text) {
  // Write your algorithm here
  //reverse the input string 
  //if the reversed string is the same as the input 
  // return true
  //else
  //return false

//reverse the input string 
const reverseWord = reverseString(word);

//if the reversed string === input
if (word === reverseWord){
  return true;

}else {
  return false;
}

}



/* 
  Add your pseudocode here

*/
function reverseString(word){
  //TODO : implement string reversing functionality
const wordArray = word.split("");

const reversedWordArray = wordArray.reverse();

const reversedWord = reversedWordArray.join("");


  return reversedWord;
}
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
console.log("Expecting : ih");
console.log("=>",reverseString("hi"));

console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
