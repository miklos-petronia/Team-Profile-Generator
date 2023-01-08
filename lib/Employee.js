// Employee Constructor 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // Restoring name from input
    obtainName() {
        return this.name;
    }

    // Restoring ID from input
    obtainId() {
        return this.id;
    }

    // Restoring email from input
    obtainEmail() {
        return this.email;
    }

    // Restoring employee type 
    obtainRole() {
        return 'Employee';
    }
};

// To export 
module.exports = Employee; 