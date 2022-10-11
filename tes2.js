let x = 70
if (x > 90) {
    console.log("kurang woi")
} else {
    console.log(`nilai lu ${x}, ampas annying`)
}

let pintar = false
const beasiswa = pintar ? 300 : 0
console.log(`lu dapet beasiswa sebesar ${beasiswa}`)

//Truthy & Falsy

let nama = ""

if (nama) {
    console.log("hai afif")
} else {
    console.log("kosong anyingg")
}

let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);

for (let i = 5; i > 0; i--){
    console.log(i)
}

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}