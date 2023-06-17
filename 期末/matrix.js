function addMatrices() {
  var order = parseInt(document.getElementById("order").value);

  var matrixInputsDivA = document.getElementById("matrixInputsA");
  var matrixInputsDivB = document.getElementById("matrixInputsB");

  matrixInputsDivA.innerHTML = "";
  matrixInputsDivB.innerHTML = "";

  for (var i = 0; i < order; i++) {
    for (var j = 0; j < order; j++) {
      var inputA = document.createElement("input");
      inputA.type = "number";
      inputA.id = "matrixA_" + i + "_" + j;
      matrixInputsDivA.appendChild(inputA);

      var inputB = document.createElement("input");
      inputB.type = "number";
      inputB.id = "matrixB_" + i + "_" + j;
      matrixInputsDivB.appendChild(inputB);
    }

    matrixInputsDivA.innerHTML += "<br>";
    matrixInputsDivB.innerHTML += "<br>";

  }

}

function calculate() {

  var order = parseInt(document.getElementById("order").value);
  var operator = getSelectedOperator();

  var matrixA = getMatrixValues("matrixA_", order);
  var matrixB = getMatrixValues("matrixB_", order);

  var result = performCalculation(matrixA, matrixB, operator);

  displayResult(result);

}

function getSelectedOperator() {
  var operators = document.getElementsByName("operator");

  for (var i = 0; i < operators.length; i++) {
    if (operators[i].checked) {
      return operators[i].value;
    }
  }

  return "+";
}

function getMatrixValues(prefix, order) {
  var matrix = [];

  for (var i = 0; i < order; i++) {
    matrix[i] = [];

    for (var j = 0; j < order; j++) {
      matrix[i][j] = parseFloat(document.getElementById(prefix + i + "_" + j).value);
    }
  }

  return matrix;
}

function performCalculation(matrixA, matrixB, operator) {
  var result = [];

  for (var i = 0; i < matrixA.length; i++) {
    result[i] = [];

    for (var j = 0; j < matrixA[i].length; j++) {
      if (operator === "+") {
        result[i][j] = matrixA[i][j] + matrixB[i][j];
      } else if (operator === "-") {
        result[i][j] = matrixA[i][j] - matrixB[i][j];
      } else if (operator === "*") {
        var c = 0;
        for (var t = 0; t < matrixA[0].length; t++) {
          c = matrixA[i][t] * matrixB[t][j] + c;
        }
        result[i][j] = c;
      }
    }
  }

  return result;
}

function displayResult(result) {
  var message = "計算结果:\n\n";

  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result[i].length; j++) {
      message += result[i][j] + "\t";
    }
    message += "\n";
  }

  alert(message);
}