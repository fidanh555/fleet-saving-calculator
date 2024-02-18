function calculateSavings() {
    const numVehicles = parseInt(document.getElementById('numVehicles').value);
    const mileage = parseFloat(document.getElementById('mileage').value);
    const fuelCost = parseFloat(document.getElementById('fuelCost').value);
    const iceConsumption = parseFloat(document.getElementById('iceConsumption').value);
    const evConsumption = parseFloat(document.getElementById('evConsumption').value);
    const electricityCost = parseFloat(document.getElementById('electricityCost').value);

    if (isNaN(numVehicles) || isNaN(mileage) || isNaN(fuelCost) || isNaN(iceConsumption) || isNaN(evConsumption) || isNaN(electricityCost)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const iceFuelConsumption = (iceConsumption * mileage) / 100;
    const evElectricityConsumption = (evConsumption * mileage) / 100;

    const iceFuelCost = iceFuelConsumption * fuelCost * numVehicles;
    const evElectricityCost = evElectricityConsumption * electricityCost * numVehicles;

    const savings = iceFuelCost - evElectricityCost;

    document.getElementById('result').innerHTML = `Monthly Savings: €${savings.toFixed(2)}`;
}

// Add event listener when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the button
    document.getElementById('calculateButton').addEventListener('click', calculateSavings);
});