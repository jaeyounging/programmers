// 1. direction이 right인 경우 배열의 마지막 원소를 뽑아 배열의 앞에 붙임
// 2. direction이 left인 경우 배열의 첫 번째 원소를 뽑아 마지막에 붙임

function solution(numbers, direction) {
    if (direction === "right") {
        numbers.unshift(numbers.pop())
        return numbers
    } else {
        numbers.push(numbers.shift())
        return numbers
    }
}