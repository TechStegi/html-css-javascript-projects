/** @format */

const API_KEY = process.env.API_KEY;
require("dotenv").config();

const weatherDataEl = document.getElementById("weather_data");
const cityInputEl = document.getElementById("city_input");
const buttonEl = document.getElementById("button");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${Math.round(data.main.humidity)}%`,
      `Wind Speed: ${Math.round(data.wind.speed)}m/s`,
    ];
    console.log(data);
    document.querySelector(".container").style.height = "550px";
    document.querySelector(
      ".icon"
    ).innerHTML = `<img alt="Weather Icon" src="http://openweathermap.org/img/wn/${icon}@4x.png">`;
    document.querySelector(".temperature").innerHTML = `${temperature}°C`;
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    document.querySelector(".container").style.height = "550px";
    document.querySelector(".icon").innerHTML = "";
    document.querySelector(".temperature").innerHTML = "";
    document.querySelector(".description").innerHTML =
      "An error happened, please try again later.";
    document.querySelector(".details").innerHTML = "";
  }
}
