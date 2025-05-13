const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        // Close all other answers
        document.querySelectorAll(".faq-answer").forEach((a) => {
            if (a !== answer) a.style.maxHeight = null;
        });

        // Toggle current one
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
