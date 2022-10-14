const { inspect } = require('util');

let visitsCountMap = new Map(); // Menyimpan daftar user
let visitsCountMap2 = new WeakMap();

function countUser(user) {
    let count = visitsCountMap2.get(user) || 1;
    visitsCountMap2.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;
//countUser(null);             // Data object "Jonas" dihapus
//console.log(visitsCountMap);
// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
   //console.log(visitsCountMap);
   console.log(inspect(visitsCountMap2, { showHidden: true }));
}, 10000)
