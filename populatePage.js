function populatePage (contacts) {
  console.log("contacts:", contacts);
  var containerEl = document.getElementById("container");
  
  var containerElString = "";



  //Initialize DOM with Hidden Classes - only first class will be displayed//
  var letterArray;

  for (var letter in contacts) {
    if (letter === "a") {
      containerElString += `<div class="row letter-group" id="${letter}">`;
    } else {
      containerElString += `<div class="row letter-group hidden" id="${letter}">`;
    }

    //sort array of objects alphabetically by last_name/business name
    letterArray = ContactBook.sortGroup(contacts[letter]);

    for (var i = 0; i < letterArray.length; i++) {
      var name = (letterArray[i].last_name || letterArray[i].business);
      console.log("name", name);
      containerElString += `<div class="col-md-12">${name}</div>`;
    };
    containerElString += `</div>`;
  }
    
  containerEl.innerHTML = containerElString;
}

document.getElementById("toolbarContainer").addEventListener("click", function(){ContactBook.refreshDOM(event)});

// Load the inventory and send a callback function to be
// invoked after the process is complete
ContactBook.loadContact(populatePage);

