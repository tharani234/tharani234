function allowDrop(ev)
 {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("image", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("image");
  ev.target.appendChild(document.getElementById(data));
}
