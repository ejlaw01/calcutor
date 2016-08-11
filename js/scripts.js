//back-end logic:

var add = function(number1, number2) {
	return number1 + number2;
 };
var subtract = function(number1, number2) {
 	return number1 - number2;
 };
var multiply = function(number1, number2) {
 return number1 * number2;
};
var divide = function(number1, number2) {
	return number1 / number2;
};
//front-end logic

$(document).ready(function() {

$("form#math").submit(function(event) {
	event.preventDefault();
	var num1 = parseFloat($("#num1").val());
	var num2 = parseFloat($("#num2").val());
	var operator = $("input:radio[name=operator]:checked").val();
	var result;


	if (operator === "add") {
		result = add(num1, num2);
	} else if (operator === "subtract") {
		result = subtract(num1, num2);
	} else if (operator === "multiply") {
		result = multiply(num1, num2);
	} else if (operator === "divide") {
		result = divide(num1, num2);
	}

	$("h2").show();
	$("#output").text(result)
});

});
