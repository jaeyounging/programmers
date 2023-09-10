// 1. k-1번 만큼 배열 인덱스에 2를 더하며 공을 던짐
// 2. 인덱스 번호가 배열의 길이 이상이면 배열의 길이만큼 빼줌
// 3. 마지막으로 나온 배열의 인덱스의 원소를 반환

function solution(numbers, k) {
    let index = 0
    
    for (let i = 0; i < k - 1; i++) {
        index += 2
        
        if (index >= numbers.length) {
            index -= numbers.length
        }              
    }
    
    return numbers[index]
}