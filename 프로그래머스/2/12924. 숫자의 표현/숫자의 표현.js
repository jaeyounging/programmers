function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) {
            answer++
        }
    }
    
    return answer;
}

// 자연수 n을 연속한 자연수들로 표현하는 방법의 개수는 n의 약수 중 홀수의 개수