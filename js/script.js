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
/*var m = 'This is строка';

console.log(m.indexOf('This'));/*0-номер позиции(индекса)*/
/*console.log(m.indexOf('Tis'));/*-1-не нашел*/
/*console.log(m.indexOf(' is'));/*4-номер позиции(индекса)*/

/*console.log(m.slice(2,4));/*от и до*/

/*console.log(m.substr(2,4));*/



/*var arrayList = ['test1', 2 , 'test2', 'test3'];

console.log(arrayList.length - 1);

for (var i = 0; i < arrayList.length; i++ ) {
    if(arrayList[i] === 2){
        console.log('есть2')
    }
console.log('array', arrayList[i]);
}
*/
/*var arrayList = ['test1', 2 , 'test2', 'test3'];

console.log(arrayList.length - 1);*/
/*
for (var i = 0; i < arrayList.length; i++ ) {
    if(arrayList[i] === 2){
        arrayList.push ('new element');
        
    }else if(arrayList[i] !== 3){
        arrayList.pop();

    }
    console.log( arrayList);
}*/

/*var n = prompt('enter word');

var arrayUser = [];

if(arrayUser === 'admin') {
    arrayUser.push ('arrayUser');
} else if (arrayList !== 'admin'){
    arrayUser.pop();
}
console.log (arrayUser);*/



/*delete arrayList[0];
console.log( arrayList);*/



/*

var arrayList2 = ['test1', 'test2' , 'test3', 'test4' , 'test5'];

console.log (arrayList2.splice(2 , 2, 'new test', 'new test2'));
console.log( arrayList2);
*/

    
/*var list = prompt('enter word');

var arrayList4 = ['fff', 'ddd', 'admin']

if (list = arrayList4.indexOf('admin')){
    delete arrayList4[2];
    console.log (arrayList4);
}else {
    arrayList4.push('admin');
}*/





/*var message = prompt('enter word');
var users = ['admin'];
for (var i =0, i < users.length; i++) {
    users.indexOf(message) ? users.pop(message) :users.push(message);
    
}*/



/*var message = prompt('enter word');
var users = ['admin', '2'];

users.forEach (function (item, i , users) {
    console.log (i + '=>' + item + 'вытащил из масства ' +users);
});



var message = prompt('enter word');
var users = ['admin', '2'];

users.forEach (function (item, i , users) {
    console.log (`${i} ${item} вытащил из ${users}`);
});
*/


var users = [1, 2, 5 , 6];

var result = users.filter(function(item, id){
    console.log('item', item, id);
    
});
console.log(result);



var users = [1, 2, 5 , 6];

var result = users.filter(function(item){
    return item > 3;
    
});
console.log(result);


var users = [1, 2, 5 , 6];

var result = users.filter(item => {
    return item > 3;
});
console.log(result);


var users = [1, 2, 5 , 6];

var result = users.filter(item => item > 3);

console.log(result);

