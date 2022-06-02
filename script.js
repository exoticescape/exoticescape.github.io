document.addEventListener("load", function() {
    let headblock = document.getElementById("headblock");
});


window.addEventListener('scroll', () => {
    if (!headblock) {
        return;
    }

    let distanceToTop = window.pageYOffset + headblock.getBoundingClientRect().top;
    let elementHeight = headblock.offsetHeight;
    let scrollTop = document.documentElement.scrollTop;

    let opacity = 1;

    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }

    if (opacity >= 0) {
        headblock.style.opacity = opacity;
    }
});

function dismissdeal() {
    document.getElementById("deal").remove();
}
