// class ValidationError extends Error {
//     constructor(message){
//         super(message);
//         this.name = "Validation Error";
//     }
// }

// let json = '{ "name": "Yoda"}';
 
// try {
//     let user = JSON.parse(json);

//     if (!user.name){
//         throw new ValidationError("Name is required");
//     }

//     if (!user.age){
//         throw new ValidationError("Age is required");
//     }
    
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     if (error instanceof SyntaxError){
//         console.log(`JSON Error: ${error.message}`);
//     } else if (error instanceof ValidationError){
//         console.log(`Invalid data : ${error.message}`)
//     } else if (error instanceof ReferenceError){
//         console.log(error.message);
//     } else {
//         console.log(error.stack);
//     }
// }
// console.log(typeof(1)==="number")

// TODO 1
class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
// TODO 2
const validateNumberInput = (a,b,c) => {
  if (!(typeof(a)==="number")){
    throw new ValidationError('Argumen pertama harus number');
  }
  if (!(typeof(b)==="number")){
    throw new ValidationError('Argumen kedua harus number');
  }
  if (!(typeof(c)==="number")){
    throw new ValidationError('Argumen ketiga harus number');
  }
}

const detectTriangle = (a, b, c) => {
  // TODO 3
  try{
	validateNumberInput(a,b,c);
  } catch (error) {
    return error.message;
  }
  
  
  if (a === b && b === c) {
    return 'Segitiga sama sisi';
  }

  if (a === b || a === c || b === c) {
    return 'Segitiga sama kaki';
  }

  return 'Segitiga sembarang';
};

console.log(detectTriangle("1","1",1));