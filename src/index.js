setInterval(function () {
  let nycDate = moment.tz("America/New_York").format("MMMM Do YYYY");
  let nycDateElement = document.querySelector("#newYorkCity .date");
  nycDateElement.innerHTML = nycDate;

  let nycTime = moment
    .tz("America/New_York")
    .format("HH:mm:ss [<small>]A[</small>]");
  let nycTimeElement = document.querySelector("#newYorkCity .time");
  nycTimeElement.innerHTML = nycTime;
}, 1000);

setInterval(function () {
  let berlinDate = moment.tz("Europe/Berlin").format("MMMM Do YYYY");
  let berlinDateElement = document.querySelector("#berlin .date");
  berlinDateElement.innerHTML = berlinDate;

  let berlinTime = moment
    .tz("Europe/Berlin")
    .format("HH:mm:ss [<small>]A[</small>]");
  let berlinTimeElement = document.querySelector("#berlin .time");
  berlinTimeElement.innerHTML = berlinTime;
}, 1000);

setInterval(function () {
  let aucklandDate = moment.tz("Pacific/Auckland").format("MMMM Do YYYY");
  let aucklandDateElement = document.querySelector("#auckland .date");
  aucklandDateElement.innerHTML = aucklandDate;

  let aucklandTime = moment
    .tz("Pacific/Auckland")
    .format("HH:mm:ss [<small>]A[</small>]");
  let aucklandTimeElement = document.querySelector("#auckland .time");
  aucklandTimeElement.innerHTML = aucklandTime;
}, 1000);

setInterval(function () {
  let baliDate = moment.tz("Asia/Makassar").format("MMMM Do YYYY");
  let baliDateElement = document.querySelector("#bali .date");
  baliDateElement.innerHTML = baliDate;

  let baliTime = moment
    .tz("Asia/Makassar")
    .format("HH:mm:ss [<small>]A[</small>]");
  let baliTimeElement = document.querySelector("#bali .time");
  baliTimeElement.innerHTML = baliTime;
}, 1000);

function changeCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
    let cityTime = moment()
      .tz(cityTimeZone)
      .format("HH:mm:ss [<small>]A[</small>]");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = `
    <div class="container">
      <h3>${cityName}</h3>
      <p class="date" id="${cityName}">${cityDate}</p>
      <p class="time" id="${cityName}">${cityTime}</p>
    </div>
  `;
  }, 1000);
}

let selectCity = document.querySelector("#cities");
selectCity.addEventListener("change", changeCity);
