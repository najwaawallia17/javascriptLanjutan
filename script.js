document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allFirstInputs = form.querySelectorAll(".first input");

    nextBtn.addEventListener("click", () => {
        let allFilled = true;
        allFirstInputs.forEach(input => {
            if (input.value === "") {
                allFilled = false;
            }
        });

        if (allFilled) {
            form.classList.add('secActive');
        } else {
            alert("Please fill all fields in the first section.");
        }
    });

    backBtn.addEventListener("click", () => form.classList.remove('secActive'));
});
