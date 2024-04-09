// 최대공약수
const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
        return gcd(b, a % b);
}
    
// 최소공배수 = (a * b) / 최대공약수
const lmd = (a, b) => {
    return (a * b) / gcd(a, b); 
}

function solution(arr) {
    let answer = 1;
    
    for (let i = 0; i < arr.length; i++) {
        answer = lmd(answer, arr[i]);
    }    
    return answer;
}