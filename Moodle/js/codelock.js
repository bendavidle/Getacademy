//MODEL
var code = "";
var color = "white";

//VIEW
function show() {
	let app = document.getElementById("content");
	app.innerHTML = `
				<h2>CodeLock</h2>
				<div id="codelock">
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
					<span>6</span>
					<span>7</span>
					<span>8</span>
					<span>9</span>
				</div>
				<div id="codeinput">
					<span style="color: ${color ? color + ";" : "red"}">${code}</span>
				</div>
				<button class="clear-button" onclick="clearInput()">CLEAR</button>
	`;
	let codeDigits = document.getElementById("codelock").children;
	for (let i = 0; i < codeDigits.length; i++) {
		const digit = codeDigits[i];
		digit.addEventListener("click", function () {
			onDigitClick(this);
		});
	}
}

//CONTROLLER
function onDigitClick(digit) {
	if (code != "OPEN!" && code.length < 4) {
		code += digit.innerText;
		checkCode(code);
	} else {
		console.log(code);
	}
}

function checkCode(currentCode) {
	let winCode = "2556";
	if (currentCode == winCode) {
		code = "OPEN!";
		color = "green";
		show();
	} else if (currentCode.length == 4) {
		color = "red";
		show();
	} else {
		show();
	}
}
function clearInput() {
	code = "";
	color = "white";
	show();
}

show();
