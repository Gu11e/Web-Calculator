let contBox = "0"
let operador = 1

function printBox() {
 document.getElementById(
   'numberBox').innerText =
  contBox;
}


function click1() {
 if (contBox === "0") {
  contBox = "1"
  printBox()
 } else {
  contBox = contBox + "1"
  printBox()
 }
}

function click2() {
 if (contBox === "0") {
  contBox = "2"
  printBox()
 } else {
  contBox = contBox + "2"
  printBox()
 }
}

function click3() {
 if (contBox === "0") {
  contBox = "3"
  printBox()
 } else {
  contBox = contBox + "3"
  printBox()
 }
}

function click4() {
 if (contBox === "0") {
  contBox = "4"
  printBox()
 } else {
  contBox = contBox + "4"
  printBox()
 }
}

function click5() {
 if (contBox === "0") {
  contBox = "5"
  printBox()
 } else {
  contBox = contBox + "5"
  printBox()
 }
}

function click6() {
 if (contBox === "0") {
  contBox = "6"
  printBox()
 } else {
  contBox = contBox + "6"
  printBox()
 }
}

function click7() {
 if (contBox === "0") {
  contBox = "7"
  printBox()
 } else {
  contBox = contBox + "7"
  printBox()
 }
}

function click8() {
 if (contBox === "0") {
  contBox = "8"
  printBox()
 } else {
  contBox = contBox + "8"
  printBox()
 }
}

function click9() {
 if (contBox === "0") {
  contBox = "9"
  printBox()
 } else {
  contBox = contBox + "9"
  printBox()
 }
}

function click0() {
 if (contBox === "0") {
  contBox = "0"
  printBox()
 } else {
  contBox = contBox + "0"
  printBox()
 }
}

function clickAC() {
 contBox = "0"
 printBox()
}

function clickDEL() {
 contBox = contBox.slice(0, -1)
 printBox()
}

function clickpunto() {
 contBox = contBox + "."
 printBox()
}

function clickmas() {
 contBox = contBox + "+"
 printBox()
}

function clickmenos() {
 contBox = contBox + "-"
 printBox()
}

function clickx() {
 contBox = contBox + "×"
 printBox()
}

function clickdiv() {
 contBox = contBox + "÷"
 printBox()
}

function fixOperation() {
 operador = contBox.replace(
  /×/g, '*').replace(/÷/g,
  '/');
}

function clickIgual() {
 fixOperation()
 operador = eval(operador)
 contBox = operador
 printBox()
}

function clickPorcentaje() {
 operador = eval(contBox)
 contBox = operador / 100
 printBox()
}
