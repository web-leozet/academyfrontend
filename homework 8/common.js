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

