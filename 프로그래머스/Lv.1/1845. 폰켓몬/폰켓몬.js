function solution(nums) {
    let set = new Set(nums);
    
    if (nums.length / 2 < set.size) {
        return nums.length / 2;
    } else {
        return set.size;
    }
}