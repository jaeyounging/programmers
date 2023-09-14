// 1. n을 소수 중 가장 작은 값인 2로 나눔
// 2. 만약 나눠진다면 결과값에 2 추가
// 3. 나눠지지 않는다면 나눌 값(소수)을 증가

function solution(n) {
    let divisor = 2;
    let primeNum = [];
    
    while (n >= 2) {
        if (n % divisor === 0) { 
            primeNum.push(divisor)
            n /= divisor
        } else {
            divisor++
        }
    }
    
    return [...new Set(primeNum)]
}