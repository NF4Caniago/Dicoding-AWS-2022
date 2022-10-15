const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorite = [...favorites, ...others]

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = [herFood, myFood];
console.log(myFood, herFood);
[myFood, herFood] = allFavorite;
console.log(myFood, herFood);

const [, , ,foot3] = favorites
console.log(foot3)

console.log(allFavorite);

const obj1 = {
    firstName: "obi-wan",
    age: 30
}

const obj2 = {
    lastName: "kenobi",
    gender: "M  "
}

const newObj = {...obj1, ...obj2}
console.log(newObj)
const {firstName : localFirstName, age : localAge, lastName : localLastName, gender : localGender, localIsMale = false} = newObj
console.log(localFirstName, localAge, localLastName, localGender, localIsMale)

// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
// }

// let firstName = "Afif";
// let age = 25;

// ({firstName, age} = profile);

// console.log(firstName)
// console.log(age)
