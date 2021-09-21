function isShowing() {
    document.querySelectorAll(".isntShowing").forEach((text, index) => {
        if (text.getBoundingClientRect().top < window.innerHeight) {
            text.classList.remove("isntShowing");
        }
    });
}

window.addEventListener("scroll", isShowing);

/* function nonGalery() {
    document.querySelectorAll(".non-galery-img").forEach((img, index) => {
        img.src = img.getAttribute("data-src");
    });
}
window.addEventListener("load", nonGalery);
*/