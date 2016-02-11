function populatePage (contacts) {
  console.log("contacts:", contacts);
  var containerEl = document.getElementById("container");
  
  //Initialize DOM with Hidden Classes - only first class will be displayed//
  
}


// Load the inventory and send a callback function to be
// invoked after the process is complete
ContactBook.loadContact(populatePage);

