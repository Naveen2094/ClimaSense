const apiKey = "796f8ea0bbbbfdd57069e1957a63afff";
let unit = "metric";

function showLoading(show) {
  document.getElementById("skeleton").classList.toggle("hidden", !show);
  document.getElementById("weather").classList.toggle("hidden", show);
}

function showError(msg) {
  document.getElementById("error").innerText = msg;
}

function toggleUnit() {
  unit = unit === "metric" ? "imperial" : "metric";
}

async function getWeatherByCity() {
  const city = document.getElementById("cityInput").value;
  if (!city) return showError("Enter a city name");
  saveHistory(city);
  fetchWeather(`q=${city}`);
}

function getLocationWeather() {
  navigator.geolocation.getCurrentPosition(pos => {
    fetchWeather(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
  }, () => showError("Location permission denied"));
}

async function fetchWeather(query) {
  try {
    showLoading(true);
    showError("");
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${query}&units=${unit}&appid=${apiKey}`
    );
    const data = await res.json();
    displayWeather(data);
    fetchForecast(data.coord.lat, data.coord.lon);
    setWeatherIcon(data.weather[0].main);

  } catch {
    showError("Unable to fetch weather");
  } finally {
    showLoading(false);
  }
}

function displayWeather(data) {
  document.getElementById("weather").classList.remove("hidden");
  document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
  document.getElementById("temperature").innerText =
    `${Math.round(data.main.temp)}°`;
  document.getElementById("condition").innerText = data.weather[0].main;
  document.getElementById("humidity").innerText = data.main.humidity;
  document.getElementById("wind").innerText = data.wind.speed;
  document.getElementById("pressure").innerText = data.main.pressure;
  document.getElementById("visibility").innerText = data.visibility / 1000;

  document.getElementById("sunrise").innerText =
    new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  document.getElementById("sunset").innerText =
    new Date(data.sys.sunset * 1000).toLocaleTimeString();
}

async function fetchForecast(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`
  );
  const data = await res.json();
  const container = document.getElementById("forecastCards");
  container.innerHTML = "";

  for (let i = 0; i < data.list.length; i += 8) {
    const day = data.list[i];
    const div = document.createElement("div");
    div.className = "forecast-card";
    div.innerHTML = `
      <p>${new Date(day.dt * 1000).toDateString()}</p>
      <p>${Math.round(day.main.temp)}°</p>
      <p>${day.weather[0].main}</p>
    `;
    container.appendChild(div);
  }
}

function saveHistory(city) {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  if (!history.includes(city)) history.unshift(city);
  history = history.slice(0, 5);
  localStorage.setItem("history", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById("historyList");
  list.innerHTML = "";
  const history = JSON.parse(localStorage.getItem("history")) || [];
  history.forEach(city => {
    const li = document.createElement("li");
    li.innerText = city;
    li.onclick = () => fetchWeather(`q=${city}`);
    list.appendChild(li);
  });
}

function setWeatherIcon(condition) {
  const icon = document.getElementById("weatherIcon");

  const icons = {
    Clear: `
      <circle cx="40" cy="40" r="18" stroke="#4cffb2" stroke-width="4" fill="none"/>
    `,
    Clouds: `
      <ellipse cx="40" cy="45" rx="22" ry="14"
        stroke="#4cffb2" stroke-width="4" fill="none"/>
    `,
    Rain: `
      <line x1="30" y1="50" x2="25" y2="65" stroke="#4cffb2" stroke-width="4"/>
      <line x1="45" y1="50" x2="40" y2="65" stroke="#4cffb2" stroke-width="4"/>
    `,
    Snow: `
      <text x="25" y="55" fill="#4cffb2" font-size="30">*</text>
    `
  };

  icon.innerHTML = icons[condition] || icons.Clear;
}

renderHistory();
