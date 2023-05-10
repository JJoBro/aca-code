console.log('the encryptor js file loaded');

const letters =     'abcdefghijklmnopqrstuvwxyz!?';
const encrypt_key = 'bcdefghijklmnopqrstuvwxyza?!';

function encrypt(text) {
let result = '';  
  
  for (let i = 0; i < text.lenght; i++) {
    let letter = text [i];
    let letterIndex = letters.indexOf(letter);
    
    if (lettersIndex < 0) {
      result += letter;
    }
    
    else{
      result += encrypt_key[letterIndex];
   }
 }
return result;

}




function decrypt(text) {
let result = '';  
  
  for (let i = 0; i < text.lenght; i++) {
    let letter = text [i];
    let letterIndex = letters.indexOf(letter);
    
    if (lettersIndex < 0) {
      result += letter;
    }
    
    else{
      result += letters[letterIndex];
   }
 }
return result;
