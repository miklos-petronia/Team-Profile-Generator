// Utilizing Employee constructor 
const Employee = require('../lib/Employee');

// Developing employee object 
test('develops an employee object', () => {
    const employee = new Employee('Alec', 90, 'alec@fakemail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Retrives id from getId() 
test('retrives employee name', () => {
    const employee = new Employee('Alec', 90, 'alec@fakemail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Retrives id from getId() 
test('retrives employee ID', () => {
    const employee = new Employee('Alec', 90, 'alec@fakemail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Retrives emails from getEmail()
test('retrives employee email', () => {
    const employee = new Employee('Alec', 90, 'alec@fakemail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// retrives role from getRole()
test('retrives role of employee', () => {
    const employee = new Employee('Alec', 90, 'alec@fakemail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 