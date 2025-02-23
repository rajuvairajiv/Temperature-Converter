document.getElementById("convertButton").addEventListener("click", function () {
    const temperature = parseFloat(document.getElementById("temperatureInput").value);
    const conversionType = document.getElementById("conversionType").value.trim(); // Trim extra spaces
    const resultDiv = document.getElementById("result");




    resultDiv.innerHTML = "";

    if (isNaN(temperature)) {
        resultDiv.innerHTML = "Please enter a valid number for the temperature";
        return;
    }

    let convertedTemperature;
    if (conversionType === "tocelsius") {
        convertedTemperature = (temperature - 32) * (5 / 9);
        resultDiv.innerHTML = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
    } else if (conversionType === "tofahrenheit") {
        convertedTemperature = (temperature * (9 / 5)) + 32;
        resultDiv.innerHTML = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
    } else {
        resultDiv.innerHTML = "Invalid conversion type selected.";
    }
});

document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("temperatureInput").value = "";
    resultDiv = "";
    resultDiv.innerHTML = "";
    document.getElementById("result").innerHTML = "";
})