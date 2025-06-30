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

/*---------Reload Website----------*/

window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('manualReload', true);
});

window.addEventListener('load', function () {
    if (sessionStorage.getItem('manualReload')) {
        sessionStorage.removeItem('manualReload');

        window.scrollTo(0, 0);
    }
});


/*---------Scroll reveal----------*/

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
            reveals[i].classList.remove('hidden');
        } else {
            reveals[i].classList.remove('active');
            reveals[i].classList.add('hidden');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal();


/*------------Auto_typing--------------*/

const textArray = ["I'm Atul Verma", "Web Developer"];
const typingContainer = document.querySelector(".typing-container");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingContainer.textContent = currentText.substring(0, charIndex);

    let speed = isDeleting ? 50 : 100; // Adjust speed dynamically
    if (!isDeleting && charIndex === currentText.length) {
        speed = 1500; // Pause before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        speed = 300; // Pause before typing next word
    }

    setTimeout(typeEffect, speed);
}
typeEffect(); // Start typing


// dark mode button 

document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("input");

    // Function to enable or disable dark mode
    function toggleTheme() {
        if (toggleSwitch.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }

    // Event listener for the toggle switch
    toggleSwitch.addEventListener("change", toggleTheme);

    // Load theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        toggleSwitch.checked = true;
        document.body.classList.add("dark-mode");
    }
});


// Resume download button 

document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.querySelector(".button1");

    downloadButton.addEventListener("click", function () {
        // Correct Google Drive direct download link format
        const downloadLink = document.createElement("a");
        downloadLink.href = "https://drive.google.com/uc?export=download&id=1MSIt0digWsqVYfWcOKyMnHwE7MpE8Qus";
        downloadLink.download = "Atul_Verma_Resume.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});


  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Replace SERVICE_ID and TEMPLATE_ID with your actual IDs from EmailJS
    emailjs.sendForm('service_3apvax8', 'template_1wjhdz8', this)
      .then(function() {
        alert('Message sent successfully!');
        contactForm.reset();
      }, function(error) {
        alert('Failed to send message. Please try again later.');
      });
  });