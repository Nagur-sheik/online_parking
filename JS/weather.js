var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var feelslike = document.querySelector('.feels-like');
var tempmin = document.querySelector('.temp_min');
var tempmax = document.querySelector('.temp_max');
var pre = document.querySelector('.pressure');
var hum = document.querySelector('.humidity');

var button= document.querySelector('.submit');
var card= document.querySelector('.card');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=e59861c14a03c325cbf31fcfc78b45c7')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var feelsLike = data['main']['feels_like'];
  var tempMin = data['main']['temp_min'];
  var tempMax = data['main']['temp_max'];
  var pressure = data['main']['pressure'];
  var humidity = data['main']['humidity'];
  var cloud = data['clouds']['all']

  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  card.style.display = "block";


  main.innerHTML = nameValue;
  feelslike.innerHTML = "Feels Like "+feelsLike;
  tempmin.innerHTML = "Temperature Minimun "+tempMin;
  tempmax.innerHTML = "Temperature Maximun "+tempMax;
  pre.innerHTML = "Pressure "+pressure;
  hum.innerHTML = "Humidity "+humidity;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  clouds.innerHTML = "clouds- "+cloud;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
