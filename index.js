//Global variables
var elem;
var screen_detect;
var count = 0;


//Scroll down
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("roll_back").style.display = "flex";
    } else {
        document.getElementById("roll_back").style.display = "none";
    }
}


//Detect keys
document.addEventListener("keydown", ({key}) => {
    if (key === "Escape"){
        //Do something here
    }
});

if (window.matchMedia("(max-width: 920px)").matches){
    nav();
}


//Screen resize detect
window.addEventListener('resize', function(event) {
    if (window.matchMedia("(max-width: 920px)").matches){
        nav();
    } else {
        document.getElementById("nav").remove();
        count = 0;
    }
}); 


//Nav
function nav() {
    if (count == "0"){ 
        count++;
        elem = document.createElement("div");
        elem.setAttribute("id","nav");
        elem.innerHTML = "<a href='#'><i class='fa fa-home medium'></i></a> <a href='#'><i class='fa fa-gear medium'></i></a> <a href='#'><i class='fa fa-pencil medium'></i></a> <a href='#'><i class='fa fa-phone medium'></i></a> <a href='#'><i class='fa fa-question medium'></i></a>";
        document.body.appendChild(elem);
    }
}