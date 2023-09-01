// function solution(n) {
//     let answer = []
    
//     for (let i = 1; i <= n; i++) {
//         answer.push(i)
//     }
    
//     answer = answer.filter((item) => {
//         return item % 2 !== 0
//     })
    
//     return answer
// }


const solution = (n) => {
    let answer = []
    
    for (let i = 1; i <= n; i += 2) {
        answer.push(i)
    }
    
    return answer
}