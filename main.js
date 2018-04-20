ew = false;
function tB() {
  if (ew) {
    document.body.style.color = "white";
    document.body.style.background = "black";
    ew = false;
  } else {
    document.body.style.color = "black";
    document.body.style.background = "white";
    ew = true;
  }
}
