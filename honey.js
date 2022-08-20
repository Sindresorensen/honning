/*
let btn = document.getElementById("home");
let img = document.getElementById("gif");

btn.addEventListener("mouseover", function() {
    img.src = "bee.gif";
})

btn.addEventListener("mouseout", function() {
  img.src = "beeG.png";
})
*/


// Click the title to come back to first page
document.getElementById("h1").onclick = function() {
  window.location.href = "index.html";
}
document.getElementById("home").onclick = function() {
  window.location.href = "index.html";
}
document.getElementById("info").onclick = function() {
  window.location.href = "info.html";
}
document.getElementById("order").onclick = function() {
  window.location.href = "order.html";
}
