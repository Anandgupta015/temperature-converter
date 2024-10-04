function convertTemperature() {
    const tempValue = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("unit").value;
    const toUnit = document.getElementById("convertTo").value;

    if (isNaN(tempValue)) {
        document.getElementById("result").innerHTML = "Please enter a valid number!";
        return;
    }

    let result;

    if (fromUnit === toUnit) {
        result = tempValue;
    } else {
 
        let tempInCelsius;
        if (fromUnit === "Celsius") {
            tempInCelsius = tempValue;
        } else if (fromUnit === "Fahrenheit") {
            tempInCelsius = (tempValue - 32) * 5 / 9;
        } else if (fromUnit === "Kelvin") {
            tempInCelsius = tempValue - 273.15;
        }

       
        if (toUnit === "Celsius") {
            result = tempInCelsius;
        } else if (toUnit === "Fahrenheit") {
            result = (tempInCelsius * 9 / 5) + 32;
        } else if (toUnit === "Kelvin") {
            result = tempInCelsius + 273.15;
        }
    }

    document.getElementById("result").innerHTML = `${tempValue}° ${fromUnit} is equal to ${result.toFixed(2)}° ${toUnit}`;
}
