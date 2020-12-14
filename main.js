// Задание 1
console.log('Задание 1')
let ovzi = prompt('Введите количество овец', [0]);
for (let i = 1; i <= ovzi; i++){
    console.log(i + ' овечка')
}
// Задание 2
console.log('Задание 2')
for (let i = 0; i <= 15; i++){
    if (i % 2 == 0) console.log(i + ' чётное')
    else console.log(i + ' нечётное')
}

// Задание 3
console.log('Задание 3')
for (let i = 0; i <= 8; i++) {
    if (i % 2 == 0) console.log(' # # # #')
    else console.log('# # # # ')
}

// Задание 4
console.log('Задание 4')
let numb = [9, -1, 5];
let array = '';
for(let i = 0; i < numb.length; i++) {
    array += numb[i] + ' ';
}
console.log(array);
for(let i = 0; i < numb.length; i++) {
    for(let j = numb.length; j >= i + 1; j--) {
       if(numb[j - 1] > numb[j]) {
           let a = numb[j];
           numb[j] = numb[j - 1];
           numb[j - 1] = a;
       } 
    }
}
array = '';
for(let i = 0; i < numb.length; i++) {
    array += numb[i] + ' ';
}
console.log(array);

// Задание 5
console.log('Задание 4')