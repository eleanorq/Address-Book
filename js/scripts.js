//Business Logic for AddressBook ---------------
function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
}
    //adds contact to AddressBook 
AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
};
    //increment this.currentId property on the AddressBook object by 1 and return updated value
AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};
    //find contacts
AddressBook.prototype.findContact = function(id) {
    if (this.contacts[id] != undefined) {
    return this.contacts[id];
    }
    return false;
};
    //delete contact //use: delete.thiscontacts[id];
AddressBook.prototype.deleteContact = function(id) {
    if (this.contacts[id] ===undefined) {
        return false;
    }
    delete this.contacts[id];
    return true
};

//Business Logic for Contacts ----------------
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

// User Interface Logic ----------
let addressBook = new AddressBook();
    //display the details of contacts
function displayContactDetails(addressBookToDisplay) {
    let contactsList = $("ul#contacts");
    let htmlForContactInfo = "";
    Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
        const contact = addressBookToDisplay.findContact(key);
        htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
        });
        contactsList.html(htmlForContactInfo);
}

    // form submission
$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
        event.preventDefault();
        const inputtedFirstName = $("input#new-first-name").val();
        const inputtedLastName = $("input#new-last-name").val();
        const inputtedPhoneNumber = $("input#new-phone-number").val();
        let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
            addressBook.addContact(newContact);
            console.log(addressBook.contacts);
    });
});


/*using object.keys() to loop through address book's contacts to display the list of contacts
for (const key in contact) {
    if (contact.hasOwnProperty(key)) {
      console.log(contact[key]);
    }
  }/*
//object.keys() method returns all keys  in array and then loops over them
