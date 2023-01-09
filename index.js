// Connection to the page development
const developHTML = require('./src/developHTML');

// The team description
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Node section
const fs = require('fs');
const inquirer = require('inquirer');

// The team's array
const teamArray = [];

// Start of manager prompts 
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the leader/manager of this team? ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide and enter the manager's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide & enter the leader/manager's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please provide and enter the leader/manager's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide and enter the leader/manager's email adress.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please provide and enter an email adress')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please provide and enter the leader's/manager's office number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please provide and enter an office number')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    console.log(`
    =================
    Adjoin workers to the team
    =================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please select your employee's part",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of your employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide and enter an employee's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's ID number.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please provide and enter your employee's ID number")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email adress.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please provide and enter an email adress')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your employee's github username?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide and enter your employee's github username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern school name?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide and enter your intern's school name")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more employees to become team members?',
            default: false
        }
    ])
        .then(employeeData => {
            // Data for employee category

            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })

};


// Action to make HTML directory file utilizing file arrangment
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if failure occurs
        if (err) {
            console.log(err);
            return;
            // When the profile has been developed
        } else {
            console.log("The team profile has been developed. Please inspect it in the index.html")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return developHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });