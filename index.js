console.log('Let us see');

let weather ={
    apikey:"d73f9b2f8b4463343eb0ac85a7465891",
    apikey2:"AIzaSyA3TdrZ8m56fPhKY7QhEcBXhBqdNeACIoA",//Google 
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city+"&units=metric&appid="+
         this.apikey).then((response)=>response.json()).then((data)=>this.displayWeather(data));

    },
    displayWeather: function(data){
        const {name} =data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector('p').innerText="";
        document.querySelector('.city').innerText="Weather in "+ name;
        document.querySelector('.description').innerText=description;

        // document.querySelector('.icon').src='https://encrypted-tbn0.gstatic.com/images?q=04d:ANd9GcR2A0lbB0SG83qZthJ2kSl0UinBZENGKP6JezYH1IQzKQ&s'
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.temp').innerText=temp +"°C";

        document.querySelector('.humidity').innerText="Humidity :"+humidity;

        document.querySelector('.wind').innerText="Wind Speed :"+speed;
        // document.body.style.backgroundImage="https://d3q33rbmdkxzj.cloudfront.net/1589466137456_aFz3CE.png"
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".searchbar").value);

    }


}

document.querySelector("button").addEventListener("click",searchCities);

function searchCities(){

weather.search();



}




