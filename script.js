function filterDivs() {
  let inputClass = document.getElementById('classInput').value.trim();
  let parent = document.getElementById('parentDiv');
  let childDivs = parent.querySelectorAll('div');

  childDivs.forEach(div => {
    if (inputClass && div.classList.contains(inputClass)) {
      div.style.display = 'block';  // Show matching div
    } else {
      div.style.display = 'none';   // Hide others
    }
  });
}
function slidemenu() {
  var dib = document.getElementById("slideit")

  dib.style.display = "block"
  
}
function reverseslidemenu() {
  var dibo = document.getElementById("slideit")
 dibo.style.display = "none"
  
}
