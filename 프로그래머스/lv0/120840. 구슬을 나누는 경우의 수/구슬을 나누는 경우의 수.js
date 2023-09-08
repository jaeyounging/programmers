// 1. 재귀함수를 이용해 팩토리알을 계산하는 함수 작성
// 2. 팩토리알 함수를 이용해 공식 계산

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
}

function factorial(n) {
    if (n < 0) { // n이 음수이면
        return "error"
    } else if (n === 0 || n === 1) { // n이 0 또는 1이면
        return 1
    } else {
        return n * factorial(n - 1)
    }
}