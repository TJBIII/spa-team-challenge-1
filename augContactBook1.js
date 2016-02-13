var ContactBook = (function (cb) {
  //get an array of all the letter divs in the DOM
  var letterGroups = document.getElementsByClassName("row letter-group");
    
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


  cb.hideAllLetterDivs = function(){
    var currentDiv;
    for (var i = 0; i < letterGroups.length; i++) {
      currentDiv = letterGroups[i];
      if (currentDiv.className.indexOf("hidden") < 0){
        currentDiv.classList.add("hidden");
      } 
    }
  }

  cb.addContact = function(){

    var contacts = ContactBook.getContacts();

    var addNameEl = document.getElementById('addName');
    var firstNameEl = document.getElementById('addFirst');

    if (!addNameEl.value){
      alert('You must enter a valid Last Name/Business Name');
      return;
    }

    var mainName = addNameEl.value;
    var newContact = {};

    if (!firstNameEl.value){
      //business
      newContact.business = mainName;
      
    } else {
      //person
      var firstName = firstNameEl.value
      newContact.last_name = mainName;
      newContact.first_name = firstName;
    }

    var letter = mainName[0].toLowerCase();
    console.log("letter", letter);

    if (!(letter in contacts)){
      //add key for new letter and assign the value of an array with the newContact object inside
      contacts[letter] = [newContact];
    } else {
      contacts[letter].push(newContact);
    }

    ContactBook.refreshToolbar();

    console.log("contacts:", contacts);
  };    


  return cb;
  
})(ContactBook);

