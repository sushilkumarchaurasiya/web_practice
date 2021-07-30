var data;
var requests = [];
function takeInputFromButtons(arg) {
    requests.push(arg);
    data = arg;
    updateDisplay(data);
    console.log('total requests :',requests);
}

function updateDisplay(params) {
    var totalspan = document.getElementsByTagName('span');
    for (i=0; i<totalspan.length; i++){
        totalspan[i].textContent = params;
    }
    
}


var clr = setInterval(() => {
    console.log(requests[0]);
    updateDisplay(requests[0]);
    requests.shift(); 
}, 3000);















// var a=0;
// const inte = setInterval(function(){
//     console.log("hello",a);
//     updateDisplay(a);
//     if(a >= 12){
//         clearInterval(inte);
//     }
//     a++;
// },3000)

// updateDisplay(0);


// function addition(a,b) {
//     console.log(a+b);
// }

// addition(50,353)


// var num1 = 466;
// var num2 = 890;
// console.log(num1 + num2);

// var marks = {
//     ravi:9,
//     sonu:8,
//     manu:5
// }
// console.log(marks);

// var a = true;
// var b = false;
// console.log(a,b);

// var und;
// console.log(und);

// var n = null;
// console.log(n);

// var arr = [1,2,'sonu',3,4]
// console.log(arr);

// var a = 36;
// var b = 44;
// console.log("the value of a + b is" ,a + b);
// console.log("the value of a - b is" ,a - b);
// console.log("the value of a * b is" ,a * b);
// console.log("the value of a / b is" ,a / b);

// var c = b;
// c *= 10;
// console.log(c);

// var x = 25;
// var y = 29;
// console.log(x>=y);

// console.log(true||true);
// console.log(true||false);
// console.log(false||false);
// console.log(!false);
// function avg(a, b) {
//     c = (a+b)/2;
//     return c;
    
// }
// c1 = avg(4,8);
// c2 = avg(5,80);
// console.log(c1,c2);

// var age = 54;
// if(age < 38){
//     console.log('you are not a kid');
// }
// else if(age < 22){
//     console.log('boy');
// }
// else if(age < 8){
//     console.log('ox');
// }
// else if(age > 45){
//     console.log('red');
// }
// else {
//     console.log('yellow');
// }

// var arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if(i==2){
//         // break;
//         continue; 
//     }
//     console.log(arr[i])
    
// }

// arr.forEach(function(element) {
//     console.log(element);
    
// });

// let j = 5;
// while (j<arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// let myArr = ["fan","cooler",90,null,"for",true];
// console.log(myArr.unshift(14,52,85));
// myArr.pop();
// myArr.push("sonu");
// myArr.shift();
// myArr.unshift("sonu");
// console.log(myArr);

// let myLovelyString = "sonu is a good boy a a";
// console.log(myLovelyString.slice(1,3));
// console.log(myLovelyString.lastIndexOf("a"))
// d = myLovelyString.replace("sonu","rohan");
// console.log(d, myLovelyString);


// /let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());

// let elem = document.getElementsByTagName('span')
// console.log(elem);

// let elemClass = document.getElementsByClassName('col')
// console.log(elemClass);
// elemClass[0].classList.add("bg-primary");

// sel = document.querySelectorAll('.col')
// console.log(sel);

// window.onload = function () {
//     console.log('the doc is loaded');
    
// }

// function summ(a, b) {
//     return a+b;

// }

// summ = (a, b)=>{
//     return a+b;
// }



// logKaro = ()=>{
//     console.log("i am a good boy")
// }
// setTimeout(logKaro, 2000);


// setTimeout(() => {
//     console.log(89);
// }, 3000);


// clr = setInterval(() => {
//     console.log("i m a bad boy");
// }, 3000);