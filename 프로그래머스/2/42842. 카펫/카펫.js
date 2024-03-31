function solution(brown, yellow) {
    const TOTAL = brown + yellow;
    
    for (let height = 3; height < TOTAL; height++) {
        if (TOTAL % height === 0) {
            let width = TOTAL / height;
            
            if ((width - 2) * (height -2) === yellow) {
                return [width, height];
            } 
        }
    }
}