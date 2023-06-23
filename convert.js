// Get the input and result elements
const celsiusInput = document.getElementById('celsiusInput');
const resultElement = document.getElementById('result');

// Add event listener to the convert button
const convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener('click', convertCelsiusToFahrenheit);

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        resultElement.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultElement.textContent = 'Invalid input';
    }
}

// Get the input and result elements for Fahrenheit to Celsius conversion
const fahrenheitInput = document.getElementById('fahrenheitInput');
const fahrenheitResultElement = document.getElementById('fahrenheitResult');
const convertFahrenheitBtn = document.getElementById('convertFahrenheitBtn');
convertFahrenheitBtn.addEventListener('click', convertFahrenheitToCelsius);

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        fahrenheitResultElement.textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
        fahrenheitResultElement.classList.add('result1');
    } else {
        fahrenheitResultElement.textContent = 'Invalid input';
        fahrenheitResultElement.classList.add('result1');
        



    }
}
