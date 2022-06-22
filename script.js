var numero1 = 0;
var numero2 = 0;
function sumar(){

	numero1 = parseInt(document.getElementById("num1").value);
	numero2 = parseInt(document.getElementById("num2").value);
	capa.innerHTML  = numero1 + numero2;
	

}
function restar(){

	numero1 = parseInt(document.getElementById("num1").value);
	numero2 = parseInt(document.getElementById("num2").value);
	capa.innerHTML  = numero1 - numero2;
	

}
function multiplicar(){

	numero1 = parseInt(document.getElementById("num1").value);
	numero2 = parseInt(document.getElementById("num2").value);
	capa.innerHTML  = numero1 * numero2;
	

}
function dividir(){

	numero1 = parseInt(document.getElementById("num1").value);
	numero2 = parseInt(document.getElementById("num2").value);
	capa.innerHTML  = numero1 / numero2;
	

}
