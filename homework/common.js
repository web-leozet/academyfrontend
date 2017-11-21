
/*function addCalcs() {
	var ready = confirm('Вы хототе включить калькулятор');
	if (ready == true ) {
		do {
			var a = +prompt('Введите первое число');
			if (isNaN(a)) {
				alert('Вы ввели не число.Попробуйте снова');
				continue;
			}
			var cons = prompt("Введите арифметический оператор: \' + \'    \' - \'    \' * \'    \' / \'");
			do{
				var b = +prompt('Введите второе число');
				if (isNaN(b)) {
					alert('Вы ввели не число.Попробуйте снова');
					continue;
				}

			}while (isNaN(a) || isNaN(b));

		}while (isNaN(a) || isNaN(b));

		

		switch(cons) {
			case "*":
			alert(a * b);
			break;
			case "/":
			if (a && b != 0) {
				alert(a / b);
			}else {
				alert('На ноль делить нельзя');
			}
			break;
			case "+":
			alert(a + b);
			break;
			case "-":
			alert(a - b);
			break;
			default:
			alert("Неверный арифметический оператор! Попробуйте ещё.");
			break;
		}
	}else{
		alert("Да Ладно!!");
	}
}
addCalcs();*/


/*var f = +prompt('Первое число');
var h = +prompt('Второе число');
console.log(f,h);

while (isNaN(f) || isNaN(h)) {
	alert("Это не цифра");
	f = +prompt('Первое число');
	h = +prompt('Второе число');
}
var result = f + h;
document.write('result' + result);*/




/*var names = '+, -, /, *';

var oper = names.split(', ');

for (var i = 0; i < arr.length; i++) {
  alert( 'Вам сообщение ' + arr[i] );
}*/




/*var filterFloat = function (value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}

console.log(filterFloat('421'));               // 421
console.log(filterFloat('-421'));              // -421
console.log(filterFloat('+421'));              // 421
console.log(filterFloat('Infinity'));          // Infinity
console.log(filterFloat('1.61803398875'));     // 1.61803398875
console.log(filterFloat('421e+0'));            // NaN
console.log(filterFloat('421hop'));            // NaN
console.log(filterFloat('hop1.61803398875'));  // NaN*/



/*var caunter = 0;
while (caunter<5) {
	caunter++;
	document.write("<p> Caunter" + caunter);
	continue;
}

document.write("<p> Количество етерация  " + caunter);*/


// Игра в угадай цвет

/*var ready = confirm("Хотите начать игру?");
if (ready == true) {
	var str = ("Угадайте цвет с пяти попыток");

var ping = 5;
var att = 0;
var color = "red";

while (att < ping) {
	att++;
	value = prompt(str + " Попытка № " + att, "");
	if (value != color) {
		str = "Вы не угадали";
		continue;
	}
	// alert("Bingo");
	value = prompt("Поздравляем Вы угадали с ", + att + " попытки");
	break;
}
	value = prompt("","Конец игры!");
}else{
	alert("Да Ладно!!!!))))");
}*/

/*var counter = 5;
do {
	counter++;
	document.write(counter + "<br/>");
} while (counter < 10);*/






// Факториал start



/*var counter = prompt("Введите число");
var factorial = 1;

document.write("Факториал числа " + counter + "! = ");

do{

	if (counter == 0 ) {
		factorial = 1;
		break;
	}	else if (isNaN(counter)) {
	counter = prompt("","Это не число");
	break;
}
	factorial = factorial * counter; 
	counter = counter -1;

}while (counter > 0);

//4!
//1=1*4=4
//4-1=3 counter
//4=4*3=12
//3-1=2 counter
//12=12*2=24
//2-1=1 counter
//24=24*1=24
//1-1=0 counter

document.write(factorial); 


// Факториал end*/






 /*var sum = 0;
 for(i=4;i<8;i++) {
 	if (i == 6) {
 		break;
 	}
 	console.log(i);
 	sum += i;
 }
 document.write(sum);*/

/* for (var t = 0; t <= 8; t++) {
 	console.log(t);
 }*/


// Вывод чётных чисел

/* for (var i = 0; i < 20; i++) {
 	if (i %2 == 0){
 		 document.write("<p>Итерация = " + i);
 	}
 }
 document.write(" Итераций = " + i);*/


 


// Вывод не чётных чисел

/*  for (var i = 0; i < 20; i++) {
 	if (i %2 != 0){
 		 document.write("<p>Итерация = " + i);
 	}
 }
 document.write(" Итераций = " + i);*/




 /*document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");
 document.write("<br/>");*/








// Шахматная доска 1

/*function addСhess() {
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			if ((i%2==0 && j%2==0)|| (i%2!=0 && j%2!=0)){
				document.write("<img src ='img/white.png' width='50' height='50' >");
			}
			else document.write("<img src ='img/black.png' width='50' height='50' >");
		}

		document.write("<br/>");
	}
}
addСhess();*/



/*document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");*/


// Шахматная доска 2
// 
// 
/*for (var j = 0; j < 5; j++) {
	for (var i = 0; i < 10; i++) {
		if (i %2 ) {
			document.write("<img src ='img/black.png' width='50' height='50' >");
		}else{
			document.write("<img src ='img/white.png' width='50' height='50' >");
		}
	}
	document.write("<br/>");
	for (var i = 0; i < 10; i++) {
		if (!(i %2) ) {
			document.write("<img src ='img/black.png' width='50' height='50' >");
		}else{
			document.write("<img src ='img/white.png' width='50' height='50' >");
		}
	}
	document.write("<br/>");
}*/

/*document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");*/





/*for(var i = 0; i < 10; i++){
 console.log(i);
 for(j = 0; j < 10; j++){
  if(j % 2 == i % 2){
   document.write("<img src ='img/white.png' width='50' height='50' >");
  }else{
   document.write("<img src ='img/black.png' width='50' height='50' >");
  }
  
 }
 document.write("<br/>");
}*/



/*arr = [1,2,3]

a = arr.reverse() // [ 3, 2, 1]
console.log(a)
for(var i=0; i<a.length; i++) {
  console.log(a[i]) // 3, 2, 1
}*/

/*var a = [1,2,3,4,5];
console.log(a);
var b = a.reverse();
console.log(b);*/

/*var a = ["September","October","November",[1,2,3,["one", "10"],4,5],"December","January","Fabruar","March","April","May","June","Jull","August"];
console.log(a[1][2],[2]);*/


/*var b = Array(10);
console.log(b);

var c = Array();
console.log(c);*/




/*var matrix = [1, 2, 3, 4, 5, 6,7, 8, 9];

console.log(matrix); // центральный элемент

var arr = Array(5);
arr[0] = "h";
arr[1] = "e";
arr[2] = "l";
arr[3] = "l";
arr[4] = "о";
document.write(arr + "<br/>");
document.write("<hr/>")
arr.length = 7;
for (var i = 0; i < arr.length; i++) {
	document.write(arr[i] + "<br/>");
}
document.write("<hr/>")
arr.length = 2;
for (var i = 0; i < arr.length; i++) {
	document.write(arr[i] + "<br/>");
}
*/



/*var laptop = {
	ram: "128 mb",
	cpu: "INTEL 7",
	screen: "17",
};


var start = prompt("Введите параметр (ram, cpu, screen)", "");

var value = laptop[start];
document.write(value);*/



/*var list = ["September","October","November","December","January","Fabruar",
"March","April","May","June","Jull","August"];

document.write("<ul><li>");

var res = list.join("</li><li>");

document.write(res);

document.write("</li></ul>");*/


/*for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (j%2 == i%2 ) {
			document.write("<img src = 'img/white.png' width='30 height='30>");
		}else{
			document.write("<img src = 'img/black.png' width='30 height='30>");
		}
	}
	document.write("<br/>");
}*/





/*var j = 0;
while (j < 5) {
	j++;
	console.log("Итерация № " + j);
}*/



/*var h = 0;
do{
	console.log("Итерация № " + h);
	h++;
}while (h < 4);*/




// counter%2 и counter%2 == 1  и то и другое выводит нечётные числа
// (!(counter%2)) и (counter%2 == 0  и то и другое выводит чётные числа

/*for (var counter = 0; counter < 20; counter++) {
	if (counter%2 == 0) {
		console.log("Counter = " + counter);
	}
	
}
console.log(counter);*/

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


//шахматка ещё тренировка

/*for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		document.write(i,j);
		if (j%2 == i%2) {
			document.write("<img src = 'img/white.png' width='50 height='50>")
		}else{
			document.write("<img src = 'img/black.png' width='50 height='50>")
		}
	}
	document.write("<br/>");
}

console.log(0%2);*/


/*var a;
for (; ;){
	a = prompt("Введите направление l/r ");
	switch(a) {
		case 'l':
			document.write("Идите на лево " + "<br/>");
			continue;
		case 'r':
				document.write("Идите на право " + "<br/>");
				continue;
	}
	break;
}*/


//оператор break;

/*var counter = prompt("Сколько итераций хотите сделать?");
var exit = prompt("На какой этерации остановить?");

for (var i = 0; i < counter; i++) {
	if (i == exit) {
		break;
	}else{
		document.write(i + "<br/>");
	}
}*/




//оператор continue;

/*var counter = prompt("Сколько итераций хотите сделать?");
var exit = prompt("Какую итерацию вы не хотите видеть?");
var exits = prompt("Какую вторую итерацию вы не хотите видеть?");

for (var i = 0; i < counter; i++) {
	if ((i == exit)||(i == exits)) {
		document.write("<br/>");
		continue;
	}else{
		document.write(i + "<br/>");
	}
}*/

/*var a = 200;
for (var i = 0; i < 30; i++) {
	var a = a + 10;
	console.log(a);
}
*/

// var arr = [1,4,2,4,112,12];
//   arr.sort();
//   console.log(arr); //сейчас не верно


// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
// }



//  найти в google как сделать сортировку массива чисел


/*var numericSort = function (a, b) {
	if (a > b) {
		return 1;
	}
	if (a < b) {
		return -1;
	}
}

var arr = [1,4,2,4,112,12];
arr.sort(numericSort);

alert(arr);*/




//таблица

/*window.onload = function () {
	var table = document.createElement('table');
	for (var i = 0; i < 10; i++) {
		var tor = document.createElement('tr');
		table.appendChild(tor);
		for (var j = 0; j < 10; j++) {
			var lor = document.createElement('td');
			table.appendChild(lor);
			lor.innerText = '-' + j + '-';
		}
	}
	document.body.appendChild(table);
}*/


