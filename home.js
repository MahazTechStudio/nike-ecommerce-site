function start() {
  var name = window.prompt("Enter your name");

  if (name !== null && name !== "" && isNaN(name)) {
    document.getElementById("prompt").innerHTML = name;
  } else {
    window.alert("Please enter a valid name with letters only.");
  }
}

window.addEventListener("load", start, false);
