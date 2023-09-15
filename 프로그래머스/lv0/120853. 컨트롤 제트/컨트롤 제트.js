// 1. 문자열을 돌면서 숫자가 나올 경우 arr 배열에 추가
// 2. "Z"가 나올 경우 arr 배열에서 맨 뒤의 값 제거

function solution(s) {
    const arr = []
    
    for (i of s.split(" ")) {
        i === "Z" ? arr.pop() : arr.push(i)
    }
    
    return arr.reduce((a, c) => {
        return a + +c
    }, 0)
}