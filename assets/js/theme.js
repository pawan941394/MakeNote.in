var link = document.getElementById("themeLink");
var WhiteTheme = document.getElementById("WhiteTheme");
var BlackTheme = document.getElementById("BlackTheme");

let black = document.querySelector("#black");
let white = document.querySelector("#white");


function whitefunc(elem) {
    elem.style.display = "none";
    elem.parentElement.parentElement.nextElementSibling.children[0].children[0].style.display = "block";
    link.href = "../assets/css/theme.css";

}

function blackfunc(elem) {
    link.href = "../assets/css/theme2.css";
    elem.style.display = 'none';
    elem.parentElement.parentElement.previousElementSibling.children[0].children[0].style.display = "block";
}