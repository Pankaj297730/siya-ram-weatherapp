const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const data_hide = document.querySelector('.middle_layer');


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Please write the city name before you search`;

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

               temp_status.innerHTML = "<i class='fa fa-sun' style='color: #eccc68;'></i>";
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
        
     }catch{
        city_name.innerText = `Please enter the city name properly`;
        data_hide.classList.add('data_hide');
     }
      
  }

}

submitBtn.addEventListener('click', getInfo);

// t0 check the date//
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

   let hours = now.getHours();
   let mins = now.getMinutes();

   let periods = "AM";
   
   if (hours > 11) {
       periods = "PM";
       if (hours>12) hours -= 12;
   }
  if (mins < 10){
   mins = "0" + mins;
  }
  
 return `   ${date}  ${month}  | ${hours}:${mins} ${periods}`
};
   
  

curDate.innerHTML = getCurrentTime();