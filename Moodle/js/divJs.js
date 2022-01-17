const resizableDiv = document.getElementById("resizable-div");
const divHeight = document.getElementById("div-height");
const divWidth = document.getElementById("div-width");
const randomDiv = document.getElementById("random-div");
const randomDivInfo = document.getElementById("random-div").children[0];

divHeight.addEventListener("input", function () {
	drawDiv(divWidth, divHeight);
});

divWidth.addEventListener("input", function () {
	drawDiv(divWidth, divHeight);
});

function drawDiv(width, height) {
	const circumferenceElement = resizableDiv.children[0];
	const areaElement = resizableDiv.children[1];

	let circumference = width.value * 2 + height.value * 2;
	let area = width.value * height.value;

	circumferenceElement.innerText = "Circumference: " + circumference;
	areaElement.innerText = "Area: " + area;

	resizableDiv.style.height = height.value + "px";
	resizableDiv.style.width = width.value + "px";
}

function randomNumber(min, max) {
	return min + Math.floor(Math.random() * max);
}

function drawRandomDiv(width, height, borderWidth) {
	randomDiv.style.backgroundColor = "blue";
	randomDiv.style.width = width + "px";
	randomDiv.style.height = height + "px";
	randomDiv.style.borderStyle = "solid";
	randomDiv.style.borderWidth = borderWidth + "px";

	randomDivInfo.innerText = "Width: " + width + " Height: " + height + " Border: " + borderWidth;
}

drawRandomDiv(randomNumber(1, 1000), randomNumber(1, 1000), randomNumber(1, 20));
drawDiv(divWidth, divHeight);
