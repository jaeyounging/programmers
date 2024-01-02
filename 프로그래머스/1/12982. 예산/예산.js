function solution(d, budget) {
    let sum = 0;
    let answer = 0;
    
    d.sort((a, b) => a - b); // 오름차순 정렬
    
    d.forEach((item) => {
        sum += item;
        answer++; 
        
        if (sum > budget) {
            answer--;
        } 
    })
    
    return answer;
}