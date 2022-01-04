const quiz = document.getElementById("quiz");
const quizList = quiz.children;

function checkWin(el) {
	const win = "World Wide Web";
	var winElement = document.createElement("h3");
	var winCheck = quiz.children[quiz.children.length - 1];

	for (let i = 0; i < quizList.length; i++) {
		const element = quizList[i];
		console.log(element);
		element.style.fontWeight = "400";
	}

	el.style.fontWeight = "bold";

	if (el.innerHTML == win) {
		winElement.innerHTML = "Correct!";
		winElement.classList.add("correct");

		if (winCheck.tagName == "H3") {
			winCheck.innerHTML = "Correct!";
			winCheck.className = "correct";
		} else {
			quiz.appendChild(winElement);
		}
	} else {
		winElement.innerHTML = "Wrong!";
		winElement.classList.add("wrong");

		if (winCheck.tagName == "H3") {
			console.log(winCheck);
			winCheck.innerHTML = "Wrong!";
			winCheck.className = "wrong";
		} else {
			quiz.appendChild(winElement);
		}
	}
}

for (let i = 0; i < quizList.length; i++) {
	const element = quizList[i];
	element.addEventListener("click", function () {
		checkWin(this);
	});
	console.log(element.innerHTML);
}
