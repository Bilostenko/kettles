let bcgrnd = document.querySelector(".kettle")
let blueKettle = document.querySelector("#blue")
let redKettle = document.querySelector("#red")


blueKettle.onclick = () => {
  bcgrnd.style.backgroundColor = "#95CFD5"
  document.querySelector(".active").classList.remove("active")
  blueKettle.classList.add("active") 
}

redKettle.onclick = () => {
  bcgrnd.style.backgroundColor = "red"
  document.querySelector(".active").classList.remove("active")
  redKettle.classList.add("active")   
}

