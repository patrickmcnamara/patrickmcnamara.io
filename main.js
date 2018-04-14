gross = false;
function puke() {
  if (gross) {
    document.body.style.color = "white";
    document.body.style.background = "black";
    gross = false;
  } else {
    document.body.style.color = "black";
    document.body.style.background = "white";
    gross = true;
  }
}
