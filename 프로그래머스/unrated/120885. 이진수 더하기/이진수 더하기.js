function solution(bin1, bin2) {
    let sum = parseInt(bin1, 2) + parseInt(bin2, 2);
    let answer = sum.toString(2);
    
    return answer;
}