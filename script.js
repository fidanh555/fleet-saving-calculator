function calculateSavings() {
    const numVehicles = parseFloat(getInputValue('numVehicles'));
    const mileage = parseFloat(getInputValue('mileage'));
    const fuelCost = parseFloat(getInputValue('fuelCost'));
    const iceConsumption = parseFloat(getInputValue('iceConsumption'));
    const evConsumption = parseFloat(getInputValue('evConsumption'));
    const electricityCost = parseFloat(getInputValue('electricityCost'));

    if (!areInputsValid(numVehicles, mileage, fuelCost, iceConsumption, evConsumption, electricityCost)) {
        alert('Please enter valid numerical values for all fields.');
        return;
    }

    const iceFuelConsumption = calculateFuelConsumption(iceConsumption, mileage);
    const evElectricityConsumption = calculateElectricityConsumption(evConsumption, mileage);

    const iceFuelCost = calculateFuelCost(iceFuelConsumption, fuelCost, numVehicles);
    const evElectricityCost = calculateElectricityCost(evElectricityConsumption, electricityCost, numVehicles);

    const totalSavings = iceFuelCost - evElectricityCost;
    const perVehicleSavings = totalSavings / numVehicles;

    displayResult(totalSavings, perVehicleSavings);
}

function areInputsValid(...values) {
    return values.every(value => !isNaN(value));
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

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculateButton').addEventListener('click', function () {
        if (validateInputs()) {
            calculateSavings();
        }
    });
    
    function validateInputs() {
        // Add more specific validation checks if needed
        return true; // Return false if any validation fails
    }
});
