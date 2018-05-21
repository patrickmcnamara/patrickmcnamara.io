function getTimestamp() {
  var t = new Date().toISOString();
  return t;
}
function getChecksum() {
  var s = document.documentElement.outerText;
  var chk = 0x12345678;
  var len = s.length;
  for (var i = 0; i < len; i++) {
    chk += (s.charCodeAt(i) * (i + 1));
  }
  var c = (chk & 0xffffffff).toString(16);
  return c;
}
window.onload = function appendMetaInfo() {
  var e = document.createElement("p");
  var b = document.createElement("br");
  var t = document.createTextNode("// " + getTimestamp());
  var c = document.createTextNode("// " + getChecksum());
  e.appendChild(t);
  e.appendChild(b);
  e.appendChild(c);
  document.body.appendChild(e);
}
