function generateCaptcha() {
  var cap = new Array(
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0"
  );
  var i;
  for (i = 0; i < 4; i++) {
      var a = cap[Math.floor(Math.random() * cap.length)];
      var b = cap[Math.floor(Math.random() * cap.length)];
  }
  var code = a + b;
  document.getElementById("textbox2").value = code;
}


// Get references to the elements
const textbox1 = document.getElementById("textbox1");
const textbox2 = document.getElementById("textbox2");
const submitBtn = document.getElementById("submitBtn");

// Add an input event listener to both textboxes
textbox1.addEventListener("input", handleInput);
textbox2.addEventListener("input", handleInput);

// Function to handle input changes in textboxes
function handleInput() {
  // Get the values of the textboxes
  const value1 = textbox1.value;
  const value2 = textbox2.value;

  // Compare the values and enable/disable the submit button
  if (value1 === value2) {
      submitBtn.disabled = false;
  } else {
      submitBtn.disabled = true;
  }
}