const palindromes = function (word) {

    let cleanedText = word.toLowerCase().split('')

    for (let i = 0; i < cleanedText.length; i++) {
        let val = cleanedText[i];
        if (val == ' ' || val == ',' || val == '!' || val == '.') { // ERROR
            cleanedText.splice(i, 1);
            i--;
        }

    }

    let reversedWord = [...cleanedText]

    let finalText = reversedWord.reverse().join('').toLowerCase()

    // console.log(cleanedText, finalText)


    return finalText == cleanedText.join('')

};

// Do not edit below this line
module.exports = palindromes;
