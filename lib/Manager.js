// Import Employee Constructor
const Employee = require("./Employee");

// Manager's Constructor expands employee Constructor 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    obatainOfficeNumber() {
        return this.officeNumber;
    }

    obtainRole() {
        return "Manager";
    }
}
// to export 
module.exports = Manager;