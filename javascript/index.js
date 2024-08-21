document.getElementById("citySelect").addEventListener("change", function () {
  const city = this.value;
  if (city) {
    const currentTime = moment().tz(city).format("dddd, MMMM D, YYYY h:mm A");
    alert(`It is ${currentTime} in ${city}`);
  }
});
