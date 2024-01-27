function solution(s) {
    const newS = s.split(" ").sort((a, b) => a - b);
    const answer = [];
    answer.push(newS[0])
    answer.push(newS[newS.length - 1])
    
    return answer.join(" ")
}