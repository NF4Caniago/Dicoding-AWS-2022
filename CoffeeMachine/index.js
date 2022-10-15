//const {coffeeStock, isCoffeeMachineReady}  = require('./state');
import {coffeeStock as stock, isCoffeeMachineReady} from "./state.js";

const makeCoffee = (type, miligrams) => {
   if (!isCoffeeMachineReady){
       return "Mesin belum siap"
    } else if (stock[type] >= miligrams) {
        return "Kopi Berhasil Dibuat!";
    } else {
        return "Biji Kopi Habis!";
    }
};

console.log(makeCoffee("robusta", 80));