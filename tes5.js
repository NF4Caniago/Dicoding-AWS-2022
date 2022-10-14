const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

let wrongMap = new Map();
wrongMap["Key"] = "value";
wrongMap["Key2"] = "value2";
console.log(wrongMap);
console.log(wrongMap.has("Key"));
console.log(wrongMap.delete("Key"));

const numberSet = new Set([1,4,6,4,1]);
numberSet.add([1,2,3]);
numberSet.add(10);
numberSet.add(1);
console.log(numberSet);