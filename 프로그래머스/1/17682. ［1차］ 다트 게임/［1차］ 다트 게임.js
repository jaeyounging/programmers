function solution(dartResult) {
    let score = [];
    let answer = 0;
    let temp = 0;

    for (let i = 0; i < dartResult.length; i++) {
      if (dartResult[i] >= 0 && dartResult[i] <= 9) { // 숫자인 경우
        if (dartResult[i] == 1 && dartResult[i + 1] == 0) { // 10인 경우
          temp = 10;
          i++;
        } else { // 10이 아닌 경우
          temp = dartResult[i];
        }
      } else if (dartResult[i] === "S") {
        score.push(temp);
      } else if (dartResult[i] === "D") {
        score.push(Math.pow(temp, 2));
      } else if (dartResult[i] === "T") {
        score.push(Math.pow(temp, 3));
      } else if (dartResult[i] === "*") {
        score[score.length - 1] *= 2;
        score[score.length - 2] *= 2;
      } else if (dartResult[i] === "#") {
        score[score.length - 1] *= -1;
      }
    }

    for (let i = 0; i < score.length; i++) {
      answer += Number(score[i]);
    }
    return answer;
}