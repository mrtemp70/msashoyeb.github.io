const scriptURL =
  "https://script.google.com/macros/s/AKfycbwMUiff2KMH0IKnamLhJIK25dkDW55D4HNZPvXNQJza_fhAfMrpndjfUig3aZ-cH0PN3w/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("contact_msg");
const countdownMsg = document.getElementById("countdown_msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Disable the submit button while the countdown is active
  var myButton = document.getElementById("submitBtn");
  myButton.disabled = true;

  // Start the countdown timer
  let countdown = 2;
  countdownMsg.textContent = `Redirecting in ${countdown} seconds`;

  const countdownInterval = setInterval(() => {
    countdown -= 1;
    countdownMsg.textContent = `Redirecting in ${countdown} seconds`;
    if (countdown === 0) {
      clearInterval(countdownInterval);

      // Submit the form
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          msg.textContent = "Message successfully sent.";
          msg.style.color = "green";
          setTimeout(function () {
            msg.textContent = "";
          }, 5000);

          // Reset the form and enable the submit button
          form.reset();
          myButton.disabled = false;
          countdownMsg.textContent = "";
        })
        .catch((error) => {
          msg.textContent = "The message could not be sent!";
          msg.style.color = "red";
          setTimeout(function () {
            msg.textContent = "";
          }, 5000);
          myButton.disabled = false;
          countdownMsg.textContent = "";
        });
    }
  }, 1000);

  // Reset the countdown if the form is reset
  form.addEventListener("reset", () => {
    clearInterval(countdownInterval);
    countdownMsg.textContent = "";
    myButton.disabled = false;
  });
});
