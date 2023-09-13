// 1. 1부터 n까지의 자연수를 1과 n을 제외한 자연수로 나눔
// 2. 1과 n이 아닌 자연수로 나눠지면 set 객체에 넣어줌
// 3. set 객체의 개수를 반환

function solution(n) {
    const syntheticNum = new Set();
    
    for (let i = 1; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                syntheticNum.add(i)
            }
        }
    }
    
    return syntheticNum.size
}