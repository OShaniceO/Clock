document.getElementById("citySelect").addEventListener("change", function () {
  const citySelect = document.getElementById("citySelect");
  const selectedCity = citySelect.options[citySelect.selectedIndex].text;
  const cityName = document.getElementById("cityName");
  const cityTime = document.getElementById("cityTime");
  const cityDate = document.getElementById("cityDate");

  if (selectedCity !== "--Select a City--") {
    cityName.textContent = `${selectedCity}:`;

    let timeString = "12:00 PM UTC+0";
    let dateString = "August 21, 2024";
    switch (citySelect.value) {
      case "Europe/Paris":
        timeString = "12:00 PM UTC+1";
        dateString = "August 21, 2024";
        break;
      case "Asia/Tokyo":
        timeString = "08:00 PM UTC+9";
        dateString = "August 21, 2024";
        break;
      case "Australia/Sydney":
        timeString = "09:00 PM UTC+10";
        dateString = "August 21, 2024";
        break;
    }

    cityTime.textContent = timeString;
    cityDate.textContent = dateString;
  }
});
