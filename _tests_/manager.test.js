// Utilizing Manager constructor 
const Manager = require('../lib/Manager');

// Developing manager's object  
test('developing an Manager object', () => {
    const manager = new Manager('Alec', 90, 'alec.@fakemail', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Retrives role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Alec', 90, 'alec@fakemail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 