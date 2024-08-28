/**
 * @param {number} num
 * @return {number}
 */
let numberOfSteps = function (num) {
    let value;

    let valueArray = [];
    while (num > 0){
        if (num % 2 == 0) {
            value = num / 2;
            valueArray.push(value);
        } else {
            value = --num;
            valueArray.push(value);
        }
        num = value;

    } 


    return valueArray.length
};

console.log(numberOfSteps(14))