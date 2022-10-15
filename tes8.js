// function Mail() {
//     this.from = 'pengirim@dicoding.com';
//     this.sendMessage = function(msg, to){
//         console.log(`you send: ${msg} to ${to} from ${this.from}`);
//     }
// };

// // Mail.prototype.sendMessage = function(msg, to){
// //     console.log(`you send: ${msg} to ${to} from ${this.from}`);
// // };

// const mail1 = new Mail();
// mail1.sendMessage('hallo', 'penerima@dicoding.com');

// class Mail {
//     //#contacts = [];
//     constructor(){
//         this.from = 'pengirim@dicoding.com';
//         this._contacts = [];
//         this._yourOtherProperty = 'the values1';
//     };

//     sendMessage(msg,to,from){
//         console.log(`you send: ${msg} to ${to} from ${from}`);
//         this._contacts.push(to);
//     };
// }

// const mail1 = new Mail();
// mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');
// console.log(mail1.contacts);

// class Mail {
//     static isValidPhone(phone){
//         return typeof phone === "number";
//     }
// }

// console.log(Mail.isValidPhone(089000000000));

// class Mail {
//     constructor(author) {
//         this.from = author;
//         console.log('is instantiated', author);
//     };
// }

// const mail1 = new Mail(085000111222); // misalkan untuk SMS
// const mail2 = new Mail("emailku@dicoding.com"); // misalkan untuk Email

// class Mail{
//     constructor(author) {
//       this._contacts = [];
//       this.from = author;
//     }
   
//     sendMessage = function(msg, to) {
//       console.log('you send:', msg, 'to', to, 'from', this.from);
//       this._contacts.push(to);
//     }
   
//     showAllContacts() {
//       return this._contacts;
//     }
//   }

class Mail {
    constructor(author) {
      this.from = author;
      this._contacts = [];
    }
  
    sendMessage(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
      this._contacts.push(to);
    }
    
    showAllContacts() {
      return this._contacts;
    }
  }
  
  class WhatsApp extends Mail {
    constructor(username, isBusinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBusinessAccount = isBusinessAccount;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBusinessAccount ? 'Business' : 'Personal'}`;
    }
    sendMessage(msg, to) {
        super.sendMessage(msg,to);
        console.log('Send by WA');
    }
  }
  
  const wa1 = new WhatsApp('dicoding', true, '6281111111');
  console.log(wa1.myProfile());
  wa1.sendMessage("hai ini afif", "pacar")
  console.log(wa1.showAllContacts());
  console.log(wa1.from);