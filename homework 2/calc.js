function addCalcs() {
	var ready = confirm('Вы хототе включить калькулятор');
	if (ready == true ) {
		do {
			var a = +prompt('Введите первое число');
			if (isNaN(a)) {
				alert('Вы ввели не число.Попробуйте снова');
				continue;
			}

			do {
				var cons = prompt("Введите арифметический оператор: \' + \'    \' - \'    \' * \'    \' / \'");
				if (cons !== "+" && cons !== "-" && cons !== "*" && cons !== "/") {
				alert('Вы ввели не арифметический оператор.Попробуйте снова');
			}
		} while (cons !== "+" && cons !== "-" && cons !== "*" && cons !== "/");
		
			do{
				var b = +prompt('Введите второе число');
				if (isNaN(b)) {
					alert('Вы ввели не число.Попробуйте снова');
					continue;
				}

			}while (isNaN(a) || isNaN(b));

		}while (isNaN(a) || isNaN(b));

		//  function callBack
		

		function multiply(a,b) {
			return a * b;
		}

		function divide(a,b) {
			return a / b;
		}

		function add(a,b) {
			return a + b;
		}

		function minus (a,b) {
			return a - b;
		}

			// callback

		function show(callBack, a,b) {
			alert(callBack(a,b));
		}

			switch(cons) {
				case "*":
					show(multiply, a,b);
				break;
				case "/":
				if (a && b != 0) {
					show(divide, a,b);
				}else {
					alert('На ноль делить нельзя');
				}
				break;
				case "+":
					show(add, a,b);
				break;
				case "-":
					show(minus, a,b);
				break;
				default:
					alert("Неверный арифметический оператор! Попробуйте ещё.");
				break;
			}
		}else{
			alert("Да Ладно!!");
		}
	}
	addCalcs();