var css=document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")



function setGradient(){
	//append stye to body
	body.style.background = 
		"linear-gradient(to right,"
		+ color1.value + "," + color2.value + ")"

		css.textContent = body.style.background + ";"
}

/*bisa juga dengan property di html 5 dengan menggunkan onCLikc, or onInput*/
color1.addEventListener("input", setGradient)
	color2.addEventListener("input", setGradient)
