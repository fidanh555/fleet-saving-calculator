document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculateButton').addEventListener('click', function () {
        console.log('Calculate button clicked');
        if (validateInputs()) {
            console.log('Inputs are valid');
            calculateSavings();
        } else {
            console.log('Inputs are not valid');
        }
    });
});

function calculateSavings() {
    console.log('Calculating savings...');

    const numVehicles = parseFloat(getInputValue('numVehicles'));
    console.log('numVehicles:', numVehicles);

    const mileage = parseFloat(getInputValue('mileage'));
    const fuelCost = parseFloat(getInputValue('fuelCost'));
    const iceConsumption = parseFloat(getInputValue('iceConsumption'));
    const evConsumption = parseFloat(getInputValue('evConsumption'));
    const electricityCost = parseFloat(getInputValue('electricityCost'));

    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Clear previous error messages

    if (!areInputsValid(numVehicles, mileage, fuelCost, iceConsumption, evConsumption, electricityCost)) {
        displayError('Please enter valid numerical values for all fields.');
        console.log('Validation failed');
        return;
    }

    const iceFuelConsumption = calculateFuelConsumption(iceConsumption, mileage);
    const evElectricityConsumption = calculateElectricityConsumption(evConsumption, mileage);

    const iceFuelCost = calculateFuelCost(iceFuelConsumption, fuelCost, numVehicles);
    const evElectricityCost = calculateElectricityCost(evElectricityConsumption, electricityCost, numVehicles);

    const totalSavings = iceFuelCost - evElectricityCost;
    const perVehicleSavings = totalSavings / numVehicles;
    console.log('Total Savings:', totalSavings);
    console.log('Per Vehicle Savings:', perVehicleSavings);

    displayResult(totalSavings, perVehicleSavings);
}

function areInputsValid(...values) {
    return values.every(value => !isNaN(value));
}

function displayError(errorMessage) {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = errorMessage;
}

function calculateFuelConsumption(iceConsumption, mileage) {
    return (iceConsumption * mileage) / 100;
}

function calculateElectricityConsumption(evConsumption, mileage) {
    return (evConsumption * mileage) / 100;
}

function calculateFuelCost(fuelConsumption, fuelCost, numVehicles) {
    return fuelConsumption * fuelCost * numVehicles;
}

function calculateElectricityCost(electricityConsumption, electricityCost, numVehicles) {
    return electricityConsumption * electricityCost * numVehicles;
}

function getInputValue(id) {
    return document.getElementById(id).value.trim();
}

function displayResult(totalSavings, perVehicleSavings) {
    document.getElementById('totalSavingsValue').textContent = roundToDecimal(totalSavings, 2);
    document.getElementById('perVehicleSavingsValue').textContent = roundToDecimal(perVehicleSavings, 2);
}

function roundToDecimal(value, decimalPlaces) {
    return parseFloat(value.toFixed(decimalPlaces));
}

function validateInputs() {
    // Add specific validation checks if needed
    return true; // Return false if any validation fails
}
