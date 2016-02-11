function populatePage (contacts) {
  console.log("contacts:", contacts);
  var containerEl = document.getElementById("container");
  
  var containerElString = "";
  //Initialize DOM with Hidden Classes - only first class will be displayed//
  for (var letter in contacts) {
    containerElString += `<div class="row" id="${letter}">`;
      for (var i = 0; i < contacts[letter].length; i++) {
        var name = (contacts[letter][i].last_name || contacts[letter][i].business);
        console.log("name", name);
        containerElString += `<div class="col-md-12">${name}</div>`;
      };
    containerElString += `</div>`;
  }
    
  containerEl.innerHTML = containerElString;
}


// Load the inventory and send a callback function to be
// invoked after the process is complete
ContactBook.loadContact(populatePage);

