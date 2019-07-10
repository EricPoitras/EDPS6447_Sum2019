// Set speech synthesis and narration option
function speech_synthesis_forecast(text){
    if(setting_narration == "deadpool" && setting_name != ""){
        var RyanReynoldsWisdom = [
            "Thank you Matthew McConaughey, your words are a treasure. Let's check the weather for you ",
            "Is dubstep still a thing? Let's check on the weather for ",
            "Go home, Sugar bear. Go home. And now the weather for pal ",
            "Your welcome, Canada. Let's check the weather for you  "
        ];
        text = RyanReynoldsWisdom[Math.floor(Math.random() * RyanReynoldsWisdom.length)] + setting_name + ". " + text;
    }
    var synth = new SpeechSynthesisUtterance();
    synth.volume = 1; // 0 to 1
    synth.rate = 1; // 0.1 to 10
    synth.pitch = 2; //0 to 2
    synth.text = text;
    speechSynthesis.speak(synth);
}

// Set icon for wind direction
function set_wind_now_icon(windDirection){
    //N S E W NW SW NE SE
    if(windDirection.match(/N/gi))
    {
        if(windDirection.match(/E/gi))
        {
            forecast_winddirection_pic.className = "";
            forecast_winddirection_pic.classList.add("wi","wi-wind","wi-towards-ne");
        }else if(windDirection.match(/W/gi)){
            forecast_winddirection_pic.className = "";
            forecast_winddirection_pic.classList.add("wi","wi-wind","wi-towards-nw");
        }else{
            forecast_winddirection_pic.className = "";
            forecast_winddirection_pic.classList.add("wi","wi-wind","wi-towards-n");
        }
    }else if(windDirection.match(/S/gi))
    {
        if(windDirection.match(/E/gi))
        {
            forecast_winddirection_pic.className = "";
            forecast_winddirection_pic.classList.add("wi","wi-wind","wi-towards-se");
        }else if(windDirection.match(/W/gi)){
            forecast_winddirection_pic.className = "";
            forecast_winddirection_pic.classList.add("wi","wi-wind","wi-towards-sw");
        }else{
            forecast_winddirection_pic.className = "";
            forecast_winddirection_pic.classList.add("wi","wi-wind","wi-towards-s");
        }
    }else if(windDirection.match(/E/gi)){
        forecast_winddirection_pic.className = "";
        forecast_winddirection_pic.classList.add("wi","wi-wind","wi-towards-e");
    }else if(windDirection.match(/W/gi)){
        forecast_winddirection_pic.className = "";
        forecast_winddirection_pic.classList.add("wi","wi-wind","wi-towards-w");
    }else{
        forecast_winddirection_pic.className = "";
        forecast_winddirection_pic.classList.add("wi","wi-na","d-inline");
    }
}

// Set forecast icon for hourly
function set_forecast_hourly_icon(data){
    var array_elements = [forecast_pic_list_1, forecast_pic_list_2, forecast_pic_list_3, forecast_pic_list_4, forecast_pic_list_5];
    var array_values = [data.properties.periods[hourly_forecast_index*5].shortForecast, data.properties.periods[hourly_forecast_index*5+1].shortForecast, data.properties.periods[hourly_forecast_index*5+2].shortForecast, data.properties.periods[hourly_forecast_index*5+3].shortForecast, data.properties.periods[hourly_forecast_index*5+4].shortForecast];
    for(var i = 0; i < array_elements.length; i++){
        if(array_values[i].match(/mostly|partly/gi)){
            array_elements[i].className = "";
            array_elements[i].classList.add("wi","wi-day-cloudy","d-inline","ml-auto");
        }else if(array_values[i].match(/clear|sunny/gi)){
            array_elements[i].className = "";
            array_elements[i].classList.add("wi","wi-day-sunny","d-inline","ml-auto");
        }else if(array_values[i].match(/cloudy/gi)){
            array_elements[i].className = "";
            array_elements[i].classList.add("wi","wi-cloudy","d-inline","ml-auto");
        }else{
            array_elements[i].className = "";
            array_elements[i].classList.add("wi","wi-na","d-inline","ml-auto");
        }
    }
}

// Set forecast icon for daily
function set_forecast_daily_icon(index, data){
    var array_elements = [forecast_pic_list_1, forecast_pic_list_2, forecast_pic_list_3, forecast_pic_list_4, forecast_pic_list_5];
    var array_values = [data.properties.periods[index].shortForecast, data.properties.periods[index+2].shortForecast, data.properties.periods[index+4].shortForecast, data.properties.periods[index+6].shortForecast, data.properties.periods[index+8].shortForecast];
    for(var i = 0; i < array_elements.length; i++){
        if(array_values[i].match(/mostly|partly/gi)){
            array_elements[i].className = "";
            array_elements[i].classList.add("wi","wi-day-cloudy","d-inline","ml-auto");
        }else if(array_values[i].match(/clear|sunny/gi)){
            array_elements[i].className = "";
            array_elements[i].classList.add("wi","wi-day-sunny","d-inline","ml-auto");
        }else if(array_values[i].match(/cloudy/gi)){
            array_elements[i].className = "";
            array_elements[i].classList.add("wi","wi-cloudy","d-inline","ml-auto");
        }else{
            array_elements[i].className = "";
            array_elements[i].classList.add("wi","wi-na","d-inline","ml-auto");
        }
    }
}

// Set forecast icon for now
function set_forecast_now_icon(shortForecast){
    if(shortForecast.match(/mostly|partly/gi)){
        forecast_pic.className = "";
        forecast_pic.classList.add("wi","wi-day-cloudy","d-inline");
    }else if(shortForecast.match(/clear|sunny/gi)){
        forecast_pic.className = "";
        forecast_pic.classList.add("wi","wi-day-sunny","d-inline");
    }else if(shortForecast.match(/cloudy/gi)){
        forecast_pic.className = "";
        forecast_pic.classList.add("wi","wi-cloudy","d-inline");
    }else{
        forecast_pic.className = "";
        forecast_pic.classList.add("wi","wi-na","d-inline");
    }
}

// Example of a helper function with return statement 
function convert_to_celsius(fahrenheit){
    var celsius = (fahrenheit - 32)*.5556;
    return celsius.toFixed(1);
}

// Set forecast for now
function set_forecast_now(data){
    console.log(data.properties.periods[0]);
    if(setting_temp == "fahrenheit"){
        forecast_temperature.textContent = data.properties.periods[0].temperature;
        forecast_unit.textContent = data.properties.periods[0].temperatureUnit;
    }else{
        forecast_temperature.textContent = convert_to_celsius(data.properties.periods[0].temperature);
        forecast_unit.textContent = "C";
    }
    forecast_name.textContent = data.properties.periods[0].name;
    forecast_short.textContent = data.properties.periods[0].shortForecast;
    forecast_winddirection.textContent = data.properties.periods[0].windDirection;
    forecast_windspeed.textContent = data.properties.periods[0].windSpeed;
    set_forecast_now_icon(data.properties.periods[0].shortForecast);
    // TO DO forecast_winddirection_pic - N S E W NW SW NE SE
    set_wind_now_icon(data.properties.periods[0].windDirection);
    // Set the view
    if(setting_speech == "speech"){
        console.log(setting_speech);
        speech_synthesis_forecast(data.properties.periods[0].detailedForecast);
    }
    router("view_forecast");
    set_view_now();
}

// Set forecast daily
function set_forecast_daily(data){
    console.log(data.properties.periods);
    var index;
    if(data.properties.periods[0].name == "Tonight"){
        index = 1;
    }else{
        index = 0;
    }
    forecast_name_list_1.textContent = data.properties.periods[index].name;
    forecast_name_list_2.textContent = data.properties.periods[index+2].name;
    forecast_name_list_3.textContent = data.properties.periods[index+4].name;
    forecast_name_list_4.textContent = data.properties.periods[index+6].name;
    forecast_name_list_5.textContent = data.properties.periods[index+8].name;
    
    if(setting_temp == "fahrenheit"){
        forecast_temperature_list_1.textContent = data.properties.periods[index].temperature;
        forecast_unit_list_1.textContent = data.properties.periods[index].temperatureUnit;
        forecast_temperature_list_2.textContent = data.properties.periods[index+2].temperature;
        forecast_unit_list_2.textContent = data.properties.periods[index+2].temperatureUnit;
        forecast_temperature_list_3.textContent = data.properties.periods[index+4].temperature;
        forecast_unit_list_3.textContent = data.properties.periods[index+4].temperatureUnit;
        forecast_temperature_list_4.textContent = data.properties.periods[index+6].temperature;
        forecast_unit_list_4.textContent = data.properties.periods[index+6].temperatureUnit;
        forecast_temperature_list_5.textContent = data.properties.periods[index+8].temperature;
        forecast_unit_list_5.textContent = data.properties.periods[index+8].temperatureUnit;
    }else{
        forecast_temperature_list_1.textContent = convert_to_celsius(data.properties.periods[index].temperature);
        forecast_unit_list_1.textContent = "C";
        forecast_temperature_list_2.textContent = convert_to_celsius(data.properties.periods[index+2].temperature);
        forecast_unit_list_2.textContent = "C";
        forecast_temperature_list_3.textContent = convert_to_celsius(data.properties.periods[index+4].temperature);
        forecast_unit_list_3.textContent = "C";
        forecast_temperature_list_4.textContent = convert_to_celsius(data.properties.periods[index+6].temperature);
        forecast_unit_list_4.textContent = "C";
        forecast_temperature_list_5.textContent = convert_to_celsius(data.properties.periods[index+8].temperature);
        forecast_unit_list_5.textContent = "C";
    }
    
    set_forecast_daily_icon(index, data);
    // Set the view
    router("view_forecast");
    set_view_daily();
}

// Set forecast hourly
function set_forecast_hourly(data){
    console.log(data.properties.periods);
    forecast_name_list_1.textContent = data.properties.periods[hourly_forecast_index*5].startTime.substring(11,16);
    forecast_name_list_2.textContent = data.properties.periods[hourly_forecast_index*5+1].startTime.substring(11,16);
    forecast_name_list_3.textContent = data.properties.periods[hourly_forecast_index*5+2].startTime.substring(11,16);
    forecast_name_list_4.textContent = data.properties.periods[hourly_forecast_index*5+3].startTime.substring(11,16);
    forecast_name_list_5.textContent = data.properties.periods[hourly_forecast_index*5+4].startTime.substring(11,16);
    
    if(setting_temp == "fahrenheit"){
        forecast_temperature_list_1.textContent = data.properties.periods[hourly_forecast_index*5].temperature;
        forecast_unit_list_1.textContent = data.properties.periods[hourly_forecast_index*5].temperatureUnit;
        forecast_temperature_list_2.textContent = data.properties.periods[hourly_forecast_index*5+1].temperature;
        forecast_unit_list_2.textContent = data.properties.periods[hourly_forecast_index*5+1].temperatureUnit;
        forecast_temperature_list_3.textContent = data.properties.periods[hourly_forecast_index*5+2].temperature;
        forecast_unit_list_3.textContent = data.properties.periods[hourly_forecast_index*5+2].temperatureUnit;
        forecast_temperature_list_4.textContent = data.properties.periods[hourly_forecast_index*5+3].temperature;
        forecast_unit_list_4.textContent = data.properties.periods[hourly_forecast_index*5+3].temperatureUnit;
        forecast_temperature_list_5.textContent = data.properties.periods[hourly_forecast_index*5+4].temperature;
        forecast_unit_list_5.textContent = data.properties.periods[hourly_forecast_index*5+4].temperatureUnit;
    }else{
        forecast_temperature_list_1.textContent = convert_to_celsius(data.properties.periods[hourly_forecast_index*5].temperature);
        forecast_unit_list_1.textContent = "C";
        forecast_temperature_list_2.textContent = convert_to_celsius(data.properties.periods[hourly_forecast_index*5+1].temperature);
        forecast_unit_list_2.textContent = "C";
        forecast_temperature_list_3.textContent = convert_to_celsius(data.properties.periods[hourly_forecast_index*5+2].temperature);
        forecast_unit_list_3.textContent = "C";
        forecast_temperature_list_4.textContent = convert_to_celsius(data.properties.periods[hourly_forecast_index*5+3].temperature);
        forecast_unit_list_4.textContent = "C";
        forecast_temperature_list_5.textContent = convert_to_celsius(data.properties.periods[hourly_forecast_index*5+4].temperature);
        forecast_unit_list_5.textContent = "C";
    }
    
    set_forecast_hourly_icon(data);
    // Set the view
    router("view_forecast");
    set_view_hourly();
}

// Define the function to get the forecast using a controller
function set_forecast(time, data){
    // Log value of time parameter
    console.log(time);
    // Log value of data parameter
    console.log(data);
    // Set the values of the forecast
    if(time == "now"){
        set_forecast_now(data);
    }else if(time == "daily"){
        set_forecast_daily(data);
    }else if(time == "hourly"){
        set_forecast_hourly(data);
    }else{
        console.log("Error - type of forecast not recognized");
        router("view_landing");
    } 
}

// 3rd call to the API to get standard forecast
function get_forecast_APIdata(url_endpoint){
    console.log(url_endpoint);
    fetch(url_endpoint)
        .then((resp) => resp.json())
        .then(function(data){
        // Code to handle the data - converted into JSON format - from the API
        console.log(data);
        // Call API endpoints to store standard forecast
        forecast_standard_data = data;
        console.log(forecast_standard_data);
        // Call the function to get data from the API_data array
        set_forecast("now",forecast_standard_data);
    }).catch(function(error){
        // Code to handle an error from the API
        console.log(error);
    });
}

// 2nd call to the API to get hourly forecast
function get_forecast_hourly_APIdata(url_endpoint){
    console.log(url_endpoint);
    fetch(url_endpoint)
        .then((resp) => resp.json())
        .then(function(data){
        // Code to handle the data - converted into JSON format - from the API
        console.log(data);
        // Call API endpoints to store hourly forecast
        forecast_hourly_data = data;
        console.log(forecast_hourly_data);
    }).catch(function(error){
        // Code to handle an error from the API
        console.log(error);
    });
}

// 1st call to the API to get grid coordinates
function convert_geo_to_grid(lon, lat){
    // Define the url endpoint for the API with 2 parameters - latitude and longitude - to get grid coordinates
    var apiurl = 'https://api.weather.gov/points/'+lat+','+lon;
    console.log(apiurl);
    // Call the fetch function passing the url of the API as a parameter
    fetch(apiurl)
        .then((resp) => resp.json())
        .then(function(data){
        // Code to handle the data - converted into JSON format - from the API
        console.log(data);
        // Call API endpoints with grid coordinates
        get_forecast_hourly_APIdata(data.properties.forecastHourly);
        get_forecast_APIdata(data.properties.forecast);
    }).catch(function(error){
        // Code to handle an error from the API
        console.log(error);
    });
}

// Object that holds property values for geolocation API
var Geo_options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

// Function to handle success event from geolocation API
function Geo_success(pos) {
  // Log the geolocation data from the API
  var crd = pos.coords;
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  // Get the forecast data from the API
  convert_geo_to_grid(crd.longitude,crd.latitude);
}

// Function to handle error from geolocation API
function Geo_error(err) {
  // Log error message
  console.warn(`ERROR(${err.code}): ${err.message}`);
  // Route to landing page
  router("view_landing");
}

// Get the data from the API database
function API_request(){
     // Set the loading screen using router
     router("view_loading");
     // Request navigator API access to geolocation data
     navigator.geolocation.getCurrentPosition(Geo_success, Geo_error, Geo_options);
}

// Get Settings
function get_settings(){
    
    setting_name = input_name_textbox.value;
    console.log(setting_name);
    
    if(input_speech_check.checked == true){
        setting_speech = "speech";
    }else{
        setting_speech = "none";
    }
    console.log(setting_speech);
    
    if(input_temp_1.checked == true){
        setting_temp = "celsius";
    }else if(input_temp_2.checked == true){
        setting_temp = "fahrenheit";
    }else{
        setting_temp = "both";
    } 
    console.log(setting_temp);
    
    setting_narration = input_narration_dropdown.value;
    console.log(setting_narration);
}

// Set View for Current Forecast
function set_view_now(){
    // Show only current forecast
    view_forecast_now.classList.remove("d-none");
    view_forecast_list.classList.add("d-none");
    // Hide previous and next buttons
    input_btn_previous.classList.add("d-none");
    input_btn_next.classList.add("d-none");
}

function set_view_daily(){
    // Show only list forecast
    view_forecast_list.classList.remove("d-none");
    view_forecast_now.classList.add("d-none");
    // Hide previous and next buttons
    input_btn_previous.classList.add("d-none");
    input_btn_next.classList.add("d-none");
}

// Set View for List Forecast
function set_view_hourly(){
    // Show only list forecast
    view_forecast_list.classList.remove("d-none");
    view_forecast_now.classList.add("d-none");
    // Show previous and next buttons
    input_btn_previous.classList.remove("d-none");
    input_btn_next.classList.remove("d-none");
    
    if(hourly_forecast_index <= 0){
        document.getElementById("page_item_previous").classList.add("disabled");
    }else if(hourly_forecast_index >= 4){
        document.getElementById("page_item_next").classList.add("disabled");
    }else{
        document.getElementById("page_item_previous").classList.remove("disabled");
        document.getElementById("page_item_next").classList.remove("disabled");
    }
}



