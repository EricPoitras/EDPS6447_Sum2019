// UI Views
var section_content = document.getElementById("section_content");
//console.log(section_content);
var view_landing = document.getElementById("view_landing");
//console.log(view_landing);
var view_loading = document.getElementById("view_loading");
//console.log(view_loading);
var view_forecast = document.getElementById("view_forecast");
//console.log(view_forecast);
var view_settings = document.getElementById("view_settings");

// UI Components (Nav Icons)
var input_ico_locate = document.getElementById("input_ico_locate");
//console.log(input_ico_locate);

// UI Component (Buttons)
var input_btn_now = document.getElementById("input_btn_now");
//console.log(input_btn_now);
var input_btn_hourly = document.getElementById("input_btn_hourly");
//console.log(input_btn_hourly);
var input_btn_daily = document.getElementById("input_btn_daily");
//console.log(input_btn_daily);
var input_btn_previous = document.getElementById("input_btn_previous");
//console.log(input_btn_previous);
var input_btn_next = document.getElementById("input_btn_next");
//console.log(input_btn_next);
var input_btn_getforecast = document.getElementById("input_btn_getforecast");
//console.log(input_btn_getforecast);
var input_btn_settings = document.getElementById("input_btn_settings");
//console.log(input_btn_settings);
var input_btn_save = document.getElementById("input_btn_save");

// Settings Variables
var input_speech_check = document.getElementById("input_speech_check");
var setting_speech = "none";
var input_narration_dropdown = document.getElementById("input_narration_dropdown");
var setting_narration = "none";
var input_temp_1 = document.getElementById("input_temp_1");
var input_temp_2 = document.getElementById("input_temp_2");
var input_temp_3 = document.getElementById("input_temp_3");
var setting_temp = "fahrenheit";
var input_name_textbox = document.getElementById("input_name_textbox");
var setting_name = "";

// Forecast Variables
var view_forecast_now = document.getElementById("view_forecast_now");
var view_forecast_list = document.getElementById("view_forecast_list");

var forecast_pic = document.getElementById("forecast_pic");
var forecast_temperature = document.getElementById("forecast_temperature");
var forecast_unit = document.getElementById("forecast_unit");
var forecast_name = document.getElementById("forecast_name");
var forecast_short = document.getElementById("forecast_short");
var forecast_winddirection_pic = document.getElementById("forecast_winddirection_pic");
var forecast_winddirection = document.getElementById("forecast_winddirection");
var forecast_windspeed = document.getElementById("forecast_windspeed");

var forecast_name_list_1 = document.getElementById("forecast_name_list_1");
var forecast_pic_list_1 = document.getElementById("forecast_pic_list_1");
var forecast_temperature_list_1 = document.getElementById("forecast_temperature_list_1");
var forecast_unit_list_1 = document.getElementById("forecast_unit_list_1");

var forecast_name_list_2 = document.getElementById("forecast_name_list_2");
var forecast_pic_list_2 = document.getElementById("forecast_pic_list_2");
var forecast_temperature_list_2 = document.getElementById("forecast_temperature_list_2");
var forecast_unit_list_2 = document.getElementById("forecast_unit_list_2");

var forecast_name_list_3 = document.getElementById("forecast_name_list_3");
var forecast_pic_list_3 = document.getElementById("forecast_pic_list_3");
var forecast_temperature_list_3 = document.getElementById("forecast_temperature_list_3");
var forecast_unit_list_3 = document.getElementById("forecast_unit_list_3");

var forecast_name_list_4 = document.getElementById("forecast_name_list_4");
var forecast_pic_list_4 = document.getElementById("forecast_pic_list_4");
var forecast_temperature_list_4 = document.getElementById("forecast_temperature_list_4");
var forecast_unit_list_4 = document.getElementById("forecast_unit_list_4");

var forecast_name_list_5 = document.getElementById("forecast_name_list_5");
var forecast_pic_list_5 = document.getElementById("forecast_pic_list_5");
var forecast_temperature_list_5 = document.getElementById("forecast_temperature_list_5");
var forecast_unit_list_5 = document.getElementById("forecast_unit_list_5");

// API data
var forecast_standard_data;
var forecast_hourly_data;

var hourly_forecast_index = 0;


/* jQuery Example Variables - Similar to JavaScript example shown above
var $section_content = $("#section_content");
console.log(section_content);
*/

