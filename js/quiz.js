//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 20;
let countdown;
//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "Which is the most widely spoken language in the world?",
        options: ["Spanish", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "1",
        question: "Which is the only continent in the world without a desert?",
        options: ["North America", "Asia", "Africa", "Europe"],
        correct: "Europe",
    },
    {
        id: "2",
        question: "Who invented Computer?",
        options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
        correct: "Charles Babbage",
    },
    {
        id: "3",
        question: "What do you call a computer on a network that requests files from another computer?",
        options: ["A client", "A host", "A router", "A web server"],
        correct: "A client",
    },
    {
        id: "4",
        question: "Hardware devices that are not part of the main computer system and are often added later to the system.",
        options: ["Peripheral", "Clip art", "Highlight", "Execute"],
        correct: "Peripheral",
    },
    {
        id: "5",
        question: "The main computer that stores the files that can be sent to computers that are networked together is:",
        options: ["Clip art", "Mother board", "Peripheral", "File server"],
        correct: "File server",
    }, {
        id: "6",
        question: "How can you catch a computer virus?",
        options: ["Sending e-mail messages", "Using a laptop during the winter", "Opening e-mail attachments", "Shopping on-line"],
        correct: "Opening e-mail attachments",
    },
    {
        id: "7",
        question: "Google (www.google.com) is a:",
        options: ["Search Engine", "Number in Math", "Directory of images", "Chat service on the web"],
        correct: "Search Engine",
    },
    {
        id: "8",
        question: "Which is not an Internet protocol?",
        options: ["HTTP", "FTP", "STP", "IP"],
        correct: "STP",
    },
    {
        id: "9",
        question: "Which of the following is not a valid domain name?",
        options: ["www.yahoo.com", "www.yahoo.co.uk", "www.com.yahoo", "www.yahoo.co.in"],
        correct: "www.com.yahoo",
    },
];

// Define a named function for the restart logic
function restartQuiz() {
    initial();
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");

    // Remove the restartQuiz event listener to prevent stacking
    nextBtn.removeEventListener("click", restartQuiz);
}

// Update the logic in the 'displayNext' function to show the message with the specified title, text, and icon
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        // Increment questionCount
        questionCount += 1;
        
        // Check if it's the last question
        if (questionCount >= 10 || questionCount == quizArray.length) {
            
            // Stop the timer
            clearInterval(countdown);
            
            Swal.fire({
                title: `You've got a ${scoreCount} out of ${quizArray.length}`,
                text: scoreCount >= 0 && scoreCount <= 5 ? "WTF man!" : "Clutch!",
                icon: "question",
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: "Restart",
                cancelButtonText: "Show Result",
                cancelButtonColor: "#836FFF",
                confirmButtonColor: "#265073",
                showCloseButton: false,
                allowOutsideClick: false,
                

            }).then((result) => {
                if (result.isConfirmed) {
                    // Restart Quiz
                    restartQuiz();

                }else{
                    const results = ["You're a Bussiness related man","You're an Engineer, keep building man", "You're exactly a Programmer", "You're maybe good at Medical stuff", "You might choose Tourism, my guy", "You're an Artist, maybe ?", "You're a Gay man ( ͡° ͜ʖ ͡°)", "Si Nomer pa try niyo!" ];
                    const randomResult = results[Math.floor(Math.random() * results.length)];

                    let timerInterval;
                    Swal.fire({
                        title: "Calculating Result",
                        html: "Result will show in <b></b> milliseconds.",
                        timer: 2000,
                        timerProgressBar: true,

                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                            
                        },
                        
                        willClose: () => {
                            clearInterval(timerInterval);

                            Swal.fire({
                                title: "Sweet!",
                                text: randomResult,
                                imageUrl: "https://unsplash.it/400/200",
                                imageWidth: 400,
                                imageHeight: 200,
                                imageAlt: "Custom image",

                                didClose: () => {
                                    if (questionCount >= 10 || questionCount == quizArray.length){
                                        // Stop the timer
                                        clearInterval(countdown);
                                        
                                        // Replace 
                                        startScreen.innerHTML = "<h3>Congratulations, you've completed the quiz!. Your info will be migrated in our database asap</h3>";
                                        startScreen.classList.remove("hide");
                                        displayContainer.classList.add("hide");
                                    }                                                                     
                                    
                                }
                            });
                        }
                        
                    });
                }
            });
        } else {
            // Display the next question
            countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";
            quizDisplay(questionCount);
            count = 20;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};


//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);

    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 20;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
    nextBtn.disabled = false; // Enable the button again, because of the swal logic
}