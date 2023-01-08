// Import Employee Constructor 
const Employee = require("./Employee");

// Engineering Constructor expands employee Constructor 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Call employee Constructor 
        super(name, id, email);

        this.github = github;
    }

    // Restoring github from input 
    obtainGithub() {
        return this.github;
    }

    // Reverse employee role to engineer
    obtainRole() {
        return "Engineer";
    }
}

// To export 
module.exports = Engineer; 