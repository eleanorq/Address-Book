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




let testContact = new Contact("Ada", "Lovelace", "503-555-1111");

testContact
this.currentID