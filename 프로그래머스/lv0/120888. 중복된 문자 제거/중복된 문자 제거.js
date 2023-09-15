// 1. my_string 문자열을 배열로 쪼갬
// 2. 쪼갠 배열을 Set 객체에 넣어 중복 제거
// 3. join()을 이용해 배열을 문자열로 반환

function solution(my_string) {  
    return [...new Set(my_string.split(""))].join("")
}