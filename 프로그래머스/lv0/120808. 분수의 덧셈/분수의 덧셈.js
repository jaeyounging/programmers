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
    let numer = denom2 * numer1 + denom1 * numer2 // 분자
    let denom = denom1 * denom2 // 분모
    
    return [numer / gcd(numer, denom), denom / gcd(numer, denom)] // 분자와 분모를 최대공약수로 약분
}