///    1

// let clock = () => {
//     let date = new Date()
//     let month_num = date.getMonth()
//     let day = date.getDay()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//     console.log(month_num)
//     console.log(day)

//     if (day <= 9) day = "0" + day;
//     if (hours <= 9) hours = "0" + hours;
//     if (minutes <= 9) minutes = "0" + minutes;
//     if (seconds <= 9) seconds = "0" + seconds;
    
//     let date_time = 'second' + ' - ' + seconds + "min" + " - " +minutes;
//     console.log(date_time);
//     setTimeout(() =>{
//         clock();
//     }, 1000);
// }
// clock()


// 

let clock = () => {
    let date = new Date()
    let month_num = date.getMonth()
    let day = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let a = date.getDate()

    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

let month = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];
// let date_time = month_num;
// console.log(month[month_num]);


let date_time = 
"Now" +
" " +
hours +
":" +
minutes +
":" +
seconds +
" " +
a +
"-" +
month[month_num];

// console.log(date_time);
let element = document.getElementById('time')

element.innerHTML = date_time

setTimeout("clock()", 1000);

};
clock()
























///  1000 = 1c