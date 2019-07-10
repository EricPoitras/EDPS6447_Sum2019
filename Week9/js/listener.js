// UI Components (Nav Icons)
input_ico_locate.addEventListener("click",function(){
    router("view_landing");
});

// UI Component (Buttons)
input_btn_now.addEventListener("click",function(){
    set_forecast("now",forecast_standard_data);
});
input_btn_hourly.addEventListener("click",function(){
    set_forecast("hourly",forecast_hourly_data);
});
input_btn_daily.addEventListener("click",function(){
    set_forecast("daily",forecast_standard_data);
});
input_btn_previous.addEventListener("click",function(){
    //get_forecast("previous");
    hourly_forecast_index--;
    set_forecast("hourly",forecast_hourly_data);
});
input_btn_next.addEventListener("click",function(){
    //get_forecast("next");
    hourly_forecast_index++;
    set_forecast("hourly",forecast_hourly_data);
});
input_btn_getforecast.addEventListener("click",function(){
    API_request();
});
input_btn_settings.addEventListener("click",function(){
    router("view_settings");
});
input_btn_save.addEventListener("click",function(){
   get_settings();
   router("view_landing"); 
});

/* jQuery Example Event Listener - Similar to plain Javascript example above
$("#input_ico_locate").on('click',function(){
  API_request();  
})
*/