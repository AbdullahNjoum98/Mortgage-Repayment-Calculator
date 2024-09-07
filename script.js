document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("result").style.display = "none";
  document
    .getElementById("calculate-btn")
    .addEventListener("click", calculateClicked);
});

function calculateClicked(event) {
  event.preventDefault();
  document.getElementById('form').reportValidity();
  const interestRateInput = document.getElementById("interest-rate");
  const mortageTermInput = document.getElementById("mortage-term");
  const mortageAmountInput = document.getElementById("mortage-amount");
  if (
    mortageAmountInput.value.length &&
    mortageTermInput.value.length &&
    interestRateInput.value.length
  ) {
    document.getElementById("result").style.display = "flex";
    document.getElementById("no-result").style.display = "none";

    document.getElementById("monthyRepayments").textContent =
     `€${(+interestRateInput.value * +mortageTermInput.value +
        +mortageAmountInput.value) / 12}`;

    document.getElementById("totalRepayments").textContent =
      `€${+interestRateInput.value * +mortageTermInput.value +
      +mortageAmountInput.value}`;
  }
}

function clearAll() {
  document.getElementById("result").reset();
}
