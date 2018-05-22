function getTimestamp() {
  var t = new Date().toISOString();
  return t;
}

function getChecksum() {
  var s = document.documentElement.innerText;
  var chk = 0x12345678;
  var len = s.length;
  for (var i = 0; i < len; i++) {
    chk += (s.charCodeAt(i) * (i + 1));
  }
  var c = (chk & 0xffffffff).toString(16);
  return c;
}

function appendMetaInfo(mi) {
  var p = document.createElement("p");
  var tn = document.createTextNode("// " + mi.join(", "))
  p.appendChild(tn)
  document.body.appendChild(p);
}

window.onload = function () {
  var mi = ["TS: " + getTimestamp(), "CS: " + getChecksum()];
  appendMetaInfo(mi);
}
