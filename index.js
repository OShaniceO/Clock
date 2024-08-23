function updateTime() {
  let cityTimeZone =
    document.querySelector("#citySelect").value || "Africa/Johannesburg";
  let cityTime = moment().tz(cityTimeZone);

  let cityNameElement = document.querySelector("#cityName");
  let cityDateElement = document.querySelector("#cityDate");
  let cityTimeElement = document.querySelector("#cityTime");

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  cityNameElement.innerHTML = `${cityName}:`;

  cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
  cityTimeElement.innerHTML = cityTime.format("h:mm:ss A [UTC]Z");
}

function updateCity(event) {
  updateTime();
}

document.querySelector("#citySelect").addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
