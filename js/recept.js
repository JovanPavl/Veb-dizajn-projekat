document.addEventListener("DOMContentLoaded", function() {
var slider = document.getElementById("myMark");
var output = document.getElementById("ocena");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
})