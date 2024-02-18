function calculateSavings() {
    // Get values from input fields
    const numVehicles = parseInt(document.getElementById('numVehicles').value);
    const mileage = parseFloat(document.getElementById('mileage').value);
    const fuelCost = parseFloat(document.getElementById('fuelCost').value);
    const iceConsumption = parseFloat(document.getElementById('iceConsumption').value);
    const evConsumption = parseFloat(document.getElementById('evConsumption').value);
    const electricityCost = parseFloat(document.getElementById('electricityCost').value);

    // Check if input values are valid numbers
    if (isNaN(numVehicles) || isNaN(mileage) || isNaN(fuelCost) || isNaN(iceConsumption) || isNaN(evConsumption) || isNaN(electricityCost)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate ICE fuel consumption and EV electricity consumption
    const iceFuelConsumption = (iceConsumption * mileage) / 100;
    const evElectricityConsumption = (evConsumption * mileage) / 100;

    // Calculate total fuel cost for ICE and EV
    const iceFuelCost = iceFuelConsumption * fuelCost * numVehicles;
    const evElectricityCost = evElectricityConsumption * electricityCost * numVehicles;

    // Calculate monthly savings
    const savings = iceFuelCost - evElectricityCost;

    // Display the result
    document.getElementById('result').innerHTML = `Monthly Savings: €${savings.toFixed(2)}`;
}