function solution(my_string, n) {
    let answer = [...my_string].map((item) => item.repeat(n)).join("")
    return answer;
}