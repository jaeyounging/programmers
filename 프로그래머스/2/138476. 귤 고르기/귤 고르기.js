function solution(k, tangerine) {
    let answer = 0;
    const dict = {};
    
    tangerine.forEach(item => {
        dict[item] = ++dict[item] || 1;
    })
    
    const arr = Object.values(dict).sort((a, b) => b - a);
    
    for (let i of arr) {
        answer++;
        if (k > i) {
            k -= i;
        } else {
            break;
        }
    }
    
    return answer;
}