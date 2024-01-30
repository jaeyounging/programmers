function solution(arr) {
    let sum = 0;
    
    arr.forEach(item => {
        sum += item;
    })
    
    return sum / arr.length;
}