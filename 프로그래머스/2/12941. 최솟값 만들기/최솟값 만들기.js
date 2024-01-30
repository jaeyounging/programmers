function solution(A,B){
    let sortedA = A.sort((a, b) => a - b); // 오름차순 정리
    let sortedB = B.sort((a, b) => b - a); // 내림차순 정리
    let sum = 0;
    
    for (let i = 0; i < A.length; i++) {
        sum += sortedA[i] * sortedB[i];
    }
    
    return sum;
}