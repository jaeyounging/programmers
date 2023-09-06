function solution(numbers) {
    return numbers.sort((a, b) => a - b).pop() * numbers.sort((a, b) => a - b).pop()
}