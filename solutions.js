/* 
Palindrome CheckerPassed

Este lo habia visto sinceramente por algún otro lado creo, y recordaba un poco la lógica que utilizaron para resolverlo
Pero como venía fresco de usar expresiones regulares se me ocurrió emplearlo para hacer más fácil la conversión.
el toLowerCase() fue lo que más me costó emplear porque no entendía qué era lo que estaba haciendo mal. A veces los ejercicios de FCC 
son bastantes exigentes en ese sentido y no perdonan ni un minimo error jaja

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case 
(lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/

function palindrome(str) {
    const newStr = str.replace(/[_\W]/g, '');
  
    return isPalindrome(newStr);
  }
  
  function isPalindrome(str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
  }
  
  
console.log(palindrome("eye")); // should return TRUE
console.log(palindrome("nope")); // FALSE
console.log(palindrome("almostomla")); // FALSE
console.log(palindrome("1 eye for of 1 eye.")); // FALSE
console.log(palindrome("0_0 (: /-\ :) 0-0")); // TRUE

/* 
Caesars Cipher

Para este ejercicio básicamente tuve que googlear los valores reales que eran del rot13 ascii y convertirlo en un str para poder pasar ese
valor a las palabras que estaban cifradas en la página. Fue muy divertido hacer este.

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {

    return str.replace(/[A-Z]/g, (word) => {
  
      let asciiNumber = word.charCodeAt(0) + 13
  
      if (asciiNumber > 90) {
        asciiNumber = asciiNumber % 90 + 64;
      }
      return String.fromCharCode(asciiNumber) 
    });
  }
  
  console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP

/*
Este es uno de los peores ejercicios que me tocó hacer en mi vida. Literal creo que voy a soñar con expresiones regulares y obviamente
me tuvo aproximadamente unas 3 horas mirando de atras para adelante y tirando millones de console.log's


Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the 
US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, 
you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

*/ 
  function telephoneCheck(str) {

    const re = /^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}[ ]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/g;
    // return str.match(re); este return era básicamente para matchear lo que me devuelve mi constante regex, la dejo en comment para recordar
    // lo mal que la pasé haciendo esto creo que ya me olvidé cómo funciona regex.
    return re.test(str);
  }

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("2 (757) 622-7382"));

/* 

Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Basicamente cree este objeto conver con las key y los valores de los numeros romanos, y al final creo mi resultado en un string 
itero por todo mi objeto dependiendo del valor que se le pase. Por ejemplo, 99, es mayor-igual que 1000? no, paso al siguiente, hasta que
lo encuentra: XC entonces lo manda adentro del string result y va a borrar el valor original, es decir, 90, así que me queda solamente un 9
(porque XC: 90. Entonces 99-9: 90) Ese 9 vuelve a iterar hasta que llega al IX nuevamente, y pasa lo mismo. 
Suponog que se puede hacer con un array, pero la mayoria de los ultimos ejercicios usaban mucho propiedades de objetos, como acceder a ellas
asi que directamente hice un objeto, me parecio lo mas rapido.
*/
const conver = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  function convertToRoman(num) {
    let result = '';
      for(let roman in conver) {
        while (num >= conver[roman]){
          num -= conver[roman];
          result += roman;
        }
      }
   return result;
  }
  
console.log(convertToRoman(36));
console.log(convertToRoman(1000));
console.log(convertToRoman(891));    

// El último ejercicio me resulta practicamente imposible hacerlo, así que lo dejaré para más adelante sinceramente.