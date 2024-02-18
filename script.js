function calculateSavings() {
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

    const iceFuelConsumption = (iceConsumption * mileage) / 100;
    const evElectricityConsumption = (evConsumption * mileage) / 100;

    const iceFuelCost = iceFuelConsumption * fuelCost * numVehicles;
    const evElectricityCost = evElectricityConsumption * electricityCost * numVehicles;

    const totalSavings = iceFuelCost - evElectricityCost;
    const perVehicleSavings = totalSavings / numVehicles;

    displayResult(totalSavings, perVehicleSavings);
}

function getInputValue(id) {
    return document.getElementById(id).value.trim();
}

function displayResult(totalSavings, perVehicleSavings) {
    document.getElementById('totalSavingsValue').textContent = totalSavings.toFixed(2);
    document.getElementById('perVehicleSavingsValue').textContent = perVehicleSavings.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculateButton').addEventListener('click', calculateSavings);
});
