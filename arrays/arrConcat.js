const firstArray = [1, 2, 3, 4, 5];
const secondArray = [0, 6, 7, 8, 9];
const commonArray1 = firstArray.concat(secondArray);
const commonArray2=[...firstArray, ...secondArray];
console.log(commonArray1);
console.log(commonArray2);