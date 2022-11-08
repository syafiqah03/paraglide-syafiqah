function buttonClicked(){

    var city = document.getElementById("city_input").value;
    //link weather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
          //5 output the API into console
          console.log(data); 
          console.log("District: " + data.name);
          console.log("Temperature in Celsius: " + (data.main.temp - 273.15)); 
          console.log("Speed of wind: " + data.wind.speed); 
          console.log("Pressure: " + data.main.pressure);
          console.log("Humidity: " + data.main.humidity);
  
          document.getElementById("display").innerHTML= "District: " + data.name + "<br/>Temperature in Celsius: " + (data.main.temp - 273.15) +  "<br/>Speed of wind: " + data.wind.speed +  "<br/>Pressure: " + data.main.pressure +  "<br/>Humidity: " + data.main.humidity;
    } )
    //for error input at search
    .catch(err => alert("District has not available"))
  
  }