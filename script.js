document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let sounding = parseFloat(document.getElementById('sounding').value);
    let density = parseFloat(document.getElementById('density').value);
    let tcf = parseFloat(document.getElementById('tcf').value);

    let volume = sounding * 0.1; // Example calculation (Replace with real sounding table data)
    let correctedVolume = volume * tcf;
    let mass = correctedVolume * density;

    document.getElementById('result').innerText = `Corrected Volume: ${correctedVolume.toFixed(2)} m³, Mass: ${mass.toFixed(2)} kg`;
});
