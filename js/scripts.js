//back-end logic:

var add = function(number1, number2) {
	return number1 + number2;
 };
var subtract = function(number1, number2) {
 	return number1 - number2;
 };
var mutiply = function(number1, number2) {
 return number1 * number2;
};
var division = function(number1, number2) {
	return number1 / number2;
};

//front-end logic

$(document).ready(function() {

$("form#add").submit(function(event) {
	event.preventDefault();
	var add1 = parseInt($("#add1").val());
	var add2 = parseInt($("#add2").val());
	var result = add (add1, add2);
	$("h2").show();
	$("#output").text(result)
});



});
