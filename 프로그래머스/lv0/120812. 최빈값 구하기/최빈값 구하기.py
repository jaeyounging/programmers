def solution(array):
    count = [0] * (max(array) + 1) # 숫자의 개수를 셀 배열
    num = 0 # 최빈값의 개수
    
    for i in array:
        count[i] += 1
    
    for j in count:
        if j == max(count):
            num += 1
    
    if num > 1:
        return -1
    else:
        return count.index(max(count))
        
  