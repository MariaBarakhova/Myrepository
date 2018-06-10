console.log('script2');

/*первая задача
var j = 3;  
for (i = 1; i <= 10; i++) { 
document.write(j + "*" + i + "=" +(i*j) + "<br>"); 
     
}*/

/*вторая задача
var i = prompt('введите целое положительное число');

function sum (i) {
    var c = 0;
    for (j = 1; j <= i; j++ ){
        c+=j;
    };
    return c;

}
document.write(sum(i) + "<b>");*/

/*function sumTo(n) {
    return n * (n + 1) / 2;
  }
  
  alert( sumTo(3) );*/

/*третья задача*/

var a = prompt('введите первое число');
var b = prompt('введите второе число');

function getMinNumbers(a,b) {
    if (a < b){
       
        return a;
    }
    else{
        
        return b;
    }
    
}
alert (getMinNumbers(a, b));
 getMinNumbers(a, b);
 

 
