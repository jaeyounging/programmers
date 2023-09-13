const factorial = (num) => {
    if (num === 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

function solution(n) {
    for (let i = 1; i <= 10; i++) {
        if (n === factorial(i)) {
            return i
        } else if (n < factorial(i)) {
            return i - 1
        }
    }
}

