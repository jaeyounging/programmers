function solution(s) {
    let answer = [0, 0];
    
    while (s.length > 1) {
      answer[1] += s.split("0").length - 1;
      s = s.replace(/0/g, "").length.toString(2);
      answer[0]++;
    }
    
    return answer
}