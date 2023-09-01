const reverseString = function(text) {
   let character = "";
   for(let i = text.length -1; i >= 0; i-- ){
    character += text.charAt(i)
    }
   return character

};

// Do not edit below this line
module.exports = reverseString;
