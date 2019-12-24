/*
// When the user scrolls down 20px from the top of the document, show the button
y

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
buttonUp.addEventListener('click', goUp);
function goUp() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("buttonUp").style.display = "block";
    } else
}
*/
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.documentElement.scrollTop > 800) {
        document.getElementById("buttonUp").style.display = "block";
    } else {
        document.getElementById("buttonUp").style.display = "none";
    }
}
buttonUp.addEventListener('click', goUp);
function goUp(){
    document.documentElement.scrollTop = 0;
}

