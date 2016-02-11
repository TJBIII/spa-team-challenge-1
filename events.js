// Declare DOM element variables
var container = document.getElementById("container");
var submitButton = document.getElementById("submitButton");
var findButton = document.getElementById("findRadio");
var addButton = document.getElementById("addRadio");


var submitText = "Submit";
function radioCheck () {
	console.log("radioCheck init");
	if (findButton.checked) {
		console.log("find button checked");
		// Code for find function
		submitText = "Find";
	} else if (addButton.checked) {
		console.log("add button checked");
		submitText = "Add";
	}
	submitButton.innerHTML = submitText;
};


submitButton.innerHTML = submitText;

findButton.addEventListener("change", radioCheck);
addButton.addEventListener("change", radioCheck);
