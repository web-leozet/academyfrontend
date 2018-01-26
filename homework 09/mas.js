var number = [1,4,9];
var dubles = number.map(function (num) {
	return num * 2 + 10;
})

console.log(number);
console.log(dubles);

const MY_LOD = 7;
console.log(MY_LOD);

let MY_LODS = 10;
console.log(MY_LODS);

for (var i = 0; i <= 10; i++) {
	console.log(i);
}

function rut (f) {
	return f * f;
}
console.log(rut(10));



function mtName(x) {
	return function (y) {
		return x + y;
	};
};

var ten = mtName(10);
var tens = mtName(20);

/*alert(ten(20));
alert("Молодец!");
alert("Приз " + tens(30) + "$");*/

var userName = "Вася";

 var sayHi = () => {
  alert( userName + " Дурак" ); // "Вася"
}

sayHi();

function f() {}

f.test = 5;
alert( f.test )

var a = 1000	;

(function() {
  alert(a)
})()

var sum = x => x + x;
sum();
console.log(sum(20)); 


var arr = [1,12,10,30,2];
var sum = arr.reduce((a, b) => a * b);
console.log(sum);

var arr = [1,12,10,30,2];
var sum = arr.reverse();
console.log(sum);


function newSort(a, b) {
	return a - b;
}

var arrss = [1,12,10,30,2];
var sumss = arrss.sort(newSort);
var dubl = sumss.map(v => v * 2);

console.log(sumss);
console.log(dubl);
