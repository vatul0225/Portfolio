/*------Cursor--------*/

var main = document.querySelector(".header");
var circle = document.querySelector(".circle");
main.addEventListener("mouseenter", function () {
    gsap.to(circle, {
        scale: 1,
        opacity: 1,
    })
})

document.addEventListener("mousemove", function (dets) {
    gsap.to(circle, {
        left: dets.x + "px",
        top: dets.y + "px",
    });
});

main.addEventListener("mouseleave", function () {
    gsap.to(circle, {
        scale: 0,
        opacity: 0,
    })
})

/*----------go-to-top-----------*/

const goTopBtn = document.querySelector(".go-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
};

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/*---------Skil Graph---------*/

const ctx2 = document.getElementById('doughnut').getContext('2d');
const doughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'C', 'C++', 'Python', 'Bootstrap'],
        datasets: [{
            label: 'learnt out 0f 20',
            data: [17, 15, 15, 10, 8, 10, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(195, 255, 104, 0.4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(195, 255, 104, 1)'
            ],
            borderWidth: 1
        }]
    }
});