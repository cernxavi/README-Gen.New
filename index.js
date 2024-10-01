// TODO: Include packages needed for this application
import fs, { write } from "fs";
import inquirer from "inquirer";
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
        validate: (input) => input ? true : 'Project title cannot be empty.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter your project description:',
        validate: (input) => input ? true : 'Description cannot be empty.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
        default: 'npm install',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
        validate: (input) => input ? true : 'Usage information cannot be empty.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'BSD_3', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
        default: 'Contributions are welcome. Please open an issue or submit a pull request.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: (input) => input ? true : 'GitHub username cannot be empty.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: function(email) {
          // Simple email validation regex
          const pass = email.match(
            /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/
          );
          if (pass) {
            return true;
          }
          return 'Please enter a valid email address.';
        },
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('README.md has been successfully generated!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((responses) => {
        const markdownContent = generateMarkdown(responses);
        fs.writeFile('README.md', markdownContent, (err) => {
          if (err) throw err;
          console.log('README.md successfully generated!');
        });
      })
      .catch((error) => {
        console.error('Error initializing app:', error);
      });
  }
  
  init();
