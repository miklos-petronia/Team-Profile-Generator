// Import Employee Constructor 
const Employee = require('./Employee');

// Intern constructor expands employee Constructor 
class Intern extends Employee {
    constructor(name, id, email, school) {
        // call employee Constructor
        super(name, id, email);

        this.school = school;
    }

    // Restoring school from input 
    obtainSchool() {
        return this.school;
    }

    // Reverse employee role to intern
    obtainRole() {
        return "Intern";
    }
}

// To export 
module.exports = Intern; 