module.exports = class easy {
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
}