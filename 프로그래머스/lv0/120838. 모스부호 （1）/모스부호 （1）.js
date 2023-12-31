// 1. letter를 띄어쓰기 단위로 쪼갠 후 배열에 넣음
// 2. 배열을 돌며 객체에서 해당 키을 가지고 있는 값을 반환

function solution(letter) {
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    letter = letter.split(" ")
    
    return letter.map((item) => {
        return morse[item]
    }).join("")  
}