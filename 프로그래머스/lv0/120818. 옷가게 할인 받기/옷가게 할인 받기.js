function solution(price) {
    if (price < 100000) { // 10만원 이하인 경우
        return price
    }
    
    else if (price >= 100000 && price < 300000) { // 10만원 이상 30만원 미만인 경우
        return parseInt(price * 0.95)
    }
    
    else if (price >= 300000 && price < 500000) { // 30만원 이상 50만원 이하
        return parseInt(price * 0.9)
    }
    
    else {
        return parseInt(price * 0.8)
    }  
}