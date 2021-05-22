
document.getElementById("submit").addEventListener("click", event => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value;

    const emptyInputs = [];

    if (name.length === 0) {
        emptyInputs.push ("name");
    }
    
    if (email.length === 0) {
        emptyInputs.push ("email");
    }
    
    if (topic.length === 0) {
        emptyInputs.push ("topic");
    }
    
    if (message.length === 0) {
        emptyInputs.push ("message");
    }

    if (emptyInputs.length === 0) {
        return;
    }

    let alertMessage = "The fields ";

    for (let input of emptyInputs) {

        alertMessage += (input + ", ");
    }

    alert(alertMessage + "are not filled");
});