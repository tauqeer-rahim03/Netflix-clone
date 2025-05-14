const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".plus-icon");

        // Close all other answers and reset icons
        document.querySelectorAll(".faq-answer").forEach((a) => {
            if (a !== answer) a.style.maxHeight = null;
        });
        document.querySelectorAll(".plus-icon").forEach((i) => {
            if (i !== icon) i.classList.remove("rotate");
        });

        // Toggle current answer and icon rotation
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.classList.remove("rotate");
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.classList.add("rotate");
        }
    });
});
