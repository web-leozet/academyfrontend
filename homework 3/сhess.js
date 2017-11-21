// Шахматная доска 1

function addСhess() {
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
addСhess();

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");




// Шахматная доска 2


for(var i = 0; i < 10; i++){
	console.log(i);
	for(j = 0; j < 10; j++){
		if(j % 2 == i % 2){
			document.write("<img src ='img/white.png' width='50' height='50' >");
		}else{
			document.write("<img src ='img/black.png' width='50' height='50' >");
		}

	}
	document.write("<br/>");
}

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");




//двумерная матрица



var table = new Array(10);

for (var i = 0; i < table.length; i++) {
	table[i] = new Array(10);
}
for (var row = 0; row < table.length; row++) {
	for (var col = 0; col < table[row].length; col++) {
		if ((row + col) % 2 == 1) 
			table[row][col] = "<img src='img/white.png' width='50' height='50'/>";
		else
			table[row][col] = "<img src='img/black.png' width='50' height='50'/>";
	}
}

table[5][3] = "<img src = 'img/parquet3.jpg' width='50' height='50'>"

for (var row = 0; row < table.length; row++) {
	for (var col = 0; col < table[row].length; col++) {
		document.write(table[row][col]);
	}
	document.write("<br/>");
}

var beet = table[5][3];
document.write(beet + "<hr/>");