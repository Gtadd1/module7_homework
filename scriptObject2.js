            //2
// ==========================================================================================
const person = {
    name: 'Artem',
    age: 20,
}
let stringOne = 'name';

function checkObject (str, obj) {
    let a = str;
    console.log(a);
    let b = obj;
    console.log(b);
    if(b.hasOwnProperty(a)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkObject(stringOne, person));
// ==========================================================================================