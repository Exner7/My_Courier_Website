// get the delivery-costs form from the DOM
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    // prevent redirection
    event.preventDefault();

    // get the postcode input value from the DOM

    const postcodeStr = document.querySelector("#postcode").value;

    const postcode = parseInt(postcodeStr); // convert to integer

    // get the weight input value from the DOM

    const weightStr = document.querySelector("#weight").value;

    const weight = parseFloat(weightStr); // convert to float

    // define key variables

    let weightRate; // the rate for weight <= 5kg
    let overweight; // the rate for over 5kg kilograms
    let commission; // the commission amount

    // assign variables appropriately (based on postcode)

    if (postcode <= 20000) {

        weightRate = 0.50;
        overweight = 0.30;
        commission = 0.50;
    
    } else if (postcode <= 30000) {
    
        weightRate = 0.50;
        overweight = 0.20;
        commission = 1.00;
    
    } else if (postcode <= 40000) {
    
        weightRate = 1.00;
        overweight = 0.25;
        commission = 1.50;
    
    } else if (postcode <= 50000) {
    
        weightRate = 1.50;
        overweight = 0.20;
        commission = 2.00;
    
    } else {
    
        weightRate = 2.00;
        overweight = 0.15;
        commission = 2.50;
    
    }


    // calculate the cost corresponding to the parcel weight
    
    let weightCost;

    if (weight <= 5.000) {
        weightCost = weight * weightRate;
    } else {
        weightCost = 5.000 * weightRate + (weight - 5.000) * overweight;
    }

    let totalCost = weightCost + commission;

    // contruct and output the result to the document

    const output = document.querySelector("#output-container");

    output.innerHTML =
        `
            <p id="output">
                The costs for your delivery are
                <span id="cost">${totalCost.toFixed(2)}&euro;</span>
            </p>
        `;
    // set up the styles for the output
    const outputContainer = document.querySelector("#output-container");
    outputContainer.style.width = "85%";
    outputContainer.style.padding = "2.5%";
    // also alert the result
    alert(`The costs for your delivery are ${totalCost.toFixed(2)}€`);
});