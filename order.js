const TO_ADDRESS = "orders@examplewebsite142.com";
const form = document.querySelector("#order-form");

function buildMailto() {
    const size = document.querySelector('input[name="size"]:checked').id;
    const shirt = document.querySelector("#shirt-variant").textContent;

    const subject = "Customer Order";

    const body =
    
        "Shirt: " + shirt + "\r\n" +
        "Size: " + size + "\r\n\r\n" +
        "Order will be processed once E-Mail is received. Thank you for shopping with us!";


        return (
            "mailto:" + TO_ADDRESS +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body)
        );
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = buildMailto();
}

)
