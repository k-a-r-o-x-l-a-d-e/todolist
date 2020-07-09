import React from "react"
function Greeting(){
    var date = new Date()
    var hours = date.getHours()
    let timeOfDay

   
           
                if(hours<12){
                    timeOfDay= "morning";
                }
                else if(hours>=12 && hours<=17){
                    timeOfDay= "Afternoon";
                }
                else{
                    timeOfDay="night"
                }
   const Shi=()=>{
       console.log("shiiii");
   };

    return(
    <h1>Good {timeOfDay}{Shi()}</h1>
    )
}
export default Greeting
