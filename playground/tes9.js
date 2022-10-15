// const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => {return `${name}`});
// console.log(newArray);

// const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
// console.log(truthyArray);

// // const students = [
// //     {
// //       name: 'Harry',
// //       score: 60,
// //     },
// //     {
// //       name: 'James',
// //       score: 88,
// //     },
// //     {
// //       name: 'Ron',
// //       score: 90,
// //     },
// //     {
// //       name: 'Bethy',
// //       score: 75,
// //     }
// //   ];

// //   const eligibleForScholarshipStudents = students.filter((students) => students.score > 85);
// //   console.log(eligibleForScholarshipStudents);

//   const students = [
//     {
//       name: 'Harry',
//       score: 60,
//     },
//     {
//       name: 'James',
//       score: 88,
//     },
//     {
//       name: 'Ron',
//       score: 90,
//     },
//     {
//       name: 'Bethy',
//       score: 75,
//     }
//   ];
  
//   const totalScore = students.reduce((acc, student) => acc + (student.score > 80 ? student.score : 0), 0)
//   console.log(totalScore);

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];

const greatAuthors = books.filter((book) => book.sales > 1000000).map(
    (book) => { 
        return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`
        }
    );
console.log(greatAuthors);