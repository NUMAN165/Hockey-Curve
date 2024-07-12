document.getElementById('calculate-button').addEventListener('click', calculateEMI);

function calculateEMI() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 12 / 100;
    const duration = parseInt(document.getElementById('duration').value);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(duration) || principal <= 0 || interestRate <= 0 || duration <= 0) {
        alert("Please enter valid inputs!");
        return;
    }

    const emi = (principal * interestRate * Math.pow(1 + interestRate, duration)) / (Math.pow(1 + interestRate, duration) - 1);
    document.getElementById('emi-result').textContent = emi.toFixed(2);
}
