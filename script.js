let maxChars = 100;
function updateSliderValue() {
    var slider = document.getElementById("maxChars");
    var output = document.getElementById("sliderValue");
    output.innerHTML = slider.value;
    maxChars = slider.value;
}

const requestURL = `https://catfact.ninja/fact?max_length=${maxChars}`;
const button = document.getElementById("catfact");

button.addEventListener("click", function () {
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            displayCatFact(json);
        });
});

function displayCatFact(json) {
    let fact = json.fact;
    document.getElementById("factline").innerHTML = fact;
}
