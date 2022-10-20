// class NetworkError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = 'NetworkError';
//     }
//   }
  
//   // TODO: 1
//   const fetchingUserFromInternet = (isOffline) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if (isOffline) {
//           reject(new NetworkError('Gagal mendapatkan data dari internet'));
//         }
//         resolve({ name: 'John', age: 18 });
//       }, 500);
//     });
//   };
  
  
//   // TODO: 2
//   async function gettingUserName(){
//     isOffline = true;
//     try{
//         const user = await fetchingUserFromInternet(isOffline);
//         console.log(user.name);
//         return user.name;
//     } catch (rejectedReason) {
//         console.log(rejectedReason);
//         return rejectedReason;
//     }
//   };
  
//   gettingUserName();

let myString = "";

try {
    myString += "a";
    throw Error();
} catch(e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error();
    myString += "d";
}

console.log(myString);