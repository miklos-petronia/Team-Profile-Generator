// Utilizing Intern constructor 
const Intern = require('../lib/Intern');

// Developing intern object  
test('develops an Intern object', () => {
    const intern = new Intern('Alec', 90, 'alec@fakemail', 'Rotterdam School of Management');

    expect(intern.school).toEqual(expect.any(String));
});

// retrives school from getSchool()
test('retrives employee school', () => {
    const intern = new Intern('Alec', 90, 'alec@fakemail', 'Rotterdam School of Management');

    expect(intern.obtainSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// retrives role from getRole()
test('retrives role from employee', () => {
    const intern = new Intern('Alec', 90, 'alec@fakemail.com', 'Rotterdam School of Management');

    expect(intern.obtainRole()).toEqual("Intern");
}); 