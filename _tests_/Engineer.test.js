// Utilizing Engineering constructor 
const Engineer = require('../lib/Engineer');

// Developing engineer object  
test('develops an Engineer object', () => {
    const engineer = new Engineer('Alec', 90, 'alec@fakemail', 'ibealec');

    expect(engineer.github).toEqual(expect.any(String));
});

// retrives github from getGithub()
test('retrives engineer github value', () => {
    const engineer = new Engineer('Alec', 90, 'alec@fakemail', 'ibealec');

    expect(engineer.obtainGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// retrives role from getRole() 
test('retrives role of employee', () => {
    const engineer = new Engineer('Alec', 90, 'alec@fakemail', 'ibealec');

    expect(engineer.obtainRole()).toEqual("Engineer");
});