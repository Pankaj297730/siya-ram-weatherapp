const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const data_hide = document.querySelector('.middle_layer');

const dataa_hide = document.querySelector('.main_layer');


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Please write the city name before you search`;
        document.getElementById("temp").style.display = "none";
        document.getElementById("temp_status").style.display = "none";
        


        data_hide.classList.add('data_hide');
       
   
  }else{
     try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=bfcc7eda482583e830222b2bd3df2f2d`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        tempreal_value.innerText = arrData[0].main.temp;


        const tempMood = arrData[0].weather[0].main;


              //condition to check sunny or cloudy

              if (tempMood == "Clear") { 

               temp_status.innerHTML = "<i id='clouds' class='fa fa-sun' style='color: #eccc68;'></i>";
             } else if (tempMood == "Clouds") {
               
               temp_status.innerHTML =
               
               "<i class='fa fa-cloud'  style='color: #f1f2f6;'></i>";
               
               } else if (tempMood == "Rain") { 
               
               temp_status.innerHTML = "<i class='fa fa-cloud-rain' style='color: #a4b0be;'></i>";
               
               } else {
               
               temp_status.innerHTML =
               
               "<i class='fa fa-sun' style='color:#eccc68;'></i>";
               }

               data_hide.classList.remove('data_hide');
               document.getElementById("temp").style.display = "flex";
               document.getElementById("temp_status").style.display = "flex";
               document.getElementById("zero").style.top = "3.12rem";
        
     }catch{
        city_name.innerText = `Please enter the city name properly`;
        data_hide.classList.add('data_hide');
        dataa_hide.classList.add('dataa_hide');
        document.getElementById("temp").style.display = "none";
        document.getElementById("temp_status").style.display = "none";
     }
      
  }

}

submitBtn.addEventListener('click', getInfo);

// to check the date//
const getCurrentDay = () => {
   let weekday = new Array(7);
   weekday[0] = "Sunday";
   weekday[1] = "Monday";
   weekday[2] = "Tuesday";
   weekday[3] = "Wednesday";
   weekday[4] = "Thursday";
   weekday[5] = "Friday";
   weekday[6] = "Saturday";
   let currentTime = new Date();
    days = weekday[currentTime.getDay()];
    let day = document.getElementById('day');
    
    day.innerText = days;
};
 getCurrentDay();


const curDate = document.getElementById('today_data');
const getCurrentTime = () => {
   var months = [
   "Jan",
   "Jan",
   "Feb",
   "March",
   "Apr",
   "May",
   "June",
   "July",
   "Aug",
   "Sept",
   "Oct",
   "Nov",
   "Dec",
];
   var now = new Date();
   var month = months[now.getMonth() + 1];
   var date = now.getDate(); 


  
 return `   ${date}  ${month}`
};
   
  

curDate.innerHTML = getCurrentTime();