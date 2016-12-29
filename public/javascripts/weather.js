var URL = "http://api.wunderground.com/api/06d3e02acc8459d3/forecast/q/autoip.json";
$(function() {
  //var URL = "http://api.wunderground.com/api/06d3e02acc8459d3/forecast/q/autoip.json";
  $.getJSON(URL, function(parsed_json) {
      //simple and normal forecast ////
      var simp = parsed_json['forecast']['simpleforecast']['forecastday'];
      var norm = parsed_json['forecast']['txt_forecast']['forecastday'];

  

      var DiaUno = simp[0]['date']['weekday_short'];
      var DiaDos = simp[1]['date']['weekday_short'];
      var DiaTres = simp[2]['date']['weekday_short'];
      var DiaCuat = simp[3]['date']['weekday_short'];
      
      var conUno = simp[0]['conditions'];
      var conDos = simp[1]['conditions'];
      var conTres = simp[2]['conditions'];
      var conCuat = simp[3]['conditions'];
      ////// Day forecasts  //////
      
      var t = 'title';
      
      var castOne = norm[0][t];
      var castTwo = norm[2][t];
      var castThree = norm[4][t]; 
      var castFour = norm[6][t];
     
      ///// Night forecasts ////
      ///// _n = Night ////////
      var castOne_n = norm[1][t];
      var castTwo_n = norm[3][t];
      var castThree_n = norm[5][t];
      var castFour_n = norm[7][t];
      
      ////////////////
      $('#Uncon').html(conUno);
      $('#Doscon').html(conDos);
      $('#Trescon').html(conTres);
      $('#Cuatcon').html(conCuat);
      
      $('#UnDia').html(DiaUno);
      $('#DosDia').html(DiaDos);
      $('#TresDia').html(DiaTres);
      $('#CuatDia').html(DiaCuat);
      $('#dayOne').html(castOne);
      $('#nightOne').html(castOne_n);
      $('#dayTwo').html(castTwo);
      $('#nightTwo').html(castTwo_n);
      $('#dayThree').html(castThree);
      $('#nightThree').html(castThree_n);
      $('#dayFour').html(castFour);
      $('#nightFour').html(castFour_n);
      
      var DayOfTheWeek = {
        'Monday':'Mon',
        'Tuesday':'Tues',
        'Wednesday':'Wed',
        'Thursday':'Thurs',
        'Friday':'Fri',
        'Saturday':'Sat',
        'Sunday':'Sun'
      }
      $('#one').text(DayOfTheWeek[castOne]);
      $('#two').text(DayOfTheWeek[castTwo]);
      $('#three').text(DayOfTheWeek[castThree]);
      $('#four').text(DayOfTheWeek[castFour]);
      
      
      var h = 'high';
      var l = 'low';
      var f = 'fahrenheit';
      var c = 'celsius';
      var i = 'icon';

      ///// Current Day ////
      var f1H = simp[0][h][f];
      var f1L = simp[0][l][f];
      var c1H = simp[0][h][c];
      var c1L = simp[0][l][c];

      var f2H = simp[1][h][f];
      var f2L = simp[1][l][f];
      var c2H = simp[1][h][c];
      var c2L = simp[1][l][c];

      var f3H = simp[2][h][f];
      var f3L = simp[2][l][f];
      var c3H = simp[2][h][c];
      var c3L = simp[2][l][c];

      var f4H = simp[3][h][f];
      var f4L = simp[3][l][f];
      var c4H = simp[3][h][c];
      var c4L = simp[3][l][c];
      
      



      
      var fIcon = '<i class="wi wi-fahrenheit"></i>';
      var cIcon = '<i class="wi wi-celsius"></i>';

      $('#Fahr_One_High').html('High: ' + f1H + fIcon);
      $('#Fahr_One_Low').html('Low: ' + f1L + fIcon);
      $('#Cel_One_High').html('High: ' + c1H + cIcon);
      $('#Cel_One_Low').html('Low: ' + c1L + cIcon);

      $('#Fahr_Two_High').html('High: ' + f2H + fIcon);
      $('#Fahr_Two_Low').html('Low: ' + f2L + fIcon);
      $('#Cel_Two_High').html('High: ' + c2H + cIcon);
      $('#Cel_Two_Low').html('Low: ' + c2L + cIcon);

      $('#Fahr_Three_High').html('High: ' + f3H + fIcon);
      $('#Fahr_Three_Low').html('Low: ' + f3L + fIcon);
      $('#Cel_Three_High').html('High: ' + c3H + cIcon);
      $('#Cel_Three_Low').html('Low: ' + c3L + cIcon);

      $('#Fahr_Four_High').html('High: ' + f4H + fIcon);
      $('#Fahr_Four_Low').html('Low: ' + f4L + fIcon);
      $('#Cel_Four_High').html('High: ' + c4H + cIcon);
      $('#Cel_Four_Low').html('Low: ' + c4L + cIcon);


      $('.myButton').click(function() {
        $('div.temp').toggle();
      });
     $('.myButton').click(function(){
       $('i.degrees').toggle();
     });
      
      
     
      /////  Weather Icons /////
      var iW0 = simp[0][i];
      var iW1 = simp[1][i];
      var iW2 = simp[2][i];
      var iW3 = simp[3][i];
      
      var weatherIcon = {
        "chanceflurries": "wi-wu-chanceflurries snow-wind",
        "chancerain": "wi-wu-chancerain rain",
        "chancesleat": "wi-wu-chancesleat sleet",
        "chancesnow": "wi-wu-chancesnow snow",
        "chancetstorms": "wi-wu-chancetstorms thunderstorm",
        "clear": "wi-wu-clear day-sunny",
        "cloudy": "wi-wu-cloudy day-cloudy",
        "flurries": 'wi-wu-flurries snow-wind',
        "haze": "wi-wu-hazy day-haze",
        "mostlycloudy": "wi-wu-mostlycloudy day-cloudy",
        "mostlysunny": "wi-wu-mostlysunny day-sunny",
        "partlycloudy": "wi-wu-partlycloudy day-cloudy",
        "partlysunny": "wi-wu-partlysunny day-sunny",
        "rain": "wi-wu-rain showers",
        "sleat": "wi-wu-sleat sleet",
        "snow": "wi-wu-snow snow",
        "sunny": "wi-wu-sunny day-sunny",
        "tstorm": "wi-wu-tstorms thunderstorm",
        "unknown": "wi-wu-unknown day-sunny"
      }
      


      $('#icon_0').addClass(weatherIcon[iW0]);
      $('#icon_1').addClass(weatherIcon[iW1]);
      $('#icon_2').addClass(weatherIcon[iW2]);
      $('#icon_3').addClass(weatherIcon[iW3]);

    
  });
});

$(function() {
  $.getJSON({
    url: "http://api.wunderground.com/api/06d3e02acc8459d3/conditions/q/autoip.json",
    dataType: "jsonp",
    success: function(parsed_json) {

      var location = parsed_json['current_observation']['display_location']['full'];
      var weather = parsed_json['current_observation']['weather'];
      $('div.city').html(location);
    }
  });
});