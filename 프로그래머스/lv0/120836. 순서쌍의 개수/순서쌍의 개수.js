// 주어진 숫자의 약수의 개수를 구함

function solution(n) {
    let count = 0
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0)
            count++
    }
    
    return count
}