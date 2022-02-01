function add() {
  var result = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value);
  document.getElementById("ans_label").innerHTML = "The Sum is " + result;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

function sub() {
  var result = Number(document.getElementById("num1").value) - Number(document.getElementById("num2").value);
  document.getElementById("ans_label").innerHTML = "The Difference is " + result;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

function mul() {
  var result = Number(document.getElementById("num1").value) * Number(document.getElementById("num2").value);
  document.getElementById("ans_label").innerHTML = "The Product is " + result;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
function divi() {
  var result = Number(document.getElementById("num1").value) / Number(document.getElementById("num2").value);
  document.getElementById("ans_label").innerHTML = "The Ans is " + result;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
