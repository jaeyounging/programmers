function solution(s) {
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    
    for (let i = 0; i < nums.length; i++) {
        let temp = answer.split(nums[i]) // ["", "4seveneight"]
        answer = temp.join(i) // 배열에서 문자열로
    }
  
    return Number(answer);
}