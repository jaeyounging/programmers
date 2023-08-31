import math

def solution(numer1, denom1, numer2, denom2):
    answer = []
    num1 = denom2 * numer1 + denom1 * numer2 # 분자
    num2 = denom1 * denom2 # 분모
    gcd = math.gcd(num1, num2) # 분자와 분모의 최대공약수
    
    answer.append(num1 / gcd)
    answer.append(num2 / gcd)
    
    return answer