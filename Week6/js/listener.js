// UI Components (Nav Icons)
input_ico_locate.addEventListener("click",function(){
    API_request();
});

// UI Component (Buttons)
input_btn_now.addEventListener("click",function(){
    get_forecast("now");
});
input_btn_hourly.addEventListener("click",function(){
    get_forecast("hourly");
});
input_btn_daily.addEventListener("click",function(){
    get_forecast("daily");
});
input_btn_previous.addEventListener("click",function(){
    get_forecast("previous");
});
input_btn_next.addEventListener("click",function(){
    get_forecast("next");
});
input_btn_getforecast.addEventListener("click",function(){
    API_request();
});
input_btn_settings.addEventListener("click",function(){
    router("view_settings");
});

/* jQuery Example Event Listener - Similar to plain Javascript example above
$("#input_ico_locate").on('click',function(){
  API_request();  
})
*/