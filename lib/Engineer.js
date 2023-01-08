// Import Employee constructor 
const Employee = require("./Employee");

// Engineering constructor expands employee constructor 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calling employee constructor 
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