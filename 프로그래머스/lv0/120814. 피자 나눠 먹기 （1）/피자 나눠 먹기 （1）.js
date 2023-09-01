function solution(n) {
    if (n <= 7) {
        return 1
    } else {
        if (n % 7 === 0) {
            return n / 7
        } else {
            return parseInt(n / 7) + 1
        }
    }
}