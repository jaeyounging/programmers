// 문제 접근 방식
// 1. 원본 배열을 복사한 배열 생성
// 2. 복사한 배열을 내림차순으로 정리
// 3. 원본 배열의 값들이 복사한 배열의 어느 인덱스에 있는지 찾은 후 + 1

function solution(emergency) {
    let copy_emergency = [...emergency].sort((a, b) => b -a) // 스프레드 연산자로 배열 복사 후 내림차순 정렬
    
    return emergency.map((item) => { return copy_emergency.indexOf(item) + 1})
}