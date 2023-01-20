let bcgrnd = document.querySelector(".kettle")
let bigKettle = document.querySelector("#big-kettle")

let blueKettle = document.querySelector("#blue")
let redKettle = document.querySelector("#red")
let pinkKettle = document.querySelector("#pink")
let beigeKettle = document.querySelector("#beige")
/* radio buttons*/
option1.checked = true;


blueKettle.onclick = () => {
  bcgrnd.style.backgroundColor = "#95CFD5"
  document.querySelector(".active").classList.remove("active")
  blueKettle.classList.add("active") 
  bigKettle.src = "./img/kettle-bg/blue-kettle.png";

  option1.checked = true;
}

redKettle.onclick = () => {
  bcgrnd.style.backgroundColor = "red"
  document.querySelector(".active").classList.remove("active")
  redKettle.classList.add("active")   
  bigKettle.src = "./img/kettle-bg/red-kettle.png";
}

pinkKettle.onclick = () =>{
  bcgrnd.style.backgroundColor = "pink"
  document.querySelector(".active").classList.remove("active")
  pinkKettle.classList.add("active")  
  bigKettle.src = "./img/kettle-bg/pink-kettle.png";
}

beigeKettle.onclick = () => {
  bcgrnd.style.backgroundColor = "beige"
  document.querySelector(".active").classList.remove("active")
  beigeKettle.classList.add("active")  
  bigKettle.src = "./img/kettle-bg/beige-kettle.png";
}

