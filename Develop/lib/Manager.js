// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// extend 
// adjust the getRole() from employee that return employee to return manager 


// fs.appendfile("../../output/team.html", what, err=>)



const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

