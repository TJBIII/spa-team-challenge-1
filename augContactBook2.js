!function ContactBook(cb) {  
  // takes user input and compares it to Last/Business name of all items in current contacts array
  cb.searchContacts = function() {

    // hide any existing errors
    if (errorSection) {
      errorSection.classList.add("hidden");
    }

    var contacts = cb.getContacts();
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

    // Section for errors, should only hold 1 error is redefined any time there is an error (not +=)
    var errorContent = "";

    // results content for DOM div associated with letter
    var containerElString = "";
    // matching letter div
    var letterEl = document.getElementById(firstLetter);

    if (letterGroup) {

      var matches = 0;

      for (var i = 0; i < letterGroup.length; i++) {
        var name = (letterGroup[i].last_name || letterGroup[i].business);
        if (contacts[firstLetter] && name.toLowerCase().includes(searchLetters)) {
            console.log("result found: ", name);
            containerElString += `<div class="col-md-12">${name}</div>`;

          letterEl.classList.remove("hidden");
          letterEl.innerHTML = containerElString;

          matches++;

          // use refreshToolbar with optional argument firstLetter to only populate first letter Tab of string result
          cb.refreshToolbar(); // Removed optional parameter so the entire bar shows instead of the letter (easier to return to initial functionality state)
        }     
      }
      // match failure error within existing letter group
      if (matches === 0) {
        console.log("Match Failure within Existing Letter Group Else");
        errorPrint();          
      }
    // failure condition for non-existing letter group
    } else {
      console.log("No Letter Group Match Else");
      errorPrint();
    }
    searchEl.value = "";

    function errorPrint () {
      console.log("Error Print");

        
      console.log("errorSection: ", errorSection);
      var error = `<div class="panel panel-default" id="errorDiv">
                        <div class="panel-body">
                          No Results Found for '${userSearch}'
                        </div>
                      </div>`;

      errorContent = error;
      errorSection = document.getElementById("errorSection");
      errorSection.classList.remove("hidden");
      errorSection.innerHTML = errorContent; //eventually replace with error instaed of errorContent
    };
  };

  return cb;

}(ContactBook);