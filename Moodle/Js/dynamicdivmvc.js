//Model
var divText;
var divColor;
var divBorder;
var divSize = 100;
var divRadius = 10;

//View
updateView();
function updateView() {
	const app = document.getElementById("content");
	app.innerHTML = `
	<h2>Dynamic HTML</h2>
	<div id="dynamichtmlmvc">
	<h3>Div Inner Text</h3>
	<h3>Div Size</h3>
	<h3>Div Radius</h3>
	<input type="text" name="textInput" value="${divText || ""}" onchange="divText = this.value"/>
	<input type="range" value="${divSize}" name="sizeSlider" step="10" min="100" max="500" onchange="divSize = this.value"/>
	<input type="range" value="${divRadius}" name="borderRadius" step="10" min="0" max="150" onchange="divRadius = this.value"/>
	<button onclick="makeDiv()">Create!</button>
	</div>
	<div id="dynamicDiv" style="width: ${divSize + "px;"} height: ${divSize + "px;"} background-color: ${"red;"} border-radius: ${divRadius + "px;"} line-height: ${divSize + "px;"}">
	<p>${divText || ""}</p>
	</div>
	`;
	//Div
	console.log(divSize);
}

//Controller
function makeDiv() {
	updateView();
}
