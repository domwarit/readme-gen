const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter username'
    },
    {
        type: 'input',
        name: 'header',
        message: 'Please enter your header'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter the title of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter description'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Does you project have a table of contents'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage'
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
        message: 'Test'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions'
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
