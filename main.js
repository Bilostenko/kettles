let bcgrnd = document.querySelector(".kettle")
let bigKettle = document.querySelector("#big-kettle")

let blueKettle = document.querySelector("#blue")
let redKettle = document.querySelector("#red")
let pinkKettle = document.querySelector("#pink")
let beigeKettle = document.querySelector("#beige")

/* radio buttons*/
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let option4 = document.querySelector("#option4")
option1.checked = true;

blueKettle.onclick = () => {
  bcgrnd.style.backgroundColor = "#95CFD5"
  document.querySelector(".active").classList.remove("active")
  blueKettle.classList.add("active")
  bigKettle.src = "./img/kettle-bg/blue-kettle.png";
  document.querySelector('input').checked = false
  option1.checked = true
}
option1.onclick = () => {
  bcgrnd.style.backgroundColor = "#95CFD5"
  document.querySelector(".active").classList.remove("active")
  blueKettle.classList.add("active")
  bigKettle.src = "./img/kettle-bg/blue-kettle.png";

}


redKettle.onclick = () => {
  bcgrnd.style.backgroundColor = "red"
  document.querySelector(".active").classList.remove("active")
  redKettle.classList.add("active")
  bigKettle.src = "./img/kettle-bg/red-kettle.png";
  document.querySelector('input').checked = false
  option2.checked = true
}
option2.onclick = () => {
  bcgrnd.style.backgroundColor = "red"
  document.querySelector(".active").classList.remove("active")
  redKettle.classList.add("active")
  bigKettle.src = "./img/kettle-bg/red-kettle.png";
}


pinkKettle.onclick = () => {
  bcgrnd.style.backgroundColor = "pink"
  document.querySelector(".active").classList.remove("active")
  pinkKettle.classList.add("active")
  bigKettle.src = "./img/kettle-bg/pink-kettle.png";
  document.querySelector('input').checked = false
  option3.checked = true
}
option3.onclick = () => {
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
  document.querySelector('input').checked = false
  option4.checked = true
}
option4.onclick = () => {
  bcgrnd.style.backgroundColor = "beige"
  document.querySelector(".active").classList.remove("active")
  beigeKettle.classList.add("active")
  bigKettle.src = "./img/kettle-bg/beige-kettle.png";
}

const showMenu = document.querySelectorAll('.navigation_item')

for (let i = 0; i < showMenu.length; ++i) {
  showMenu[i].addEventListener('click', showUp)
}

function showUp() {
  const menuGrid = document.querySelector(".menu-grid")
  menuGrid.classList.toggle("menu-grid-togle");
}

window.onload = () =>{
  setTimeout(()=>{alert('temporary is not working correctly')},5000)
}
