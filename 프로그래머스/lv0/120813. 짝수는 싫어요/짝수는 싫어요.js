function solution(n) {
    let answer = []
    
    for (let i = 1; i <= n; i++) {
        answer.push(i)
    }
    
    answer = answer.filter((item) => {
        return item % 2 !== 0
    })
    
    return answer
}