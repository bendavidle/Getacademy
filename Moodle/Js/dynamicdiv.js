const dynamicDiv = document.getElementById("dynamicDiv");
const textInput = document.getElementById("textInput");
const colorSelection = document.getElementById("colorSelection");
const borderSelection = document.getElementById("borderSelection");
const sizeSlider = document.getElementById("sizeSlider");
const borderRadius = document.getElementById("borderRadius");
const divHtml = document.getElementById("divHtml");
const dynamicText = document.getElementById("dynamicText");

textInput.oninput = showDiv;
sizeSlider.oninput = showDiv;
borderRadius.oninput = showDiv;
colorSelection.onchange = showDiv;
borderSelection.onchange = showDiv;

function showDiv() {
	dynamicDiv.style.height = sizeSlider.value + "px";
	dynamicDiv.style.width = sizeSlider.value + "px";
	dynamicDiv.style.backgroundColor = colorSelection.value;
	dynamicText.innerText = textInput.value;
	dynamicText.style.lineHeight = sizeSlider.value + "px";
	dynamicDiv.style.borderRadius = borderRadius.value + "px";

	if (borderSelection.value == "none") {
		dynamicDiv.style.border = "thick none #fff";
	} else {
		dynamicDiv.style.border = "thick solid " + borderSelection.value;
	}

	divHtml.innerText = dynamicDiv.outerHTML;
}

showDiv();
