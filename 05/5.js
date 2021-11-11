const arr = [1, 56, 790, 10, 465, 32]

//пузырьковая сортировка bubble sort

for (let j = 0; j < arr.length - 1; j++) {  //повторно прогоняем цикл чтобы в конец сдвинуть остальные элементы повозрастанию
    for (let i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            /*     let temp = arr[i + 1] //меняем местами если не по возрастанию
                 arr[i + 1] = arr[i]
                 arr[i] = temp*/
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]] //тоже самое через деструктуризацию
        }
    }
}
console.log(arr) //теперь 790 в конце, всплыл как пузырек


//метод массива sort
//https://unicode-table.com/ сортировка по символам юникода
const names = ["Bob", "Alex", "Nick", "Donald", "Joe", "999", "!alex", "Юрий", "!юрий"]
console.log(names.sort())

const num = [1, 56, 790, 10, 465, 32, 100]
console.log(num.sort())

//compare function
const compFn = (a, b) => {
    if (a > b) {
        return 999 //если надо переставить вернуть любое положительнок число
    } else {
        return -2 //если не надо переставить вернуть любое отриц число
    }
}
console.log(num.sort(compFn))

/*
const compFn = (a, b) => a - b //таже логика вернет отрицательно если d больше и + если наоборот
*/

console.log(num.sort((a, b) => b - a)) //от большего к меньшему
console.log(num.sort((a, b) => b - a).reverse())

const sortNum = num.sort((a, b) => b - a)
const reversNum = num.sort((a, b) => b - a).reverse()
console.log(num === sortNum)
console.log(num === reversNum)


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

console.log(students.sort((a, b) => a.scores - b.scores).reverse()
) //цепочкой методы массива


console.log(students.sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1)) //ловер кейс не мутирует!!! это не присвоение
