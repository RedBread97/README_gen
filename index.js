// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Github username?"
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project name?"
    },
    {
      type: "input",
      name: "description",
      message: "please enter a detailed descrition for your project?"
    },
    {
      type: "input",
      name: "installation",
      message: "please enter any instillation instructions for your project?"
    },
    {
      type: "input",
      name: "usage",
      message: "please enter any usage instructions for your project?"
    },
    {
      type: "input",
      name: "contribution",
      message: "please enter any contributors for the project?"
  },
  {
    type: "input",
    name: "tests",
    message: "please enter any testing instructions for your project?"
},
{ 
  type: "list",
  message: "did you use any licensing?",
  name: "license",
  choices: [
      "None",
      "Apache2.0",
      "GNU Public v3.0",
      "MIT"
    ]
}

];
   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {

      if (err) {
        return console.log("something went wrong")
    } else{
        console.log("Success!")
    }
    })
    
};


// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then(function(data){
     writeToFile("README.md", generateMarkdown(data))
   })
};

// Function call to initialize app
init();
