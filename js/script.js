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

/*
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


//19.06.18

var a =['1'];
var b =[1];

var result = a.concat(b);

console.log(result.splice(2 , 1, 4, 5));
console.log(result);
*/

//задача1
//var numbers = [];
//var result = 0;
//while(true) {
//    var value = prompt('enter your number');
//    console.log (value);
//    if(value === '' || value === null || isNaN(value)) break;
//    numbers.push(+value);
//}

/*for(var i = 0; i < numbers.length; i++){
console.log(numbers[i]);
result += numbers[i];

}
console.log(result);
*/
// numbers.forEach (item => result += item);
 //console.log(result);

//задача2=========
/*
 var arr = ['user', 3, 4, 'a'];

    function find(arr, str) {

        return  arr.indexOf('a');
    }
   
    console.log( find(arr, 'a'));
*/
/*
    var arr = undefined;
    function find(arr, str) {
        if (arr ) {
        var res = arr.indexOf(str);
       }
       else{
        var res ='does not work';
       }
       return res;

    }
   
    console.log( find(arr, 'a'));
*/
/*
var arr = ['green', 'red', 'grey', 'pen'];

var result = arr.filter(function(item) {
   return item.length === 3;
});
console.log(result);
*/
/*
var a = [1,2,3];
var  b = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];
console.log(b[0][1]);
b[1].push('new el')
console.log(b);
console.log(b[1].length);
*/
/*
var a = ['test1', 'test2'];
var result = a.push ('new el');
var result2 = a.splice(-2, 1, 'banana')

//a[a.length - 2] = 'banana';
console.log(a[0]);
var res3 = a.shift();
*/

/*var a = 0;
var arr = [1,9,3,7,5,0,2];

arr.filter((item, id) => {
    if(id % 2 && item % 2){
        a++;
    }
});
console.log(a);
*/


//22.06.18

/*
var test = {
    q1: 'value',
};
var arr =[
    {
    q1: 'value', 
    }
];
console.log(arr[0].q1 = 'naw value');

var test = {
    q1: 'value',
    q2: 'value2',
};
for(var key in test) {
    console.log(`key => ${key}  value:  ${test[key]}`);
    
}
console.log(Object.keys(test));
console.log(Object.keys(test).length);
*/



/*
var test = {
    q1: 'value',
    colors: 'red',
};
test.q3 ='ddffd';

var link = test;

link.q1 = '123';
console.log(link);
console.log(test.q1);
*/

/*
var test2 = {
    q1: 'value',
    color: 'red',
    getName: function() {
    console.log('321', this.color);

    }
};
test2.getName();
console.log(test2.q1);
*/

/*

function name() {
    console.log ('Fname', this )
}

var test2 = {
    title: 'All colors',
    colors: ['red','blue','white'],
    showList: function() {
        this.colors.forEach(
            colors => console.log(this.title + colors)
        )
        
    }
};
test2.showList();
*/


//24.06.18

//Задача1. вывести сумму всех юзеров
/*
var users = {
    vasya:100,
    petya:200,
    petya2:200,
};

var sum = 0;

for(var name in users) {
    sum += users[name];   
}
console.log(sum);
*/


//Задача2. вывести максимальное значение
/*
var users = {
    vasya:100,
    petya:400,
    petya2:200,
};
var result = 0;

for(var key in users) {
    if(result < users[key]){
        result = users[key];
        
    }   
}
console.log(result);
*/


//Задача3. умножить все объекты на 2
/*
var users = {
    vasya:100,
    petya:400,
    petya2:200,
};
var result = 0;

for(var key in users) {
   users[key] *= 2;
   console.log(users[key]);
}
*/

//Задача4. проверить , если не число, то не умножать
/*
var sum = [];
var users = {
    vasya:100,
    petya:'jjh',
    petya2:200,
};

function isSum(obj){
    for(var key in obj) {
      if(typeof obj[key] === 'number') {
        obj[key] *= 2;
        sum.push(obj[key]); 
     }
    }
}

isSum(users);

console.log(sum);
*/

//Задача5. выбрать значение ключа test2. должно выводить - value2
/*
var arr = [
    {key: 'test', value: 'value1'},
    {key: 'test2', value: 'value2'},
    {key: 'test3', value: 'value3'},
]
var values = [];
function isResult(arr, search) {
arr.forEach((value, elem) => {
    //console.log(arr[elem].key + '=>' + elem);
     arr[elem].key === search && values.push(value.value);
});
}
isResult(arr, 'test2');
console.log(values);
*/



