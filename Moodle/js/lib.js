function fixText(text) {
	let newText = text.replaceAll(" ", "").toLowerCase();
	return newText.charAt(0).toUpperCase() + newText.slice(1);
}

function checkIfEmail(email) {
	if (email) {
		if (email.includes(" ")) {
			return false;
		} else if (email.includes("@")) {
			if (email.includes(".")) {
				if (email.charAt(email.indexOf("@") + 1) == ".") {
					return false;
				} else {
					return true;
				}
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
}
