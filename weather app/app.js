// Who ever is watching this is my first js file so sorry the messy coede

//In this line the event listiner is used to listen for the click event on the button
document.getElementById("btn").addEventListener("click", () => {
  //gettting the input from user 
  let input = document.getElementById("input").value;
  //storing the api form open weather website for free 
  const apikey = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=09bdbf11cb17c9daf921b673f2dd0a2d&units=metric`;
  //selecting the weather icon
  const weatherIcon = document.querySelector(".weather-icon");
  //selcting humidity
  const Humidity = document.querySelector(".humidity");
//city
  const location = document.querySelector(".city");
//wind
  const speed = document.querySelector(".wind");
  
// here is checkweather function which is called when the button is clicked for the fectapi
  async function checkweather() {
    const response = await fetch(apikey);
    // here is the data which is fetched from the api
    //if the user gave the wrong location it will show the error message
    if(response.status === 404){
      document.querySelector(".error").style.display = 'block';
      document.querySelectorAll(".weather").style.display ='none';
    }else{
//if the location is valid then these code will execute
      var data = await response.json();
      // I am not willing to remove this because this line hepls to print in console which help to know the data which is fetched from the api
      console.log(data);
      // here is the code which is used to print the weather icon
      document.getElementById("temp").innerText = parseInt(data.main.temp) + "°C";//give the data about the temperature
      //if the data is properly fetch or not this line will check and continue the progrmme to run 
      if (data && data.weather && data.weather.length > 0) {
        // here is the code which is used to print the weather icon
        if (data.weather[0].main === 'Clouds') {
          weatherIcon.src = "images/clouds.png";
        } 
        else if (data.weather[0].main === 'Drizzle') {
          weatherIcon.src = "images/drizzle.png";
        } 
        else if (data.weather[0].main === 'Mist') {
          weatherIcon.src = "images/mist.png";
        } 
        else if (data.weather[0].main === 'Clear') {
          weatherIcon.src = "images/clear.png";
        } 
        else if (data.weather[0].main === 'Rain') {
          weatherIcon.src = "images/rain.png"
        } 
        else if (data.weather[0].main === 'Snow') {
          weatherIcon.src = "images/snow.png"
        }
        //In this line we are give info to the users if the user is giving valid location
        document.querySelector(".weather").style.display = 'block';
      } else {
        //this givs of the api is not fetched then this line will execute and say data unavailable 
        document.getElementById("icon").innerHTML = 'Data is not available';
      }
      location.innerText = input; //it will print the location which is given by the user
      Humidity.innerText = data.main.humidity + '%';//it will print the humidity 
      speed.innerText = data.wind.speed + 'm/s';//It will print the speed of the wind in the DOM(Document Object Model)
    }

  }
  //executing the checkweather function when the button is clicked
  checkweather();
});

