// Slideshow

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
    
    if (x)
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