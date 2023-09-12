$(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
});

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            document.getElementById("nav-logo").style.margin = "0px 30px";
            document.querySelector("#nav-bar-logo img").style.width = "145px";
            document.querySelector("#nav-bar").style.padding = "10px";
        } else {
            document.getElementById("nav-logo").style.margin = "15px 30px"
            document.querySelector("#nav-bar-logo-img").style.width = "165px";
            document.querySelector("#nav-bar").style.padding = "20px 15px";
        }
}

document.querySelector("#ham-more-btn").addEventListener("click", showNow)
document.querySelector("#ham-less-btn").addEventListener("click", dontShow)

function showNow() {
    document.querySelector(".ham-over").classList.add('show')
    document.querySelector("nav#nav-bar").style.padding = "0px";
    document.querySelector("#nav-logo").style.display = "none";
}

function dontShow() {
    document.querySelector(".ham-over").classList.remove('show')
    document.querySelector("#nav-logo").style.display = "block";
}
