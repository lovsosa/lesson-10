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
// let newclass = document.querySelector(`div.wrapper`)
// newclass.style.display = `grid`

// let task = document.querySelector(`form`).addEventListener(`submit`, function (e) {
//   e.preventDefault();
//   let element = document.createElement(`div`)
//   let newelement = document.createElement(`span`);
//   let close = document.createElement('span');
//   close.innerHTML = `&times;`;
//   close.className = 'close';
//   element.classList.add(`alo`)
//   close.style.marginLeft = `20px`
//   close.style.cursor = `pointer`
//   element.append(close);
//   newelement.textContent = document.querySelector(`input.add-task`).value
//   newclass.prepend(element)
//   document.querySelector(`div.alo`).prepend(newelement)
// });
// newclass.addEventListener(`click`, function (event) {
//   if(event.target.classList.contains('close')) {
//     event.target.parentElement.remove();
//   }
// });



// 2 задание
// let random = Math.floor(Math.random() * 20 + 1);
// console.log(random);
// let time = 0
// setInterval(function () {
//   time++
//   if (time === 1) {
//   time = 0
//   for (i = 0; i > 60; i++) {
//     console.log(random);
//   }
// }
// }, 1000);




// 3 задание 
// timer.innerHTML = min + ':' + time
// let wrap = document.querySelector(`.stop`)
// document.querySelector(`.wrapper`).append(timer)

// let timer = document.createElement(`span`)
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

// wrap.addEventListener(`click`, function () {
// if (target.classList.contains(clearInterval())) {

// }
// }

let timimg = $('.time');
let btnStart = $('.btn-start');
let btnStop = $('.btn-stop');
let btnKrug = $('.btn-krug');

let sec = 0;
let min = 0;
btnStart.on('click', function () {
    let interval = setInterval(function() {
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
    let time = $('.time').text(min + " : " + sec);
    time.css({
        fontSize: '36px',
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:'55px'
    })
    
    }, 1000);
    btnStart.off();
    btnStop.on('click', function () {
        clearInterval(interval);
        sec = 0;
        min = 0;
    });
    btnKrug.on('click', function() {
        let liElement = $('<li>');
        liElement.addClass('btn-krug')
        liElement.text(min + ':' + sec)
        $('.list').append(liElement);
    });
    
});