function solution(cipher, code) {
    return [...cipher].map((item, index) => {
        return cipher[code * (index + 1)  - 1]
    }).join("")
}