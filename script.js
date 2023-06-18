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


    });

});