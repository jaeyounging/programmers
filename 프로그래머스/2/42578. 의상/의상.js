function solution(clothes) {
  const clothesMap = {};
  let answer = 1;

  clothes.forEach((arr) => {
    const [type, name] = arr;

    if (clothesMap.hasOwnProperty(name)) {
      // 의상의 종류를 가지고 있다면
      clothesMap[name]++;
    } else {
      // 의상의 종류를 가지고 있지 않다면
      clothesMap[name] = 1;
    }
  });

  Object.values(clothesMap).forEach((item) => {
    answer *= item + 1;
  });

  return answer - 1;
}