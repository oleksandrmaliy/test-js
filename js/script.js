// console.log('test'.charCodeAt(0));

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Знайшли число 3, перериваємо виконання циклу");
//       break;
//     }
//   }

//   console.log("Лог після циклу");

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// const value = 5;

// if (true) {
//   const value = 5;
//   console.log('Block scope: ', value); // 5
// }

// console.log('Global scope: ', value);

// if (true) {
//     const value = 5;
//     console.log("Block scope: ", value); // 5
//   }

//   console.log("Global scope: ", value);

//   const global = "global";

// if (true) {
//   const blockA = "block A";

// Бачимо глобальну + локальну A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

// Змінні blockB і blockC не знайдені в доступних областях видимості.
// Буде помилка звернення до змінної.
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
// const blockB = "block B";

// Бачимо глобальну + зовнішню A + локальну B
// console.log(global); // global
// console.log(blockA); // block A
// console.log(blockB); // block B

// Змінна blockC не знайдена в доступних областях видимості.
// Буде помилка звернення до змінної.
// console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

// Бачимо глобальну + локальну C
//   console.log(global); // global
//   console.log(blockC); // block C

// Змінні blockA і blockB не знайдені в доступних областях видимості.
// Буде помилка звернення до змінної.
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }

// Бачимо лише глобальну
// console.log(global); // global

// Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// Буде помилка звернення до змінної.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const er of string) {
//   console.log(er);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   // Якщо не збігається, то на цій ітерації нічого не робимо
// }

// console.log(message); // Клієнт з таким ім'ям є в базі даних!

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5

// const a = ["Mango"];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const words = ["JavaScript", "-", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1
// console.log(clients.length); // -1

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }
// const colors = ["red", "green", "blue"];

// colors.splice(10, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

// function multiply(x, y, z) {
//     console.log("Код до return виконується звичайним чином");

//     // Повертаємо результат виразу множення
//     return x * y * z;

//     console.log("Цей лог ніколи не виконається, він стоїть після return");
//   }

//   // Результат роботи функції можна зберегти у змінну
//   let result = multiply(2, 3, 5);
//   console.log(result); // 30

//   result = multiply(4, 8, 12);
//   console.log(result); // 384

//   result = multiply(17, 6, 25);
//   console.log(result); // 2550

// function getExtremeElements(array) {
//   // Change code below this line
//   const first = array[0];
//   const last = array[array.length - 1];
//   const array1 = [first, last];
//   return array1;
//   // Change code above this line
// }

// const result = getExtremeElements(['apple', 'peach', 'pear', 'banana']);
// console.log(result);

// function getExtremeElements(array) {
//   // Change code below this line
//   // const first = array[0];
//   // const last = array[array.length - 1];
//   const array1 = [array[0], array[array.length - 1]];
//   return array1;
//   // Change code above this line
// }

// const result = getExtremeElements(['apple', 'klbbjhv', 'peach', 'pear', 'banana']);
// // console.log(result);
// const message = `sadfsdf sdfadf safasdf wert gbhg bbvvcvc`;
// const pricePerWord = 30;
// let totalCost;
// // qwerty = message.split(` `);
//   totalCost = message.split(` `).length * pricePerWord;
// // return totalCost;
// console.log(message.length);
// console.log(totalCost);
// const title = `gggGGg KJjjhGG GfFrFgb JJHHGFDeeee`;
// let slug;
//   slug = title.toLowerCase().split(` `).join(`-`);

//   console.log(slug);
// const string = "The quick brown y fox jumped over the lazy dog";
// const words = string.split(` `);
// let longestWord = words[0];
// console.log(words);
// for (const word of words) {
//   if (word.length >= longestWord.length) {
//       longestWord = word;
//   }
// }

// console.log(longestWord);
