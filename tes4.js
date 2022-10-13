const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorite = [...favorites, ...others]
 
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