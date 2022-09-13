// console.log("Hello World!");

const personName = "John"

//Object
const person = {
    name: "John",
    age: 38,
    outfit: {
        hat: "Chanel",
        shirt: "Supreme",
        boots: "Nike"
    }
}


console.log(person.outfit)

///Tablica

const people = ['John', 'Joanna', 'Josh'] 

console.log(people[1])

//Funkcja

function przyklad(argument = 'roślinkami') {
    console.log("siemka")
    console.log("wykonuję się z:", argument)
    console.log("nara")
    return 'zwracam wartość z ' + argument
}

// przyklad('kwiatkami');
// przyklad();

// const zwrot = przyklad('arg')
// console.log(zwrot)

// console.log(console.memory)

// const dog{
//     voice: ()=>{
//         console.log('hał hał')
//     }
// }
// dog.voice();

const h1 = document.querySelector('h1')
// console.log(h1)

h1.innerHTML = "TEST"

let count = 0;
function counter() {
    count++;
    console.log(count)
}

h1.onclick = function () {
    counter()
}

//WARUNEK

let a = 50;

if (a < 2) {
    console.log("a jest mniejsze od 2")
} else {
    console.log("a nie jeset mniejsze od 2")
}