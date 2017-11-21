//  найти в google как сделать сортировку массива чисел


// metod sort  с проверкой 1

var numericSort = function (a, b) {
	if (a > b) {
		return 1;
	}
	if (a < b) {
		return -1;
	}
}

var arr = [1,4,2,4,112,12];
arr.sort(numericSort);

alert(arr);


// metod sort  с проверкой 2

var numericSort2 = function(a,b){
	return a - b;
}
var mas = [1,2,12,20,58,3,225,118,9];
mas.sort(numericSort2);
alert(mas);

//таблица

window.onload = function () {
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
}


var arr = ["September","October","November","December","January","Fabruar",
"March","April","May","June","Jull","August"];

document.write("<ul><li>");

var res = arr.join("</li><li>");
document.write(res);

document.write("</li></ul>");



//сортировка массива в обратном порядке как метод reverse //custom

var arr = [1,2,3,4,5,6,7,8,9];

function reversInPlaceWhile(arr) {
    var rm = arr.length - 1;
    var i = 0;
    var temp; 
    while (i < rm - i) {
        temp = arr[i];
        arr[i] = arr[rm - i];
        arr[rm - i] = temp;
        i++;
    }
    return arr;
}

console.log(reversInPlaceWhile(arr));

