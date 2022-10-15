const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Blue langit"
spaceship["maxSpeed"] = 2000
console.log(spaceship)
spaceship.class = "Elit masbro"
console.log(spaceship)
delete spaceship.manufacturer
console.log(spaceship)
// spaceship = { name: "New Millenium Falcon" };
// console.log(spaceship)

// console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`)
// console.log(`Umur saya ${user.age} tahun`)
// console.log(`saya berasal dari ${user["homeworld"]}`)


//array


let myArray = ["cokelat", 42.5, 22, true, "programming"]
console.log(myArray[1])
console.log(myArray[5])
myArray.push("javascript")
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.shift()
console.log(myArray)
myArray.unshift("Banana")
console.log(myArray)
delete myArray[3]
console.log(myArray)
myArray.splice(3,1)
console.log(myArray)