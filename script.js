function calculateSavings() {
    console.log("Button clicked!"); // Add this line to check if the button click event is registered

    const numVehicles = parseInt(getInputValue('numVehicles'));
    const mileage = parseFloat(getInputValue('mileage'));
    const fuelCost = parseFloat(getInputValue('fuelCost'));
    const iceConsumption = parseFloat(getInputValue('iceConsumption'));
    const evConsumption = parseFloat(getInputValue('evConsumption'));
    const electricityCost = parseFloat(getInputValue('electricityCost'));

    if (isNaN(numVehicles) || isNaN(mileage) || isNaN(fuelCost) || isNaN(iceConsumption) || isNaN(evConsumption) || isNaN(electricityCost)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const iceFuelConsumption = calculateFuelConsumption(iceConsumption, mileage);
    const evElectricityConsumption = calculateFuelConsumption(evConsumption, mileage);

    const iceFuelCost = calculateFuelCost(iceFuelConsumption, fuelCost, numVehicles);
    const evElectricityCost = calculateElectricityCost(evElectricityConsumption, electricityCost, numVehicles);

    const savings = iceFuelCost - evElectricityCost;

    displayResult(`Monthly Savings: €${savings.toFixed(2)}`);
}

function getInputValue(id) {
    return document.getElementById(id).value.trim();
}

function calculateFuelConsumption(consumption, mileage) {
    return (consumption * mileage) / 100;
}

function calculateFuelCost(fuelConsumption, fuelCost, numVehicles) {
    return fuelConsumption * fuelCost * numVehicles;
}

function calculateElectricityCost(electricityConsumption, electricityCost, numVehicles) {
    return electricityConsumption * electricityCost * numVehicles;
}

function displayResult(resultText) {
    document.getElementById('result').innerHTML = resultText;
}

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the button
    document.getElementById('calculateButton').addEventListener('click', calculateSavings);
});
