
// chooses and displays the correct draft
function f(number) {
    console.log("open draft " + number);
}

function toggleComments() {
  console.log("toggling comments visibility");
  var comments = document.getElementsByClassName("comments");
  var button = document.getElementById("load-comments")
  if (button.innerHTML === "Show comments") {
    button.innerHTML = "Hide comments";
  } else {
    button.innerHTML = "Show comments";
  }
  for (var i = 0; i < comments.length; i++) {
    if (comments[i].style.display === "block") {
      comments[i].style.display = "none";
    } else {
      comments[i].style.display = "block";
    }
  }
}
