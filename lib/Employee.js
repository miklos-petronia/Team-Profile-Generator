// Employee constructor 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // Restoring name from input
    getName() {
        return this.name;
    }

    // Restoring ID from input
    getId() {
        return this.id;
    }

    // Restoring email from input
    getEmail() {
        return this.email;
    }

    // Restoring employee type 
    getRole() {
        return 'Employee';
    }
};

// To export 
module.exports = Employee; 