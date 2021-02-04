/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  if (time < "12:00") {
    return "Good Morning";
  } else if (time >= "12:00" && time < "17:00") {
      return "Good Afternoon";
  } else if (time > "17:00" && time < "24:00") {
      return "Good Evening";
  }
}
function displayMessage(content) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = content
}
