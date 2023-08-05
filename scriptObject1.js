            //1
// ==========================================================================================
function Person (name, surname, age, birthYear){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.birthYear = birthYear;
}
let ivan = new Person('Ivan', 'Ivanovich', 19, 2004);
console.log(ivan);
for(let key in ivan) {
    if(ivan.hasOwnProperty(key)) {
        console.log(key)
        console.log(ivan[key])
    }
}
// ==========================================================================================