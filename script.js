document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector(".search-box");
    const problems = document.querySelectorAll(".problem p");
    const resultMessage = document.querySelector(".result-message");

    searchBox.addEventListener("input", function () {
        const searchTerm = searchBox.value.trim().toLowerCase();

        let found = false;

        problems.forEach((problem) => {
            const text = problem.textContent.toLowerCase();
            const regex = new RegExp(searchTerm, "gi");

            if (text.includes(searchTerm)) {
                problem.innerHTML = text.replace(
                    regex,
                    (match) => `<span class="highlight">${match}</span>`
                );
                found = true;
            } else {
                problem.innerHTML = text;
            }
        });

        if (found) {
            resultMessage.style.display = "none";
        } else {
            resultMessage.style.display = "block";
        }
    });
});