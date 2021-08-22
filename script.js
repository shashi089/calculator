let outputScreen = document.querySelector("#result");

function display(num) {
  outputScreen.value += num;
  console.log(outputScreen.value);
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (error) {
    alert("Invalid Input");
  }
}

function clr() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
