const cube = document.getElementById("double-click");
const contextMenu = document.getElementById("context-menu");
const keyDown = document.getElementById("key-down");

cube.addEventListener("dblclick", function () {
	let currentCubeColor = getComputedStyle(cube).backgroundColor;
	let cubeSecondColor = "rgb(255, 255, 255)";

	cube.style.backgroundColor = currentCubeColor !== cubeSecondColor ? cubeSecondColor : "rgb(194, 14, 14)";

	console.log("test");
});

contextMenu.addEventListener("contextmenu", function () {
	alert("Right Click! :D");
});

keyDown.addEventListener("keydown", function (e) {
	let keyElement = keyDown.children[0];
	keyElement.innerHTML = e.key;
});
