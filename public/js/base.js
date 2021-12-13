const name = "Josué de Morais";
let name2 = "";
let personDefault = {
    name: "Josué de Morais",
    age: "21",
    work: "Product Owner"
}

let names = ["Josué de Morais", "Maria Silva", "Pedro Silva"]

let personEmptyList = [];

let persons = [
    {
        name: "Josué de Morais",
        age: "21",
        work: "Product Owner"
    },
    {
        name: "Maria Silva",
        age: "25",
        work: "UX/UI Designers"
    }
];

console.log("Initial value:")
console.log(name2);

name2 = "Samuel de Morais"

console.log("Altered value:")
console.log(name2);

function changeValue(){
    name2= "Maria Carla"
    console.log("Altered value:")
console.log(name2);
}

function receiveAndChangeName(newName){
    name2 = newName;
    console.log("Altered value receiving a name:")
    console.log(name2);
}

function printPerson(person){
    console.log("Name:");
    console.log(person.name);

    console.log("Age:");
    console.log(person.age);

    console.log("Work:");
    console.log(person.work);
};

function addPerson(person){
    person.push(person);
}

function printPersons() {
    console.log("==========PRINT PERSONS_____________")
    persons.forEach((item) => {
        //console.log("Name:");
        //console.log(person.name);

        //console.log("Age:");
        //console.log(person.age);

        //console.log("Work:");
        //console.log(person.work);

        console.log(item);
    })
}

addPerson({
    name: "Pedro Silva",
    age: "28",
    work: "Concierge"
});

//console.log(names);

console.log(persons);

//printPerson(personDefault);

//printPerson = {
    //name: "Samuel de Morais",
    //age: "22",
    //work: "Traveler"
//};

//receiveAndChangeName("José Silva");
//receiveAndChangeName("Maria Silva");

//changeValue();