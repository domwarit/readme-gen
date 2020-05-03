const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter the title of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Which installation is this'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage for this program'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Licensing'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please enter contributors'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Number of test'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter Github username '
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data)
}
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generateMarkdown({...answers}))
    });

}

init();
