const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get the reCAPTCHA response token
  const recaptchaResponse = grecaptcha.getResponse();

  if (recaptchaResponse.length !== 0) {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwMUiff2KMH0IKnamLhJIK25dkDW55D4HNZPvXNQJza_fhAfMrpndjfUig3aZ-cH0PN3w/exec";
    const form = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("contact_msg");
    const countdownMsg = document.getElementById("countdown_msg");
    // Start the countdown timer
    let countdown = 2;
    countdownMsg.textContent = `Message sending in ${countdown} seconds...`;

    const countdownInterval = setInterval(() => {
      countdown -= 1;
      if (countdown <= 1)
        countdownMsg.textContent = `Message sending in ${countdown} second...`;
      else
        countdownMsg.textContent = `Message sending in ${countdown} seconds...`;
      if (countdown === 0) {
        clearInterval(countdownInterval);

        // Submit the form
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.textContent = "Message sent successfully.";
            msg.style.color = "green";
            setTimeout(function () {
              msg.textContent = "";
            }, 5000);

            // Reset the form and enable the submit button
            form.reset();
            grecaptcha.reset();
            countdownMsg.textContent = "";
          })
          .catch((error) => {
            msg.textContent = "Message failed to send!";
            msg.style.color = "red";
            setTimeout(function () {
              msg.textContent = "";
            }, 5000);
            countdownMsg.textContent = "";
          });
      }
    }, 1000);

    // Reset the countdown if the form is reset
    form.addEventListener("reset", () => {
      clearInterval(countdownInterval);
      countdownMsg.textContent = "";
    });
  } else {
    const msg = document.getElementById("contact_msg");
    msg.textContent = "The captcha wasn't entered correctly!";
    msg.style.color = "red";
    setTimeout(function () {
      msg.textContent = "";
    }, 5000);
  }
});
