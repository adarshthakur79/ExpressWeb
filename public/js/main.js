const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_value = document.getElementById("temp_real_value");
const temp_status = document.getElementById("temp_status");

const data_hide = document.querySelector(".middle_layer");


const getInfo = async(event) => {
     event.preventDefault();

     let cityVal = cityName.value;
//   console.log(cityVal);


    if(cityVal === "") {
    city_name.innerText="Please Provide Any City Name Before Search";
    data_hide.classList.add('data_hide');
    }else {

    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=273df9e3862e8ba33fb02709a3d5fc41`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
       
        temp_real_value.innerText= arrData[0].main.temp;
      
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
         const tempStatus = arrData[0].weather[0].main;
        if(tempStatus=="Sunny"){
            temp_status.innerHTML=" <i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
          }else if(tempStatus=="Clouds"){
            temp_status.innerHTML=" <i class='fa-solid fa-cloud' style='color: #dfe4ea;'></i>";
          }else if(tempStatus=="Rainy"){
            temp_status.innerHTML=" <i class='fa-solid fa-rain' style='color: #a4bobe;'></i>";
          }
          else{
            temp_status.innerHTML=" <i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
          }
         
          data_hide.classList.remove('data_hide');
        
        

        // console.log(arrData[0].main.temp);
        // console.log(arrData[0].weather[0].main);
    }catch(err){
        city_name.innerText="Please Provide  City Properly";
        data_hide.classList.add('data_hide');
    }
    
  }

//   alert("hello");
};
submitBtn.addEventListener("click", getInfo);
