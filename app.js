var ContactBook = (function () {
  var contactBookArray = [];

  return {
    getContact: function () {

    },
    loadContact: function (callback) {
      var contactLoader = new XMLHttpRequest();

      contactLoader.addEventListener("load", function () {
        var contactBookData = JSON.parse(this.responseText);
        contactBookArray = carInventoryData.cars;

        callback(contactBookArray);

      });
      inventoryLoader.open("GET", "contactBook.json")
      inventoryLoader.send();
    }
  };

})();

