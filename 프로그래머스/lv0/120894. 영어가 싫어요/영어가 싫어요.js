// 1. 숫자로 대체할 문자열을 객체로 만듬
// 2. numbers 문자열을 replace 문자열 메소드로 돌며 숫자로 대체

function solution(numbers) {
    const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
    };
    
    numbers = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, item => obj[item])
    
    return Number(numbers)
}