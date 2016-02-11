var ContactBook = (function (cb) {
  
  cb.refreshToolbar = function(){

    //reference to toolbar div in DOM
    var toolbarEl = document.getElementById('toolbarContainer');

    var navHTML = "";
    navHTML += `<div class="btn-toolbar">`;
    navHTML +=  `<div class="btn-group btn-group-sm">`;

    var contacts = ContactBook.getContacts();
    //get array of sorted keys to make toolbar tabs from
    var lettersArr = Object.keys(contacts).sort();

    for (var letter in lettersArr){
      navHTML += `<button class="btn btn-default">${lettersArr[letter].toUpperCase()}</button>`;   
    }

    navHTML += `</div></div></div>`;
    toolbarEl.innerHTML = navHTML;
  };
  

  cb.refreshDOM = function(event){
    var contacts = ContactBook.getContacts();
    var letterToMakeVisible = event.target.innerHTML.toLowerCase();
    console.log("letterToMakeVisible", letterToMakeVisible);
    var containerEl = document.getElementById("container");
    var containerElString = "";
    for (var letter in contacts) {
      if (letter === letterToMakeVisible) {
        containerElString += `<div class="row" id="${letter}">`;
        for (var i = 0; i < contacts[letter].length; i++) {
          var name = (contacts[letter][i].last_name || contacts[letter][i].business);
          console.log("name", name);
          containerElString += `<div class="col-md-12">${name}</div>`;
        };
        containerElString += `</div>`;
      };
      containerEl.innerHTML = containerElString;
    };

    containerEl = containerElString;
  };




  return cb;
  
})(ContactBook);

