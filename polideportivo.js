const questions = [
    {
        question: "In which sport is played on a rectangular field with two teams of eleven players each?",
        options: ["Soccer", "Basketball", "Volleyball"],
        answer: "Soccer"
    },
    {
        question: "Which of the following sports is played with a round ball and can be scored with any part of the body: volleyball, soccer or basketball?",
        options: ["Soccer", "Volleyball", "Basketball"],
        answer: "Soccer"
    },
    {
        question: "In which sport is a hoop and a ball to be scored used: soccer, basketball or volleyball?",
        options: ["Basketball", "Volleyball", "Soccer"],
        answer: "Basketball"
    },
    {
        question: "In which sport is a long stick used to hit a ball and score goals: volleyball, field hockey or basketball?",
        options: ["Field hockey", "Volleyball", "Basketball"],
        answer: "Field hockey"
    },
    {
        question: "In which sport is played on a rectangular court divided by a net and a small ball is used to hit it with the hands: volleyball, handball or soccer?",
        options: ["Handball", "Volleyball", "Soccer"],
        answer: "Handball"
    },
    {
        question: "In which sport is played on a rectangular court with two teams of eleven players each and using a round ball?",
        options: ["Soccer", "Basketball", "Volleyball"],
        answer: "Soccer"
    }
];

const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;

function displayQuestion(question) {
    questionContainer.textContent = question.question;
    optionsContainer.innerHTML = "";
    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => selectOption(option, index));
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(option, index) {
    const correct = option === questions[currentQuestionIndex].answer;
    if (correct) {
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: " + questions[currentQuestionIndex].answer);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        alert("¡Juego terminado!");
        currentQuestionIndex = 0;
        displayQuestion(questions[currentQuestionIndex]);
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    }
});

// Mostrar la primera pregunta al cargar la página
displayQuestion(questions[currentQuestionIndex]);
