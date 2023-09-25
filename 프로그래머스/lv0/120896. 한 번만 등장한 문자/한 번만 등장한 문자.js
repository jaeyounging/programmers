function solution(s) {
    const answer = []
    for (let i of s) {
        if (s.indexOf(i) === s.lastIndexOf(i)) { // 인덱스 값과 마지막 인덱스 값이 같으면 중복이 없다는 것
            answer.push(i)
        }
    }
    
    return answer.sort().join("")
}