const yo = "yoooo!!"

const bob = { // #233
    name: "Bob",
    age: 23,
    isStudent: true,
    friends: ["Ann","Dimon"]

}
// способы создания объектов
// new Object()
// Object.assign()
// Object.create()


let hey = yo;
hey = "hey"
console.log(yo) // "yoooo!!"
console.log(hey) //"hey"


const alex = bob // не создаст новый объект просто, скопирует ссылку на объект. мутация объкта
alex.name = "Alex"

console.log(bob)

/*
const a = {} //#456
const b = {} //#753

console.log(a === b) //false как разные автомобиле на конвеере, тк занимают разные ячейки памяти
*/

//создадим копию объкта боб
//const bobKeys = Object.keys(bob)
//console.log(bobKeys) //вернет массив ключей
//for (let i = 0; i < bobKeys.length; i++) {
//    copyBob[bobKeys[i]] = bob[bobKeys[i]]
// }

//// Object.assign()

//const copyBob = {...bob} // способ деструктуризация (раскукоживаем) берет новый объект засыпали старый
// Helga теперь в friends и здесь,тк массив это объект и ссыдосгыц тиа даннвх


const copyBob = {...bob, friends: [...bob.friends]} //старое friends переопрведеляется //теперь глубокая копия

console.log(copyBob)
console.log(bob === copyBob)
copyBob.name = "Bob"
console.log(copyBob)
console.log(bob)
bob.friends.push('Helga')
console.log(copyBob)
console.log(bob)
console.log(bob.friends===copyBob.friends) //false

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
    }
]

//const stToString = st => `Hi! i am ${st.name}. I have ${st.scores}`

function stToString(st) {
    return `Hi! i am ${st.name}. I have ${st.scores}`
}

const strings = students.map(stToString) //map преобразует исходный массив, и возвращает новый не мутируя старый!!!
// const strings = students.map(st => `Hi! i am ${st.name}. I have ${st.scores}`) то же самое с анонимной стрелочной функцией

console.log(strings)


const copyStudents = students.map(st => ({...st})) //получим новый массив с глубокой копией


console.log(copyStudents);

copyStudents.push( {
        name: "John",
        age: 19,
        isMarried: false,
    }
)

console.log(copyStudents);