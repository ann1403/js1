// завдання 1 з виконанням останнього else
let a = 1;
let b = 3;
let c = 8;
if (a > b) {
    console.log(a);
} else if (b > c) {
    console.log(b)
} else if (a > c) {
    console.log(c)
} else if ((a == c)) {
    console.log(a + c)
} else if (b == c) {
    console.log(b + c)
} else if (a < c) {
    console.log('завдання виконано')
}

//завдання 2 . масив з різними типами
let arr = [1, 'abc', true, 5, null]
console.log(arr);
console.log(arr[0]); // напечатает 'первый элемент'
console.log(arr[1]); // напечатает 'второй элемент'
console.log(arr[arr.length - 1]);