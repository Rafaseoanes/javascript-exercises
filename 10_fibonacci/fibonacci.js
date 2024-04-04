const fibonacci = function (num) {
    parseInt(num)
    let fibSec = [0, 1]

    if (num < 0) {
        return "OOPS"
    } else {
        for (let i = 1; i <= num; i++) {

            fibSec[i + 1] = fibSec[i] + fibSec[i - 1]
        }

        return fibSec[num]
    }

};

// Do not edit below this line
module.exports = fibonacci;
