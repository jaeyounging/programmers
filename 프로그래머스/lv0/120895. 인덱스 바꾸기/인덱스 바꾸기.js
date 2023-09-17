// 1. 문자열을 배열로 쪼갠 다음 인덱스 바꾸기

function solution(my_string, num1, num2) {
    my_string = my_string.split('');
	[my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
	return my_string.join("");
}