var d = new Date().toISOString();
var e = document.createElement("p")
var t = document.createTextNode("// " + d)
e.appendChild(t)

window.onload = function appendISO8601() {
document.body.appendChild(e)
}
