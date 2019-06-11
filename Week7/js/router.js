// https://www.w3schools.com/js/js_switch.asp

// define the router as a function that receives a value. Use the function keyword and an identifier using a value such as router

// jQuery methods are commented next to the relevant examples in plain JS

function router(value){
    
    hide_all_views();
    
    switch(value) {
      case "view_landing":
        // code block
            console.log("Show the landing UI view");
            view_landing.classList.remove("d-none");
            //$("#view_landing").show();
        break;
      case "view_loading":
            console.log("Show the loading UI view"); 
            view_loading.classList.remove("d-none");
            //$("#view_loading").show();
        break;
      case "view_forecast":
        // code block
            console.log("Show the forecast UI view");
            view_forecast.classList.remove("d-none");
            //$("#view_forecast").show();
        break;
      case "view_settings":
        // code block
            console.log("Show the settings UI view");
            view_settings.classList.remove("d-none");
            //$("#view_settings").show();
        break;
      default:
        // code block
            console.log("Error: The requested view is not recognized by the router");
    }
}

function hide_all_views(){
    view_landing.classList.add("d-none");
    view_loading.classList.add("d-none");
    view_forecast.classList.add("d-none");
    view_settings.classList.add("d-none");
    
    // jQuery Example Method - Adding or Removing display: none;
    /*
    $("#view_landing").hide();
    $("#view_loading").hide();
    $("#view_forecast").hide();
    $("#view_settings").hide();
    */
}

