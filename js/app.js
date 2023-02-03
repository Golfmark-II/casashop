const hamburger = document.querySelector(".hamburger");
const navmanu = document.querySelector(".navbar");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navmanu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navmanu.classList.remove("active");
    }))

var mainImg = document.getElementById("mainIMG");   
var small = document.getElementsByClassName("small-img");

    small[0].onclick = function () {
        mainImg.src = small[0].src;
    }
    small[1].onclick = function () {
        mainImg.src = small[1].src;
    }
    small[2].onclick = function () {
        mainImg.src = small[2].src;
    }
    small[3].onclick = function () {
        mainImg.src = small[3].src;
    }