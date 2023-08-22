const endDate = "23 aug 2023 10:00 PM";

document.getElementById("end-Date").innerText = endDate;
const inputs =  document.querySelectorAll("input")
// const click = () =>{

// }


function clock(){

    const end = new Date(endDate)
const now = new Date()
console.log(end);
console.log(now);

const diff = (end - now)/1000;
 
if(diff < 0 ) return;
console.log(diff)
inputs[0].value=(Math.floor(diff/3600/24))

inputs[1].value=Math.floor(diff / 3600  )% 24 
inputs[2].value=Math.floor(diff / 60  )% 60 
inputs[3].value=Math.floor(diff   )% 60 

//vonvert into days
}



// initial call
clock();

// 1 day = 24 hr
// 1 hr = 60 mins
// 60 mins = 3600 sec

setInterval(
    () =>{
        clock()
    },
    1000
)