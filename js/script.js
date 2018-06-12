console.log('script');

/* 09 06 2018 */ /*
var userName = prompt ('who are you?');

if (userName =='admin'){
    var userPass = prompt ('password');
 if ( userPass == 'qwerty'){
     alert('welcome')
 }
 else{
     alert('wrong password')
 }
} else {
    alert ('I don`t know you')
}

var counter = 1;

while( counter < 10) {
    document.write(counter + '<br/>')
    counter++;
}

var counter = 1;

for ( var i = 0; i < 10; i++) {
    console.log(i);
    if(i == 2){
        console.log('hello')
    }
    
}

for ( var i = 2; i<= 10; i++){
    if(i % 2){
        console.log(i)

    }
}

var i = 0
while(i < 3){
    console.log(i);
    i++;
} 


var a = 2;

function test (a){
    console.log('hello function', a);
}

test (a); 


function sum (a,b) {
    return a + b;
}
var result = sum(2,2);
console.log (result) ; 

var name1 = 'name1';
var name2 = 'name2';

function names (name1, name2, ...rest) {
    console.log(name1 + name2 + rest);
}

names ('name1', 'name2', 'name 4', 'name5'); 


let sum = (a ,b) => a + b;

alert (sum(5,5));

/*либо. если длинная функция*/
/*
let sum = (a ,b) => {
    return a + b;
}

alert (sum(5,5)); */


/*/*  12 06 2018*/ /*

var message = +prompt('Enter your number');

var sum = 0;

for (var i = 0; i < message; i++) {
    sum +=i;
}

var message = +prompt('Enter your number');
var secondNumber = +prompt('Enter your number');

function getMinNumbers(a,b) {
    if (a>b){

    }else if (a<b){
        alert('dfjjdhdg')
    }
}*/
 
/*var age = prompt('enter number');

function checkAge(age){
if (age > 18){
    return true;
}
    else {
    return confirm ('выбери другой фильм');
    }

    if (checkAge(age)) {
    alert ('qwerty');
}
    else {
    alert ('njnjnj');
}
}

var globalVar = 'test';

var anon_func = function() {
    var secretVar = 'textSecretVar';
    alert ('Hey' + globalVar);
}

anon_func();



(function(){
    alert ('Hey' + globalVar); 
})();



setTimeout(function(){
    console.log ('123')
}, 3000);



var name = 'kdldlfpgnrk';

var result = name.length;

console.log(result);


console.log(parseInt('12px'));
console.log(parseFloat('12.5px'));

console.log(Math.floor(3.1));
console.log(Math.ceil(3.1));
console.log(Math.round(3.1));

console.log(Math.random());



var n = 'qwertyuiop';

console.log(n.charAt(1));
console.log(n[1]);



var n = 'строка';
console.log(n[1] + n[3] + n[5]);


var n = 'строка';
console.log(n.toUpperCase());
console.log(n[2].toUpperCase());
*/
var m = 'This is строка';

console.log(m.indexOf('This'));/*0-номер позиции(индекса)*/
console.log(m.indexOf('Tis'));/*-1-не нашел*/
console.log(m.indexOf(' is'));/*4-номер позиции(индекса)*/

console.log(m.slice(2,4));/*от и до*/













