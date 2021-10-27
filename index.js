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
        name: 'Description',
        message: 'What is your project description?',
      },
      {
        type: 'input',
        name: 'Contributor',
        message: 'Contributors to the project?',
      },
      {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
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
#### Installation
${response.installation}
`
console.log(readmetxt)
    })
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser();