const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
};

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log('Memanaskan air...');
        setTimeout(() => {
            resolve("Kopi sudah Siap!");
        },2000);
    });
};

const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log('Menggiling biji kopi...');
        setTimeout(() => {
            resolve("Bubuk kopi sudah siap");
        });
    });
};

// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return checkStock();
//         })
//         .then((value) => {
//             console.log(value)
//             const promise = [boilWater(), grindCoffeeBeans()];

//             return Promise.all(promise);
//         })
//         .then(value => {
//             console.log(value);
//             state.isCoffeeMachineBusy = false;
//         })
//         .catch(rejectedReason => {
//             console.log(rejectedReason);
//             state.isCoffeeMachineBusy = false;
//         });
// }

async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
makeEspresso();