/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = ["FizzBuzz", "Fizz", "Buzz"]
    const result = [];
    let number = 1;
    while(number <= n){
        if(number % 3 == 0 && number % 5 ==0){
            result.push(answer[0]);
            number++;
        }
        else if(number % 3 === 0){
            result.push(answer[1]);
            number++;
        }
        else if(number % 5 == 0){
            result.push(answer[2]);
            number++;
        }
        else{
            result.push(String (number));
            number++;
        }
    }
    return result;
};

console.log(fizzBuzz(5));