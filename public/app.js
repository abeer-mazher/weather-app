let city = document.getElementById("city");
let showData = document.getElementById("showData")
const apiKey = "7ffa94f227d4fa0e6bfecadc46ae8c4c"
  async function getWeather(){
    console.log("helo")
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`

      let promise = await fetch(apiUrl);
      let data = await promise.json();
      console.log(data);
      showData.innerHTML =`
            <div>
              <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="" width="100px">
            </div>
            <div class="details">
             <p>${Math.round(data.main.temp)}°C</p>
             <p>${data.main.humidity}%</p>
             <p>${data.weather[0].main}</p>
             </div>
      `


}