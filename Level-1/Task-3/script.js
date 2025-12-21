function convertTemp() {
    const tempValue = document.getElementById("tempInput").value;
    const type = document.getElementById("tempType").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    resultDiv.innerHTML = "";
    errorDiv.innerHTML = "";

    // Validate input
    if (tempValue === "" || isNaN(tempValue)) {
        errorDiv.innerHTML = "Please enter a valid number!";
        return;
    }

    const temp = parseFloat(tempValue);
    let converted = "";

    if (type === "celsius") {
        const f = (temp * 9/5) + 32;
        const k = temp + 273.15;
        converted = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    } 
    else if (type === "fahrenheit") {
        const c = (temp - 32) * 5/9;
        const k = c + 273.15;
        converted = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    } 
    else if (type === "kelvin") {
        const c = temp - 273.15;
        const f = (c * 9/5) + 32;
        converted = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    resultDiv.innerHTML = `Result: <strong>${converted}</strong>`;
}
