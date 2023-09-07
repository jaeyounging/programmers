// 숫자의 각 자리수를 배열에 넣는 방법
// 1. 숫자를 문자열로 변환 toString()
// 2. 문자열을 문자 단위로 분리 split("")
// 3. 분리한 문자를 배열에 추가

function solution(age) {
    const age_chart = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"] // 0 ~ 9
    const age_list = age.toString().split("")
    
    return age_list.map((item) => {
        return age_chart[parseInt(item)]
    }).join("")
    
    ;
}