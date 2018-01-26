// alert('Hello');
// 
// итераторы по обектам

var a = {
	b:2,
	c:3
};

for(key in a){
	console.log(key, a[key]);
}
console.log(Object.keys(a));// ['b,'c'] ключи
console.log(Object.values(a));//[2,3] значения

 for(var i = 0; i < Object.keys(a).length; i++){
 	Object.values(a)[i];
 	console.log(Object.values(a)[i]);
 }

 //setTimeout(function, 5000);// выполниться через 5c

 function setMessage() {
 	alert('Hello World');
 }

// setTimeout(setMessage, 5000);
