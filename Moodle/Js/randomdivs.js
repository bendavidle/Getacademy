tilfeldigFirkant();

function tilfeldigFirkant() {
	var endX = tilfeldigTall(window.innerWidth * 0.2, window.innerWidth);
	var endY = tilfeldigTall(window.innerHeight * 0.2, window.innerHeight);

	var startX = tilfeldigTall(1, endX * 0.8);
	var startY = tilfeldigTall(1, endY * 0.8);
	var bredde = endX - startX;
	var høyde = endY - startY;
	var farge = tilfeldigFarge();
	var divHtml = '<div style="' + delAvStylePx("left", startX) + delAvStylePx("top", startY) + delAvStylePx("width", bredde) + delAvStylePx("height", høyde) + delAvStyle("background-color", farge) + '">' + tilfeldigOrd() + "</div>";
	document.write(divHtml);
	if (Math.random() < 0.9) tilfeldigFirkant();
}

function delAvStylePx(navn, verdi) {
	return delAvStyle(navn, verdi + "px");
}

function delAvStyle(navn, verdi) {
	return navn + ":" + verdi + ";";
}

function tilfeldigFarge() {
	return "#" + tilfeldigTallEllerBokstavABCDEF() + tilfeldigTallEllerBokstavABCDEF() + tilfeldigTallEllerBokstavABCDEF() + tilfeldigTallEllerBokstavABCDEF() + tilfeldigTallEllerBokstavABCDEF() + tilfeldigTallEllerBokstavABCDEF();
}

function tilfeldigTallEllerBokstavABCDEF() {
	var tall = tilfeldigTall(0, 15);
	if (tall < 10) return tall;
	const charCodeA = "a".charCodeAt(0);
	return String.fromCharCode(tall - 10 + charCodeA);
}

function tilfeldigBokstav() {
	var tall = tilfeldigTall(0, 28);
	const charCodeA = "a".charCodeAt(0);
	if (tall == 28) {
		return "å";
	} else if (tall == 27) {
		return "ø";
	} else if (tall == 26) {
		return "æ";
	} else {
		return String.fromCharCode(tall + charCodeA);
	}
}

function tilfeldigOrd() {
	return tilfeldigBokstav() + tilfeldigBokstav() + tilfeldigBokstav() + tilfeldigBokstav() + tilfeldigBokstav();
}

function tilfeldigTall(minimum, maksimum) {
	return minimum + Math.floor(Math.random() * (maksimum - minimum + 1));
}
