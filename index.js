function myHeader() {
    let header = document.getElementById("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }

    })
}
myHeader();

function myBars() {
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function () {
        if (nav.style.right == "0%") {
            nav.style.right = "-50%";
            bars.src = "img/menu.png"
        } else {
            nav.style.right = "0%";
            bars.src = "img/x.png"
        }
        nav.classList.toggle("new")
    }

}
myBars()

function toTop() {
    let top = document.querySelector(".top");
    window.onscroll = () => {
        if (window.scrollY > 100 || document.documentElement.scrollTop > 100) {
            top.style.display = "block"
        } else {
            top.style.display = "none"
        }
    }

    top.onclick = () => {
        scrollTo(0, 0)
    }

}
toTop();



const dDate = new Date();

document.getElementById("date").innerHTML = dDate.getFullYear();
