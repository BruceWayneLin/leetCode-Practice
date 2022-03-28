module.exports = class easy {
    //1. question two sum 
    calculateTwoSum() {
        // two sums
        const twoSum = (nums, target) => {
            const map = new Map();

            for (let i = 0; i < nums.length; i++) {
                //literate all numbers in array and minus target
                const diff = target - nums[i];
                //get number and we check exists in array 
                if (map.has(diff)) {
                    //if diff number exists we return number and array
                    return [map.get(diff), i];
                }

                map.set(nums[i], i);
            }

            return [];
        };
        console.log(twoSum([1, 3, 5, 2, 4], 9));
    }

    //2. question reverse string 
    // Write a function that takes a string as input and returns the string reversed.
    // Example: Given s = "hello", return "olleh".
    reverseString(s) {
        s = 'helloplayer';
        var result = "";
        var ary = s.split("");
        for(var i = 0, max = (ary.length-1)/2 ; i < max ; i++){
            var temp = ary[i];
            ary[i] = ary[ary.length - 1 - i];
            ary[ary.length - 1 - i] = temp;

        }
        return ary.join("");
        // s = 'hello'
        // var result = ""; 
        // var ary = s.split(""); 
        // for(var i = ary.length-1 ; i >= 0 ; i--){
        //     result = result + ary[i]; 
        // }
        // console.log(result);
        // return result;
    };
}