function populatePage (inventory) {
  console.log("Inventory:", inventory);
  var containerEl = document.getElementById("container");
  
  //--- Loop through the JSON and build up the DOM --//
  for (var i = 0; i < inventory.length; i++) {
    
  var contentString = "";
    

    containerEl.innerHTML += contentString;

    
  };

  ContactBook.activateEvents();
}


// Load the inventory and send a callback function to be
// invoked after the process is complete
ContactBook.loadContact(populatePage);

