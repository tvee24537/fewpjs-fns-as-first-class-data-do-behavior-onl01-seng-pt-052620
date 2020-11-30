/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet (timeinput) {
  let HH = parseInt(timeinput.split(":")[0],10);
  if (HH < 12) {
    return "Good Morning";
  } else if (HH > 12 && HH < 17) {
    return "Good Afternoon"; 
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage (sometext) {
  var element = document.getElementById("greeting");
  element.innerText = `${sometext}`;
}
