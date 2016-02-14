// Declare DOM element variables
var container = document.getElementById("container");
var submitButton = document.getElementById("submitButton");
var findButton = document.getElementById("findRadio");
var addButton = document.getElementById("addRadio");

var addContactEl = document.getElementById("addContact");
var searchEl = document.getElementById("search");


var submitText = "Submit";
function radioCheck () {
	console.log("radioCheck init");
	if (findButton.checked) {
		console.log("find button checked");

		//show search input, hide addContact inputs
		searchEl.classList.remove("hidden");
  	addContactEl.classList.add("hidden");

		submitText = "Find";
		// Code for find function
		
	} else if (addButton.checked) {
		console.log("add button checked");
		submitText = "Add";

		//hide search input, show addContact inputs
  	searchEl.classList.add("hidden");
  	addContactEl.classList.remove("hidden");

  	ContactBook.hideAllLetterDivs();
	}
	submitButton.innerHTML = submitText;
};


submitButton.innerHTML = submitText;

findButton.addEventListener("change", radioCheck);
addButton.addEventListener("change", radioCheck);


submitButton.addEventListener("click", function(event) {
	if (event.target.innerHTML === "Add"){
		ContactBook.addContact();
	}
})
