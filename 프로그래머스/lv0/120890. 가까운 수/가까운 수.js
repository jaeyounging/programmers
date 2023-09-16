function solution(array, n) {
    let diff = 99
    let result = 0
    
    array.sort((a, b) => a - b).forEach(item => {
        if (Math.abs(item - n) < diff) {
            diff = Math.abs(item - n)
            result = item        
        }
    })
    
    return result
}