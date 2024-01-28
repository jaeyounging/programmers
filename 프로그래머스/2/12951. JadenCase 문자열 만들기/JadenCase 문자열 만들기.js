function solution(s) {
  let splitedS = s.split(" "); // 띄어쓰기를 기준으로 문자열을 배열로 변환
  let answer = splitedS.map((item) => {
    return item.charAt().toUpperCase() + item.slice(1).toLowerCase();
  }); // 문자열의 첫번째 문자는 대문자로, 나머지 문자열은 소문자로 변환 후 리턴

  return answer.join(" ");
}
