var searchFormEl = document.querySelector("#search-form");

function handleSearchFormSubmit(event) {
    event.preventDefault();
    console.log("My form is submitting!");

    var searchInput = document.querySelector("#search-input");
    var selectInput = document.querySelector("#select");

    if (!searchInput) {
        console.log("error!")
        return;
    };

    var url = ".search-"
}