//Write an example definition of a JavaScript object for a person. The object should have a first name, Last Name, An ID number, and a function to retrieve the full name of the person.

const person = {
    id: 1,
    firstName: "Sagar",
    lastName: "Pandav",
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.getFullName());