var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var btn = document.createElement("BUTTON");
	btn.innerHTML="Delete";
	li.appendChild(btn);
	input.value = "";
}

function toggleDone() {
	var target = (event.target);
	event.target.toggleAttribute("done");
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function(event) {
	var target = event.target;
	if (target.nodeName == 'LI') {
		target.classList.toggle("done");
	}
	if (target.nodeName == 'BUTTON') {
		event.target.parentElement.remove();
	}
	return;
});