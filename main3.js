//событие
//генерируется объкт со сведениями о произошедшем событии (e-event)
//вызывается функция-обработчик (слушатель, подписчик)
//объкт со сведениями о произошедшем событии передается в качесиык параметра в обработчик

const sml = document.getElementById("small")
const mdm = document.getElementById("medium")
const big = document.getElementById("big")

/*const onClickHandler = (word) => {
    return () => alert (word)
}*/


/*sml.onclick = onClickHandler; //имя функции
sml.onclick = () => alert ("hey"); //литерал функции

sml.onclick = onClickHandler("hey"); //имя функции
mdm.onclick = onClickHandler("yyoy"); //тоже выведется

sml.onclick = null; //т е обработчик отсутствует*/


/*
const hey = () => alert ("HEY!!!addEventListener!!")

sml.addEventListener("click", onClickHandler("Yoo!!!addEventListener!!")) //можно несколько  повесить функций
sml.addEventListener("click", hey) //можно несколько повесить функций
sml.removeEventListener("click", hey )//удалить одну из ф

sml.onclick = () => {
    alert("HEEYYYY");
    alert("yoooooyyyyy!");
}
*/


/*
const onClickHandler = (e) => {
    console.dir(e)
}

const hey = () => alert ("HEY!!!addEventListener!!")
sml.addEventListener("click", onClickHandler) //onClickHandler({...})
mdm.onclick = hey // элементы сидят друг на друге поэтому вызвались обе ф
*/


/*const onClickHandler = (e) => {
    alert (e.currentTarget.id)
    console.dir(e)
}*/


//e.target -> элементб который сгенерировал соьытие (первый полустл клик)
//e.currentTarget -> элемент который вызапл обравотчик в процессе всплытия события


/*
const hey = () => alert ("HEY!!!addEventListener!!")
sml.addEventListener("click", onClickHandler, true) //поменяли всплытие на погружение
mdm.addEventListener("click", hey, true) //поменяли всплытие на погружение
*/

/*
sml.addEventListener("click", onClickHandler) //всплывающее событик
mdm.addEventListener("click", onClickHandler )
big.addEventListener("click", onClickHandler)*/

/*const onClickHandler = (e) => {  //версткозависемый тк использовали target вместо currentTarget
    alert (e.target.id)
    console.dir(e)
}*/


/*
sml.addEventListener("click", onClickHandler)

/!*const onClickHandler = (e) => {
    alert (e.currentTarget.id) //this
}*!/

function onClickHandler(e) {
    alert (this.id) //this  тоже дает currentTarget в стрелочных ф не работает
}

//this в момент вызова функции*/

/*
function onClickHandler(e) {
    if (e.target.tagName === "BUTTON"){ //при помощи target делигировали обработку событий родителю
        alert(e.target.name)
    }
}
sml.addEventListener("click", onClickHandler)*/

const onClickHandler = (e) => {
    /*    e.preventDefault() // предотвратить поведение по умолчанию ссылки(а) и форм(form)*/
    e.stopPropagation() //остановили распространение
    console.log(e.currentTarget.id)
}

sml.addEventListener("click", onClickHandler) //всплывающее событик
mdm.addEventListener("click", onClickHandler)
big.addEventListener("click", onClickHandler)