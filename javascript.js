const wageButton = document.querySelector("#wage-button");
const wageResult = document.querySelector("#wage-result");

wageButton.addEventListener("click", async () => {
const response = await fetch("https://refnusa.dev/v1/wages/ump?year=2026&province_code=51")

const data = await response.json();
console.log(data);

});