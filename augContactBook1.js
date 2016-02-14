var ContactBook = (function (cb) {
  //get an array of all the letter divs in the DOM
  var letterGroups = document.getElementsByClassName("row letter-group");
    
  cb.refreshToolbar = function(letter){

    var searchLetter = letter || ''; 

    //reference to toolbar div in DOM
    var toolbarEl = document.getElementById('toolbarContainer');

    var navHTML = "";
    navHTML += `<div class="btn-toolbar">`;
    navHTML +=  `<div class="btn-group btn-group-sm">`;

    var contacts = ContactBook.getContacts();
    //get array of sorted keys to make toolbar tabs from
    var lettersArr = Object.keys(contacts).sort();

    if (searchLetter === '') {
      for (var letter in lettersArr){
        navHTML += `<button class="btn btn-default">${lettersArr[letter].toUpperCase()}</button>`;   
      }
    } else {
      for (var letter in lettersArr){
        if (lettersArr[letter] === searchLetter) {
          navHTML += `<button class="btn btn-default">${lettersArr[letter].toUpperCase()}</button>`; 
        }
      }      
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
    //adds the class 'hidden' to all letter group divs
    var currentDiv;
    for (var i = 0; i < letterGroups.length; i++) {
      currentDiv = letterGroups[i];
      if (currentDiv.className.indexOf("hidden") < 0){
        currentDiv.classList.add("hidden");
      } 
    }
  };

  cb.createNewLetterGroup = function (letter){
    //creates a new letter group div in the container for when adding a contact that starts with a letter not previously present in contacts
    var contacts = ContactBook.getContacts();

    var containerEl = document.getElementById("container");

    var group = contacts[letter];

    var containerElString = "";
    containerElString += `<div class="row letter-group" id="${letter}">`;
    for (var i = 0; i < contacts[letter].length; i++) {
      var name = (contacts[letter][i].last_name || contacts[letter][i].business);
      console.log("name", name);
      containerElString += `<div class="col-md-12">${name}</div>`;
    };
    containerElString += `</div>`;

    containerEl.innerHTML += containerElString;
  };


  cb.replaceLetterGroup = function (letter) {
    //rebuilds a letter group for when a new contact is added
    var contacts = ContactBook.getContacts();

    var letterEl = document.getElementById(letter);

    var group = ContactBook.sortGroup(contacts[letter]);

    var containerElString = "";

    for (var i = 0; i < group.length; i++) {
        var name = (group[i].last_name || group[i].business);
        containerElString += `<div class="col-md-12">${name}</div>`;
      }
    letterEl.innerHTML = containerElString;

    //show new group with most recently added contact
    letterEl.classList.remove("hidden");
  };


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
      ContactBook.hideAllLetterDivs();
      ContactBook.createNewLetterGroup(letter);
    } else {
      //push newContact into already existing array 
      contacts[letter].push(newContact);
      ContactBook.hideAllLetterDivs();
      ContactBook.replaceLetterGroup(letter); 
    }

    ContactBook.refreshToolbar();

    addNameEl.value = "";
    if(firstName){
      firstNameEl.value = "";
    }

    console.log("contacts:", contacts);
  };

  // takes user input and compares it to Last/Business name of all items in current contacts array
  cb.searchContacts = function() {

    var contacts = ContactBook.getContacts();
    // store user value
    var userSearch = searchEl.value;

    if (!userSearch){
      alert('Enter Valid Search Name');
      return;
    }

    var firstLetter = userSearch[0].toLowerCase();
    // settings up to search for first three letters of user's input against all "main names" in current contacts
    var searchLetters = userSearch.slice(0, 3).toLowerCase();
    console.log("firstLetter: ", firstLetter);
    var letterGroup = contacts[firstLetter];

    // results content for DOM div associated with letter
    var containerElString = "";
    // matching letter div
    var letterEl = document.getElementById(firstLetter);

    for (var i = 0; i < letterGroup.length; i++) {
        var name = (letterGroup[i].last_name || letterGroup[i].business);
        if (name.toLowerCase().includes(searchLetters)) {
          console.log("result found: ", name);
          containerElString += `<div class="col-md-12">${name}</div>`;
        }
      }
      if (containerElString === "") {
        console.log("No Results Found");
      };
    letterEl.classList.remove("hidden");
    letterEl.innerHTML = containerElString;

    // use refreshToolbar with optional argument firstLetter to only populate first letter Tab of string result
    ContactBook.refreshToolbar(firstLetter);

    // If no results, should show "No Results Found" in body
  };   



  return cb;
  
})(ContactBook);

