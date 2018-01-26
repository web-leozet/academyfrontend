//написать функцию которая принемает вот такую ​​строку
// «Быстрая коричневая лиса прыгает через ленивую собаку».
// а вот такую возвращать ​​'ehT kciuq nworb xof spmuj revo eht yzal .god')

function rev (p) {
	return p.split(' ')
	.map(function (x) {
		return x.split('').reverse().join('');
	}).join(' ');
}

console.log(rev("The quick brown fox jumps over the lazy dog."));


var c = ["September","October",[1,["ra", "ka", "two"],2,5],"one","November","December","January","Fabruar",
"March","April","May","June","Jull","August"];
console.log(c[2][3]);

var b = Array(1,2,3,4,5,6,7,8,9);
console.log(b);
b.length = 2;
console.log(b);

//  metod join

var list = ["September","October","November","December","January","Fabruar",
"March","April","May","June","Jull","August"];

document.write(list.join("|"));
document.write(list.join("<br/>") + "<br/>");
document.write(list.join(", "));


// metod concat


var a = [];
var input = prompt("Введите новый елемент массива(списка)", "");
while (input != null) {a = a.concat(input);
	input = prompt("Введите ещё один елемент массива(списка)", "");
}	
document.write("<ul><li>");
a = a.join("</li><li>");
document.write(a);
document.write("</li></ul>");



//функция для создания массива 

function newArrayLine(count) {
	var arr = [];
	for (var i = 0; i < count; i++) {
		arr[i] = i;
	}
	return arr;
}

console.log(newArrayLine(20));


  // Максимальное значение аргументов массива

  function max() {
 	var maxValue = arguments[0]; //  = или arguments[0]
 	for (var i = 0; i < arguments.length; i++) 
 		if (arguments[i] > maxValue) 
 			maxValue = arguments[i];
 		return maxValue;	
 	}

 	var res = max(22,35,2,45,85,115,205,3,6,9);
 	document.write("Максимальное значение аргументов массива = " + res + "<br/>");
 	console.log(res);


 	// Рекурсия - это функция которая сама себя вызывает


 	function count(counter) {
 		counter--;

 		document.write("<img src = '../img/1.jpg' width = '50' height = '50'>" + counter + "<br/>");
 		if (counter != 0) {
 			count(counter);
 		}
 		document.write("<img src = '../img/2.jpg' width = '50' height = '50'>" + counter + "<br/>");
 	}

 	count(5);

 	document.write("<hr/>");


			//object

			var insts = {
				propertyA: 100,
				propertyB: 200
			};

			console.log(insts.propertyA);
			console.log(insts.propertyB);

			insts.propertyA = 500;
			insts.propertyB = 1000;

			console.log(insts.propertyA);
			console.log(insts.propertyB);
			insts["propertyB"] = 2000;
			console.log(insts.propertyB);






