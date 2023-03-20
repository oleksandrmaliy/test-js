// // function changeEven(numbers, value) {
// //   // Change code below this line
// //   const newNumbers = [...numbers];
// //   for (let i = 0; i < newNumbers.length; i += 1) {
// //     if (newNumbers[i] % 2 === 0) {
// //       newNumbers[i] = newNumbers[i] + value;
// //     }
// //   }
// //   return newNumbers;
// //   // Change code above this line
// // }

// // console.log(changeEven([1, 2, 3, 4, 5], 10)); //повертає новий масив `[1, 12, 3, 14, 5]`
// // console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // повертає новий масив `[12, 18, 3, 7, 14, 16]`
// // console.log(changeEven([17, 24, 68, 31, 42], 100)); // повертає новий масив `[17, 124, 168, 31, 142]`
// // console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //` повертає новий масив `[144, 13, 81, 192, 136, 154]`
// // console.log(changeEven([24, 5, 15, 23, 5], 5)); // буде [29,5,15,23,5]

// // const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // // Change code below this line
// // const planetsLengths = planets.map(planet => planet.length);

// // // console.log(planetsLengths);

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism"],
// //   },
// // ];
// // // Change code below this line

// // const genres = books.flatMap(book => book.genres);

// // console.log(books.flatMap);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// console.log("🚀 ~ file: script.js:127 ~ users:", users)
// console.log("🚀 ~ file: script.js:127 ~ users:", users)

// // Change code below this line
// const getSconsole.log();ortedFriends = users =>
//   console.log("🚀 ~ file: script.js:132 ~ getSortedFriends:", getSortedFriends)
//   console.log("🚀 ~ file: script.js:132 ~ getSortedFriends:", getSortedFriends)
//   console.log("🚀 ~ file: script.js:132 ~ getSortedFriends:", getSortedFriends)
//   [...users]
//     .map(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((userA, userB) => userA.name.localeCompare(userB.name));

// console.log(
//   [...users]
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((userA, userB) => userA.localeCompare(userB))
// );
// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction", "mysticism"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism", "adventure"],
// //   },
// // ];
// // // Change code below this line
// // const allGenres = books.flatMap(book => book.genres);
// // const uniqueGenres = allGenres.filter((genre, index, ) => allGenres.indexOf(genre) === index);

// // console.log(uniqueGenres);
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line
  blacklistedEmails = [];
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    const i =  this.blacklistedEmails.includes(email) ? true : false;
    return i;
  }
  // Change code above this line
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
