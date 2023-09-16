// 1. 매개변수로 받은 order를 쪼개서 배열에 저장
// 1-1. order % 10을 하면 order의 뒷자리부터 얻을 수 있음
// 1-2. Math.floor(order / 10)을 해 뒷자리를 추출 후 나머지 숫자 얻음
// 2. 배열을 돌며 3, 6, 9가 나오면 count + 1을 해줌

function solution(order) {
    let numArr = []
    let count = 0
    
    while (order > 0) {
        numArr.unshift(order % 10)
        order = Math.floor(order / 10)
    }
    
    numArr.forEach(item => {
        if (item === 3 || item === 6 || item === 9) {
            count ++
        }
    })
    
    return count
}