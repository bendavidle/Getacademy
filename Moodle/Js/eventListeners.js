const cube = document.getElementById("double-click");
const contextMenu = document.getElementById("context-menu");
const keyDown = document.getElementById("key-down");

cube.addEventListener("dblclick", function () {
	let currentCubeColor = getComputedStyle(cube).backgroundColor;
	let cubeSecondColor = "rgb(255, 255, 255)";

	console.log(currentCubeColor);

	if (currentCubeColor !== cubeSecondColor) {
		cube.style.backgroundColor = cubeSecondColor;
	} else {
		cube.style.backgroundColor = "rgb(194, 14, 14)";
	}
});

contextMenu.addEventListener("contextmenu", function () {
	alert("Right Click! :D");
});

keyDown.addEventListener("keydown", function (e) {
	let keyElement = document.createElement("H1");

	keyElement.innerHTML = e.key;
	keyDown.appendChild(keyElement);
});
