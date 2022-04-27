$(function () {

    fetch("./html/header.html") //adding HTML page (header) in general page (index)
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
    });
})