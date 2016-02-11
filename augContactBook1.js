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
  

  cb.refreshDOM = function(){
    console.log("refreshDOM");
  };


  return cb;
  
})(ContactBook);

