d = 0;
function r() {
  d += 5;
  document.body.style.transform = "rotate(" + d + "deg)"
}
window.onload = function(){
  document.getElementById("r").onclick = function() {r()};
}
