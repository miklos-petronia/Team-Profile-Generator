// Import Employee Constructor 
const Employee = require('./Employee');

// Manager constructor expands employee Constructor 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Call employee Constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // Reverse employee role to manager 
    obtainRole() {
        return "Manager";
    }
}

// To export 
module.exports = Manager; 