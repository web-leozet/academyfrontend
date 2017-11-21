// Факториал start



var counter = prompt("Введите число");
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


// Факториал end