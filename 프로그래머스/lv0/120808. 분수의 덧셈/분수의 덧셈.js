// 최대공약수를 구하는 함수
let gcd = (num1, num2) => {
    let result = 1
    
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            result = i
        }
    }
    
    return result
}

function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    
    answer.push(denom2 * numer1 + denom1 * numer2) // 분자 
    answer.push(denom1 * denom2) // 분모
    
    // 분자와 분모를 최대공약수로 약분
    return answer.map((item) => {
        return item / gcd(denom1 * denom2, denom2 * numer1 + denom1 * numer2)
    });
}