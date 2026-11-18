
// PASADA Shared Components

document.addEventListener("DOMContentLoaded", function () {

    // Load Header
    fetch("components/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Header could not be loaded.");
            }

            return response.text();
        })
        .then(data => {
            document.getElementById("site-header").innerHTML = data;
        })
        .catch(error => console.error(error));


    // Load Footer
    fetch("components/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer could not be loaded.");
            }

            return response.text();
        })
        .then(data => {
            document.getElementById("site-footer").innerHTML = data;
        })
        .catch(error => console.error(error));

});
