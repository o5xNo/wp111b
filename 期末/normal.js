function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate1() {
  var displayValue = document.getElementById("display").value;
  var result = eval(displayValue);
  document.getElementById("display").value = result;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
