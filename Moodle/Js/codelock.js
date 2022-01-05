const codelock = document.getElementById("codelock");
const codeDigits = codelock.children;
const codeInput = document.getElementById("codeinput").children[0];

function init() {
	for (let i = 0; i < codeDigits.length; i++) {
		const digit = codeDigits[i];
		digit.addEventListener("click", function () {
			onDigitClick(this);
		});
	}
}

function onDigitClick(digit) {
	codeInput.innerText += digit.innerText;
}

init();
