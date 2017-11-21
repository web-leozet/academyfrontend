// Игра в угадай цвет

var ready = confirm("Хотите начать игру?");
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
}