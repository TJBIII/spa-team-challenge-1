var ContactBook = (function () {
  var contactBookArray = [];

  return {
    getContacts: function () {
      return contactBookArray;
    },

    loadContact: function (callback) {
      var contactRequest = new XMLHttpRequest();

      contactRequest.addEventListener("load", function () {
        var contactBookData = JSON.parse(contactRequest.responseText);
        contactBookArray = contactBookData.contactBook;
        //console.log("contactBookArray", contactBookArray);

        //initialize toolbar
        ContactBook.refreshToolbar();
        callback(contactBookArray);

      });
      contactRequest.open("GET", "contactBook.json")
      contactRequest.send();
    }
  };

})();
