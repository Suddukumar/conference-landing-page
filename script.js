document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("user-form");
    const ageInput = document.getElementById("age");
    const mobileInput = document.getElementById("mobile");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const age = parseInt(ageInput.value);
        const mobile = mobileInput.value;

        if (isNaN(age) || age < 0 || age > 150) {
            alert("Please enter a valid age.");
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        alert("User information submitted successfully!");
        form.reset();
    });
});
