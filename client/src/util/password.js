const letters= ['A','B','C','D','E','F','G',
                  'H','I','J','K','L','M','N',
                  'O','P','Q','R','S','T','U',
                  'V','W','X','Y','Z'];

const numbers = [0,1,2,3,4,5,6,7,8,9];

const symbols = ['`','~','!','@','#','$','%',
                  '^','&','*','(',')','-','_',
                  '=','+','[','{','}',']','\\',
                  '|','<',',','.','>','/','?' ];

// Returns a random upper case letter from the letters array.
const getRandomUpperCase = () => {
   return letters[Math.floor(Math.random() * letters.length)];
}

// Returns a random lowercase letter from the letters array
const getRandomLowerCase = () => {
   return letters[Math.floor(Math.random() * letters.length)].toLowerCase();
}

// Returns a random number 0-9 from the numbers array
const getRandomNumber = () => {
   return numbers[Math.floor(Math.random() * numbers.length)];
}

// Returns a random symbol from the symbols
const getRandomSymbol = () => {
   return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generates a random password of a certain length by randomly calling the above
// methods in an array.
const generatePassword = (length = 16, lower = true, upper = true, number = true, symbols = true) => {
   // Return an empty string if length is zero.
   if (randFunctionsArr.length === 0) return '';
   
   // Store selected methods in an array
   const randFunctionsArr = [];
   if (lower) randFunctionsArr.push(getRandomLowerCase);
   if (upper) randFunctionsArr.push(getRandomUpperCase);
   if (number) randFunctionsArr.push(getRandomNumber);
   if (symbols) randFunctionsArr.push(getRandomSymbol);
   
   // Call a random function from the above array 'length' times 
   // and concat result to string.
   let password = '';
   for (let i = 0; i < length; i++) {
      password += randFunctionsArr[Math.floor(Math.random() * randFunctionsArr.length)]();
   }
   return password;
}

module.exports = {
   generatePassword
}
