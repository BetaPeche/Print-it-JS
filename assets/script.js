const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dot = document.querySelector(".dots")
const img = document.querySelector(".banner-img")

for (let i = 0; i < slides.length; i++) {
	let divDot = document.createElement("div")
	dot.appendChild(divDot)
	divDot.classList.add("dot")
	console.log(i)
	if (i === 0) {
		divDot.classList.add("dot_selected")
	}
}

const arrow_left = document.querySelector(".arrow_left")
const arrow_right = document.querySelector(".arrow_right")
let index = "0"
const dotCounter = document.querySelectorAll(".dot")
let text = document.querySelector("#banner p")

arrow_left.addEventListener("click", () => {
	dotCounter[index].classList.remove("dot_selected")
	index--
	if (index < 0){
		index = "3"
	}
	text.innerHTML = slides[index].tagLine
	dotCounter[index].classList.add("dot_selected")
	img.src = slides[index].image
})

arrow_right.addEventListener("click", () => {
	dotCounter[index].classList.remove("dot_selected")
	index++
	if (index === slides.length){
		index = "0"
	}
	text.innerHTML = slides[index].tagLine
	dotCounter[index].classList.add("dot_selected")
	img.src = slides[index].image
})

