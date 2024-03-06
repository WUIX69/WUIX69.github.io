document.getElementById('hearts').addEventListener('click', heart);
document.getElementById('snowflakes');

// heart
function heart() {
    Swal.fire({
        title: "No Rizz ?",
        text: "Tap OK to enable rizz, Enabling rizz will max out site charisma...",
        imageUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHUyejgwNDFkdjNmd3IwcjhqdW8wY2o2ZmE0ajh4NTJlZDkycThrcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kImkyfcsuo0hMbbmjY/giphy.gif",
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Bagal Net wait lang",

        // Added this To Confirm
        showCancelButton: true, 
        showConfirmButton: true, 
        showCloseButton: false,
        showLoaderOnConfirm: true, 
        preConfirm: () => {
            const Toast = Swal.mixin({ // Toast from sweetalert
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,    
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Rizz successfully enabled"
            });

            const snowflakes = document.getElementById('snowflakes');
            snowflakes.hidden = false;

            // CSS for snowflakes
            const snowstyle = document.createElement("style");
            snowstyle.type = "text/css";
            snowstyle.innerText = `

            /* customizable snowflake styling */
            .snowflake {
            color: #98002E;
            font-size: 1em;
            font-family: Arial, sans-serif;
            text-shadow: 0 0 5px #000;
            }

            .snowflake,
            .snowflake .inner {
            animation-iteration-count: infinite;
            animation-play-state: running;
            }
            @keyframes snowflakes-fall {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(110vh);
            }
            }
            @keyframes snowflakes-shake {
            0%,
            100% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(80px);
            }
            }
            .snowflake {
            position: fixed;
            top: -10%;
            z-index: 9999;
            -webkit-user-select: none;
            user-select: none;
            cursor: default;
            animation-name: snowflakes-shake;
            animation-duration: 3s;
            animation-timing-function: ease-in-out;
            }
            .snowflake .inner {
            animation-duration: 10s;
            animation-name: snowflakes-fall;
            animation-timing-function: linear;
            }
            .snowflake:nth-of-type(0) {
            left: 1%;
            animation-delay: 0s;
            }
            .snowflake:nth-of-type(0) .inner {
            animation-delay: 0s;
            }
            .snowflake:first-of-type {
            left: 10%;
            animation-delay: 1s;
            }
            .snowflake:first-of-type .inner,
            .snowflake:nth-of-type(8) .inner {
            animation-delay: 1s;
            }
            .snowflake:nth-of-type(2) {
            left: 20%;
            animation-delay: 0.5s;
            }
            .snowflake:nth-of-type(2) .inner,
            .snowflake:nth-of-type(6) .inner {
            animation-delay: 6s;
            }
            .snowflake:nth-of-type(3) {
            left: 30%;
            animation-delay: 2s;
            }
            .snowflake:nth-of-type(11) .inner,
            .snowflake:nth-of-type(3) .inner {
            animation-delay: 4s;
            }
            .snowflake:nth-of-type(4) {
            left: 40%;
            animation-delay: 2s;
            }
            .snowflake:nth-of-type(10) .inner,
            .snowflake:nth-of-type(4) .inner {
            animation-delay: 2s;
            }
            .snowflake:nth-of-type(5) {
            left: 50%;
            animation-delay: 3s;
            }
            .snowflake:nth-of-type(5) .inner {
            animation-delay: 8s;
            }
            .snowflake:nth-of-type(6) {
            left: 60%;
            animation-delay: 2s;
            }
            .snowflake:nth-of-type(7) {
            left: 70%;
            animation-delay: 1s;
            }
            .snowflake:nth-of-type(7) .inner {
            animation-delay: 2.5s;
            }
            .snowflake:nth-of-type(8) {
            left: 80%;
            animation-delay: 0s;
            }
            .snowflake:nth-of-type(9) {
            left: 90%;
            animation-delay: 1.5s;
            }
            .snowflake:nth-of-type(9) .inner {
            animation-delay: 3s;
            }
            .snowflake:nth-of-type(10) {
            left: 25%;
            animation-delay: 0s;
            }
            .snowflake:nth-of-type(11) {
            left: 65%;
            animation-delay: 2.5s;
            }

            `;
            document.head.appendChild(snowstyle);

        }

    });

    // For some reason padding gets wierd because of swal
    function checkBodyPaddingAndMargin() {
        const body = document.querySelector('body');
        const bodyStyles = getComputedStyle(body);
        
        const bodyPadding = bodyStyles.padding;
        const bodyMargin = bodyStyles.margin;
    
        if (bodyPadding !== '0px' || bodyMargin !== '0px') {
            body.style.padding = '0';
            body.style.margin = '0';
        }
    }
    
    setInterval(checkBodyPaddingAndMargin, 500);

}




/*document.querySelectorAll('section').forEach(section => {
    section.style.padding = '2rem';
})*/;


