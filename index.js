// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Contributors to the project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'test instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'usage information?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'choose a license?',
        choices: ["MIT","ISC","APACHE2.0","GPL"]
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email?',
      },
  
    ]).then(response => {
      var readmetxt = `
# Title
${response.title}

## Description
${response.description}

### Coded By:
${response.contributors}

### Table of Contents
* [installation](#installation)
* [Testing](#Testing)
* [Usage](#Usage)
* [License](#License)
* [Github](#Github)
* [Email](#Email)
#### Installation
${response.installation}

#### Testing
${response.testing}
#### Usage
${response.usage}
#### License
![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)
#### Github
[GitHub](https://github.com/${response.github})
#### Email
${response.email}
`
console.log(readmetxt)
fs.writeFileSync("README.md",readmetxt,(err,data)=>{
  if(err)throw err
})
console.log("Readme generator")
    })
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser();