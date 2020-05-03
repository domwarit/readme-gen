function generateMarkdown(data) {
  return `
#${data.projectTitle}

## Description

${data.description}

## Table of Contents


* [Installation](#intallation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

![license](https://img.shields.io/badges/lincense-${(data.license).replace(/ /g, "_")}-blue)

## Contributing

${data.contributers}

## Test 

${data.test}

## User Information




GitHub Username: [@${data.github}]

`;
}

module.exports = generateMarkdown;
