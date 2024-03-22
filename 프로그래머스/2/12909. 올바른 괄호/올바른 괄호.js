function solution(s){
    let stack = [];

    s.split("").forEach((item) => {
        if (item === ")" && stack[stack.length-1] === "(") {
            stack.pop();
        } else {
            stack.push(item);
        }
    });
    
    return stack.length > 0 ? false : true;
}