document.addEventListener("load", function() {
    let headblock = document.getElementById("headblock");
    // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // const d = new Date();
    // let currentMonth = d.getMonth();
    // let nextMonth = (currentMonth+1)%12;
    console.log(document.getElementById("dealbody").innerHTML); //month[currentMonth] + " deal! Use code " + month[currentMonth] + currentMonth + " in store to get 25% off your first smoothie before " + month[nextMonth] + "!";
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