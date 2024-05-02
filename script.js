addEventListener("DOMContentLoaded", function() {
    


    // check for form submission
    document.getElementById("qr-form").addEventListener("submit", function(e) {
        // prevent default form submission
        e.preventDefault();

        // get form data
        var formdata = new FormData(this);

        // convert colors to hex
        formdata.set("bgcolor", formdata.get("bgcolor").replace("#", ""));
        formdata.set("color", formdata.get("color").replace("#", ""));

        // form url
        var url = "https://api.qrserver.com/v1/create-qr-code/";

        // fetch url using parameters
        var img_src= url + "?" + new URLSearchParams(formdata);

        console.log(img_src);

        // display image
        document.getElementById("qr-img").src = img_src;

        document.getElementById("output-div").style.display = "block";

        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];


        // When the user clicks on the button, open the modal

        modal.style.display = "block";

    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        };
        
        

    });



    // ---------------- QR CODE MODAL ----------------

    // Get the modal, button and span
    var generate_btn = document.getElementById("qr-btn");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
    modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
    modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    };




});