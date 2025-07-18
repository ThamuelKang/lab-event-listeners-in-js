// Handle Button Clicks
const backgroundButton = document.getElementById("changeColorButton")
const resetButton = document.getElementById("resetColorButton")
const textDisplay = document.getElementById("textInputDisplay")
const textInput = document.getElementById("textInput")
const keyDisplay = document.getElementById("keyPressDisplay")

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  document.body.style.backgroundColor = '#ffd86e';
}
backgroundButton.addEventListener("click", changeBackgroundColor);

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white'
}
resetButton.addEventListener("click", resetBackgroundColor)

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  keyDisplay.textContent = event.key

}
document.addEventListener("keydown", displayKeyPress)

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  textDisplay.textContent = textInput.value
}
textInput.addEventListener("input", displayUserInput)

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor)

// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor)

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress)

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput)
