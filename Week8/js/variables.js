/* 

Example of multi-line comments syntax in JS:
https://www.w3schools.com/js/js_comments.asp

Single line comments can be added via "//"

// Debug your code by printing information in the console. Open the console in your browser's developer tool. For additional options, see https://www.w3schools.com/js/js_output.asp

console.log("Hello World!");

// Defining a variable, see https://www.w3schools.com/js/js_datatypes.asp
var helloworld; // variable is undefined
console.log(helloworld);

// Assigning values to variables
helloworld = 5; // variable is a number without decimals
console.log(helloworld);

helloworld = 5.01; // variable is a number with decimals
console.log(helloworld);

helloworld = true; // variable is a boolean value
console.log(helloworld);

helloworld = "Hello World"; // variable is a string
console.log(helloworld);

helloworld = ["Hello", "World"]; // variable is an array
console.log(helloworld);

helloworld = {first: "Hello", second: "World"}; // variable is an object
console.log(helloworld);

// Arithmetic Operators, see https://www.w3schools.com/js/js_operators.asp
helloworld = 3+4;
console.log(helloworld);

// String Concatenation, see https://www.w3schools.com/js/js_operators.asp
helloworld = "Hello" + " World " + 7;
console.log(helloworld);

 JavaScript provides you with a list of properties and methods for both strings and numbers to transform and gain information about the values assigned in variables. We will revisit these later, but the relevant documentation is available here.
    String Methods: https://www.w3schools.com/js/js_string_methods.asp
    Number Methods: https://www.w3schools.com/js/js_number_methods.asp


// HTML elements can also be assigned to variables, we will make extensive use of this method in JS for building web apps to return the element with the ID attribute of a specified value - https://www.w3schools.com/jsref/met_document_getelementbyid.asp
*/

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


/* jQuery Example Variables - Similar to JavaScript example shown above
var $section_content = $("#section_content");
console.log(section_content);
*/

