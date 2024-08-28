/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for(let i = 0; i < accounts.length; i++){
        let total = 0;
        for(let j = 0; j< accounts[i].length; j++){
            total = total + accounts[i][j];
        }

        if(total > maxWealth){
            maxWealth = total;
        }
    }

    return maxWealth;
};

let account1 = [[1,2,3],[3,2,1], [15,20,-6]];
console.log(maximumWealth(account1));