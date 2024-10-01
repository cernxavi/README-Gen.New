// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  const badges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    BSD_3: '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  const links = {
    MIT: 'https://opensource.org/licenses/MIT',
    GPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
    BSD_3: 'https://opensource.org/licenses/BSD-3-Clause',
  };
  return links[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license. For more details, please visit [this link](${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

\`\`\`
${data.tests}
\`\`\`

${renderLicenseSection(data.license)}

## Questions

If you have any questions, please feel free to reach out:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}
export default generateMarkdown;
