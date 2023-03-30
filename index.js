function isPalindrome(word) {
  // Write your algorithm here
  // Convert the word to lowercase
  word = word.toLowerCase();

  // Remove all non-alphabetic characters using a regular expression
  word = word.replace(/[^a-z]/g, "");

  // Loop through the word, comparing the first and last characters, the second and second-to-last characters, and so on
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      // If any of the character pairs don't match, the word is not a palindrome
      return false;
    }
  }

  // If all character pairs match, the word is a palindrome
  return true;
}

/* 
  Add your pseudocode here
  The pseudocode describes the steps in the isPalindrome function. First, the input word is converted to lowercase to avoid issues with case sensitivity. Then, all non-alphabetic characters are removed from the word using a regular expression. Finally, the function loops through the word and compares each pair of characters,
   starting with the first and last characters and moving inward. If any pair of characters does not match, the function immediately returns false to indicate that the word is not a palindrome. If all pairs of characters match, the function returns true to indicate that the word is a palindrome.
*/

/*
  Add written explanation of your solution here
  First, we convert the input word to lowercase to avoid issues with case sensitivity.
Then, we remove all non-alphabetic characters using a regular expression. This ensures that the function only considers the letters in the word when checking for palindromes.
Finally, we loop through the word and compare the first and last characters, the second and second-to-last characters, and so on. If any of the character pairs don't match,
 we return false to indicate that the word is not a palindrome. If all character pairs match, we return true to indicate that the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
