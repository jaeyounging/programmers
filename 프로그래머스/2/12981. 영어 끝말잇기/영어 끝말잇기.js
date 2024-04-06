function solution(n, words) {
    let before = words[0];
    let turn = 1;
    
    for (let i = 1; i < words.length; i++) {
        const player = i % n + 1;
        
        if (before.slice(-1) !== words[i][0]) {
            return [player, turn];
        } else if (words.findIndex(item => words[i] === item) !== i) {
            return [player, turn];
        }
        
        if (player === n) {
            turn++;
        }
        
        before = words[i];
    }
    
    return [0, 0];
}