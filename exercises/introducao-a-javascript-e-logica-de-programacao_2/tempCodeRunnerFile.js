let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = numbers[0];
for(i = 0; i < numbers.length; i += 1) {
    if (num < numbers[i - 1]) {
    num = numbers[i - 1];
    } else {
        //num = numbers[i];
    }
}
console.log(num);