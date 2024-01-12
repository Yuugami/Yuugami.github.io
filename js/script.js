var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

function plusDivs(n) {
    showDivs(myIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        myIndex = 1
    }
    if (n < 1) {
        myIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[myIndex - 1].style.display = "block";
}

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