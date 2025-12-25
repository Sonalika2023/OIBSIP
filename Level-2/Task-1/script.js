let display = document.getElementById("result");
let lastAnswer = "";

function append(value) {
  if (value === "ans") {
    display.value += lastAnswer;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

function sqrt() {
  display.value = Math.sqrt(eval(display.value));
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
    lastAnswer = result;
  } catch {
    display.value = "Error";
  }
}
