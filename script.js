addEventListener("DOMContentLoaded", function() {
    


    // get submit button
    const submit = document.getElementById("submit");
    // add event listener to submit button
    submit.addEventListener("click", function() {
        console.log("submit button clicked");
        // get input value
        const input = document.getElementById("input").value;
        
        console.log(input);

        // add qr to output
        const output = document.getElementById("output");

        // clear output
        output.innerHTML = "";

        // create qr code
        qr_src = `https://api.qrserver.com/v1/create-qr-code/?data=${input}&amp;size=100x100`

        // create img element
        const img = document.createElement("img");
        img.src = qr_src;
        img.alt = "QR Code";

        // append img to output
        output.appendChild(img);

        // clear input
        document.getElementById("input").value = "";


    });

});