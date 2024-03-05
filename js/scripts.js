/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY > 0) { // Fix: Change the condition to check if scrolled more than 0
            navbarCollapsible.classList.add('navbar-shrink'); // Fix: Add class to shrink navbar
        } else {
            navbarCollapsible.classList.remove('navbar-shrink'); // Fix: Remove class to expand navbar
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/* Enhanced Typing mechanics with smoother and faster typing and blinking cursor */
document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    const typedTextSpan = document.querySelector(".typing");
    const cursorSpan = document.createElement("span");
    cursorSpan.classList.add("cursor");
    cursorSpan.innerHTML = "_"; // Changed cursor symbol to be more visible
    typedTextSpan.parentNode.insertBefore(cursorSpan, typedTextSpan.nextSibling);
    const textArray = ["Welcome To Sacred Heart Academy!", "Choose Your Career Path", "Explore. Learn. Succeed."];
    const typingDelay = 100; // Reduced delay for smoother and faster typing
    const erasingDelay = 50; // Reduced delay for smoother and faster erasing
    const newTextDelay = 1500; // Reduced delay between current and next text for a smoother experience
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            // Implement blinking cursor effect
            cursorSpan.classList.add("blink");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("blink"); // Stop blinking the cursor before typing next text
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 500); // Reduced delay before starting to type next text
        }
    }

    // CSS for blinking cursor effect
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        .cursor.blink {
            animation: blink-animation 0.4s steps(5, start) infinite;
            -webkit-animation: blink-animation 0.4s steps(5, start) infinite;
        }
        @keyframes blink-animation {
            to {
                visibility: hidden;
            }
        }
        @-webkit-keyframes blink-animation {
            to {
                visibility: hidden;
            }
        }
    `;
    document.head.appendChild(styleSheet);

    if(textArray.length) setTimeout(type, newTextDelay + 250);
});
