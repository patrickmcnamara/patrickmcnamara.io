pr = false
window.onload = function () {
  document.getElementById("acc").onclick = function () {
    if (!pr) {
      pr = true
      document.querySelector("link").remove()
    }
  }
}
