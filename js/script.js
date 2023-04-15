const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 10);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});

const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// const date = new Date();
console.log(date.getTime()); // 1624021654154