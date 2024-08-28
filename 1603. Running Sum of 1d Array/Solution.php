class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function runningSum($nums) {
    
    for($x = 1; $x < count($nums); $x++){
        $nums[$x] = $nums[$x] + $nums[$x - 1];
    }

    return $nums;

}



}

$number = [1,2,3,4];

$newArray = new Solution();
print_r($newArray->runningSum($number));
