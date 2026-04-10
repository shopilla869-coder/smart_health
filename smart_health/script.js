function getResponse() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let output = document.getElementById("response");

    if (input.includes("headache")) {
        output.innerHTML = "Drink water and rest. If it continues, see a doctor.";
    } 
    else if (input.includes("fever")) {
        output.innerHTML = "Take rest and monitor temperature. Visit doctor if high.";
    } 
    else if (input.includes("tired")) {
        output.innerHTML = "Get enough sleep and eat healthy food.";
    } 
    else {
        output.innerHTML = "Please enter a clear symptom.";
    }
}

function quick(symptom) {
    document.getElementById("userInput").value = symptom;
    getResponse();
}