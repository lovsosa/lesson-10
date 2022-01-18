// let createElement = function (text, callback) {
//     let element = $(`<li>`).text(text);

//     if (callback) {
//         callback(element)
//     } else {
//         return element
//     }
// };
// createElement(`Купить жилье`, function (task) {
//     $(`.long-term-tasks`).append(task);
// })

// setTimeout(function () {
//     console.log(`alo`);
// }, 2000)
// console.log(`код`);
// let counter = 0;
// let int = setInterval(function () {
// counter += 2;
// console.log(`сумма ` + counter);
// if(counter === 5) {
//     clearInterval(int);
// }
// }, 10000)
// let size = 16;
// let button = document.querySelector(`.button`);
// button.addEventListener(`click`, function () {
//     size += 2;
//     button.style.fontSize = size + `px`;
// });
// let button = $(`.button`);
// button.on(`click`, function () {
//     setInterval(function () {
//         size += 1000;
//         button.css(`font-size`, size + `px`);
//     }, 2000);



// 1 задание
let newclass = document.querySelector(`div.wrapper`)
newclass.style.display = `grid`

let task = document.querySelector(`form`).addEventListener(`submit`, function (e) {
  e.preventDefault();
  let element = document.createElement(`div`)
  let newelement = document.createElement(`span`);
  let close = document.createElement('span');
  close.innerHTML = `&times;`;
  close.className = 'close';
  element.classList.add(`alo`)
  close.style.marginLeft = `20px`
  close.style.cursor = `pointer`
  element.append(close);
  newelement.textContent = document.querySelector(`input.add-task`).value
  newclass.prepend(element)
  document.querySelector(`div.alo`).prepend(newelement)
});
newclass.addEventListener(`click`, function (event) {
  if(event.target.classList.contains('close')) {
    event.target.parentElement.remove();
  }
});



// 2 задание
// let timer = document.createElement(`span`)
// timer.innerHTML = min + ':' + time
// document.querySelector(`.wrapper`).append(timer)
// let time = 0;
// let min = 0;
// setInterval(function () {
//   time++
//   // console.log(min + `:` + time);
//   if (time === 60) {
//     time = 0;
//     min++
//   }
// }, 1000);
