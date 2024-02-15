function toggleMenu() {
    var x = document.getElementById("theMenu");
    var y = document.getElementsByTagName("main")[0];

    if (x.style.display == "flex") {
        x.style.display = "none";
        y.style.display = "grid";
    }
    else {
        x.style.display = "flex";
        y.style.display = "none";
    }     
}

// Event Listener for Collapsible

let menuCategory = document.getElementById("menuCategory");
let categoryItems = document.getElementsByClassName("categoryItem");

menuCategory.addEventListener('click', function () {
    for (let i = 0; i < categoryItems.length; i++) {
        if (categoryItems[i].style.display == "flex")
            categoryItems[i].style.display = "none";
        else
            categoryItems[i].style.display = "flex";
    }
});

// Collapsible Icon Script 

var coll = document.getElementById("menuCategory");
var i;

coll.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
});