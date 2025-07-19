// Get the form element
const form = document.querySelector('form');

// Add event listener to the form's submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the values from the input fields
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);

    // Calculate BMI and display result
    const resultDiv = document.querySelector('#result');

    if (weight > 0 && height > 0) {
        const bmi = weight*10000 / (height * height);
        resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        resultDiv.textContent = 'Please enter valid weight and height.';
    }
});
