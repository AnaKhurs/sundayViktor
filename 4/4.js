const todoListID_1 = "23ir-67nb"
const todoListID_2 = "56ir-99nb"

const todoLists = [
    {
        id: todoListID_1, //"23ir-67nb"
        title: "What to learn",
        filter: "all",
    },
    {
        id: todoListID_2, //"56ir-99nb",
        title: "What to buy",
        filter: "all",
    },
]

const tasks = {
    [todoListID_1]: [ //"23ir-67nb"
        {id: 'hfd778', title: "HTML", isDone: true},
        {id: 'hfd779', title: "CSS", isDone: true},
        {id: 'hfd780', title: 'React', isDone: true},
    ],
    [todoLists[1].id]: [ //"56ir-99nb"
        {id: 'jkf689', title: "Meat", isDone: true},
        {id: 'jkf690', title: "Beer", isDone: true},
        {id: 'jkf691', title: "Milk", isDone: true},
    ]
}

console.log(tasks[todoListID_1].filter(t => t.id !== 'hfd778'))
console.log({...tasks, [todoListID_1]: tasks[todoListID_1].filter(t => t.id !== 'hfd778')})//повторное объявнение свойства затирает старое значание
console.log({...tasks, [todoListID_1]: [...tasks[todoListID_1], {id: 'hfd781', title: 'redux', isDone: true}]})//новая таска

console.log(typeof tasks)
console.log(Array.isArray(tasks[todoListID_1]))


//reduce
const number = [1, 2, 3, 4]

console.log(number.reduce((acc, el) => acc + el, 0))
console.log(number.reduce((acc, el) => acc > el ? acc : el)) //max min

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
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
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc + el.scores, 0)) //сложили элементы

console.log(students.reduce((acc, el) => {
    if (el.scores >= 100) {
        acc.push(el)
    }
    return acc
}, [])) //отфильтровали студентов

console.log(students.reduce((acc, el) => {
    if (el.name === "Nick") {
        let copyNick = {...el, isMarried: true}
        acc.push(copyNick)
        return acc
    }
    acc.push(el)
    return acc
}, [])) //промапили студентов и поженили ника