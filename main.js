ew = false;
function tB() {
  if (ew) {
    document.body.style.color = "#fff";
    document.body.style.background = "#000";
    ew = false;
  } else {
    document.body.style.color = "#000";
    document.body.style.background = "#fff";
    ew = true;
  }
}
