const stock = {
    coffeeBeans: 250,
    water: 1000,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
 
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
        // coffee = "Kopi anda dingin";
        // callback(coffee);
    }, 3000);
}

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}

orderCoffee(coffee => {
    console.log(coffee);
})

checkStock()
    .then(handleSuccess)
    .catch(handleFailure);

const makeCoffee = () => {
    return new Promise(executorFunction);
}

const coffeePromise = makeCoffee();
console.log(coffeePromise);