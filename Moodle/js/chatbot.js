//Model
let chatContent = [];
//View

show();
function show() {
	let app = document.getElementById("app");
	app.innerHTML = /*HTML*/ `
        <div class="chat">
            <div div class="header">CHATBOT</div>
            <div class="chatlog">
            </div>
            <div class="input">
                <input type="text" name="chatinput" id="chat" onkeydown="handleInput(event)" onkeyup="keepFocus(event)"/>
            </div>
        </div>
    `;

	const chatLog = document.querySelector(".chatlog");
	const input = document.querySelector("#chat");
	input.focus();
	for (let i = 0; i < chatContent.length; i++) {
		const msg = `<p>${chatContent[i]}</p>`;
		chatLog.innerHTML += msg;
	}
	chatLog.scrollTop = chatLog.scrollHeight - chatLog.clientHeight;
}

//Controller
function handleInput(e) {
	let inputEl = e.target;
	if (e.code == "Enter") {
		e.preventDefault();
		let content = inputEl.value;
		appendToChat(content);
		handleResponse(content);
	}
}

function handleResponse(content) {
	let msg = content.toLowerCase();
	let response = "I don't understand :(";

	if (msg == "") {
		return;
	}

	if (msg.includes("hi") || msg.includes("hello")) {
		response = "Hi there!";
	} else if (msg.includes("how are")) {
		response = "I'm doing great :D";
	} else if (msg.includes("game") && msg.includes("favorite")) {
		response = "My favorite game is the Final Fantasy series!";
	} else if (msg.includes("nice")) {
		response = "Thanks!";
	}
	appendToChat(response);
}

function appendToChat(content) {
	chatContent.push(content);
	show();
}

function keepFocus(e) {
	if (e.code == "Enter") {
		e.preventDefault();
	}
}
