function solution(my_string) {
    let sum = 0
    let num_arr = my_string.replace(/[^0-9]/g, "").split("").map(item => Number(item))
    
    num_arr.forEach(item => sum += item)  
    
    return sum
}