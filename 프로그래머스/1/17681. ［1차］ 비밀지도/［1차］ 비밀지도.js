function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        let binarySum = (arr1[i] | arr2[i]).toString(2); // 비트연산 후 이진수로 변환
        let result = binarySum.replace(/0/g, " ").replace(/1/g, "#"); // 0은 공백으로 1은 #으로 대체
        answer.push(result.padStart(n, " ")); // 자리수가 안 맞는 경우 앞에 공백 추가
    }
    
    return answer;
}