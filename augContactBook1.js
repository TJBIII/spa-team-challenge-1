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

    //get div we want to show
    var letterEl = document.getElementById(letterToMakeVisible);

    //get an array of all the letter divs in the DOM
    var letterGroups = document.getElementsByClassName("row letter-group");

    var currentDiv;

    for (var i = 0; i < letterGroups.length; i++) {
      currentDiv = letterGroups[i];
      if (currentDiv.className.indexOf("hidden") < 0){
        currentDiv.classList.add("hidden");
      } 
    }

    //remove hidden class from div we want to make visible
    letterEl.classList.remove("hidden");
  };


  return cb;
  
})(ContactBook);

