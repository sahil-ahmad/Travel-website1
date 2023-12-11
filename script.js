let ul = document.querySelector("ul");
let icon = document.querySelector("#bar");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showdata");

    if(ul.classList == "showdata"){
        document.getElementById("bar").classList = "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").classList = "fa-solid fa-bars";
    }
});

let main = document.querySelector("main");
let book = document.querySelector(".book");
let package = document.querySelector(".package");
let tour = document.querySelector(".tour");
let contact = document.querySelector(".contact");


function home(){
    tour.style.display = "block";
    package.style.display = "block";
    main.style.display = "flex";
    contact.style.display = "flex";
    book.style.display = "flex";
}
function packages(){
    package.style.display = "block";
    tour.style.display = "none";
    main.style.display = "none";
    contact.style.display = "none";
    book.style.display = "none";

    document.getElementById(active).style.color = "orangered";
}
function Tour(){
    tour.style.display = "block";
    package.style.display = "none";
    main.style.display = "none";
    contact.style.display = "none";
    book.style.display = "none";
}

function contacts(){
    tour.style.display = "none";
    package.style.display = "none";
    main.style.display = "none";
    contact.style.display = "block";
    book.style.display = "none";
}

let moon = document.querySelector("#moon");
let body = document.querySelector("body");



moon.addEventListener("click", ()=>{
body.classList.toggle("active1");
    
})