// 1. 가위바위보의 결과값을 가지고 있는 객체 생성
// 2. rsp의 문자열을 문자 단위로 배열에 넣기
// 3. 배열을 돌며 해당 키를 가지고 있는 값 리턴
// 4. 리턴 한 배열을 문자열로 전환

function solution(rsp) {
    const result = {
        0: 5,
        2: 0,
        5: 2,
    }
    
    return [...rsp].map((item) => {
       return result[item]
    }).join("")
}