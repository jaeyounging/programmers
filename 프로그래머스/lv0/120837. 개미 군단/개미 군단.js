// 1. 개미의 공격력이 큰 개미부터 배열에 넣은 후
// 2. 배열을 돌며 hp를 배열의 원소로 나누기

function solution(hp) {
    let ant_types = [5, 3, 1] // 개미의 공격력
    let count = 0 // 필요한 개미의 수
    
    ant_types.forEach((item) => {
        count += parseInt(hp / item)
        hp %= item
    })
    
    return count
}