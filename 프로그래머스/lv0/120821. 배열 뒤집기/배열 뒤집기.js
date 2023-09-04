function solution(num_list) {
    let answer = []
    
    num_list.forEach((item) => {
        answer.unshift(item)
    })
 
    return answer;
}