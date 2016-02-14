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
    },

    sortGroup : function (arr) {
      //sort ann array of contact objects by the last_name/business name
      arr.sort(function(a, b){
        // console.log("a", a);
        // console.log("b", b);
         var nameA = (a.last_name || a.business).toLowerCase();
         var nameB = (b.last_name || b.business).toLowerCase();
         if (nameA < nameB) //sort string ascending
          return -1;
         if (nameA > nameB)
          return 1;
         return 0; //default return value (no sorting)
      });
      return arr;
    }

  };

})();
