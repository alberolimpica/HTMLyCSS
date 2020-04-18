
console.log ("Hello world")

function menuResponsive() {
    var x = document.getElementById("menuNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }