const cube = document.getElementById("double-click");
const contextMenu = document.getElementById("context-menu");
const keyDown = document.getElementById("key-down");
const table = document.getElementById("table").children[0];

//Console.log cube er variablene på toppen
cube.addEventListener("dblclick", function () {
	/*
	let currentCubeColor = getComputedStyle(cube).backgroundColor;
	let cubeSecondColor = "rgb(255, 255, 255)";

	cube.style.backgroundColor = currentCubeColor !== cubeSecondColor ? cubeSecondColor : "rgb(194, 14, 14)";
	*/

	console.log("Hei");
});

//andre events
contextMenu.addEventListener("contextmenu", function () {
	alert("Right Click! :D");
});

keyDown.addEventListener("keydown", function (e) {
	let keyElement = keyDown.children[0];
	keyElement.innerHTML = e.key;
});

for (let i = 0; i < table.children.length; i++) {
	const row = table.children[i];
	for (let i = 0; i < row.children.length; i++) {
		const cell = row.children[i];
		cell.addEventListener("mouseover", function () {
			this.innerText = this.innerText == "o" ? "x" : "o";
		});
	}
}
