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
    let cityTime = moment
      .tz("Europe/Berlin")
      .format("HH:mm:ss [<small>]A[</small>]");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = `
    <div class="container">
      <h3>${cityName}</h3>
      <p class="date" id="${cityName}">${cityDate}</p>
      <p class="time" id="${cityName}">${cityTime}</p>
    </div>
    <a id="link" href="/">All cities</a>
  `;
  }, 1000);
}

let selectCity = document.querySelector("#cities");
selectCity.addEventListener("change", changeCity);

function singleInformation(event) {
  if (event.target.id === "berlin") {
    let cityName = "Berlin";
    let berlinDate = moment.tz("Europe/Berlin").format("MMMM Do YYYY");
    let berlinTime = moment
      .tz("Europe/Berlin")
      .format("HH:mm:ss [<small>]A[</small>]");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = `
    <div class="container">
      <h3>${cityName}</h3>
      <p class="date" ">${berlinDate}</p>
      <p class="time" ">${berlinTime}</p>
    </div>
    <a id="link" href="/">All cities</a>`;
  }
  if (event.target.id === "newYorkCity") {
    let cityName = "New York City";
    let nycDate = moment.tz("America/New_York").format("MMMM Do YYYY");
    let nycTime = moment
      .tz("America/New_York")
      .format("HH:mm:ss [<small>]A[</small>]");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = `
    <div class="container">
      <h3>${cityName}</h3>
      <p class="date" ">${nycDate}</p>
      <p class="time" ">${nycTime}</p>
    </div>
    <a id="link" href="/">All cities</a>`;
  }
  if (event.target.id === "auckland") {
    let cityName = "Auckland";
    let aucklandDate = moment.tz("Pacific/Auckland").format("MMMM Do YYYY");
    let aucklandTime = moment
      .tz("Pacific/Auckland")
      .format("HH:mm:ss [<small>]A[</small>]");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = `
    <div class="container">
      <h3>${cityName}</h3>
      <p class="date" ">${aucklandDate}</p>
      <p class="time" ">${aucklandTime}</p>
    </div>
    <a id="link" href="/">All cities</a>`;
  }
  if (event.target.id === "bali") {
    let cityName = "Bali";
    let baliDate = moment.tz("Asia/Makassar").format("MMMM Do YYYY");
    let baliTime = moment
      .tz("Asia/Makassar")
      .format("HH:mm:ss [<small>]A[</small>]");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = `
    <div class="container">
      <h3>${cityName}</h3>
      <p class="date" ">${baliDate}</p>
      <p class="time" ">${baliTime}</p>
    </div>
    <a id="link" href="/">All cities</a>`;
  }
}

let cityInformation = document.querySelectorAll("#city .container");
cityInformation.forEach(function (element) {
  element.addEventListener("click", singleInformation);
});
