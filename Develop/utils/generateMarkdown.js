function generateMarkdown(data) {
  function generateProjectUrl(github, title) {
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${kebabCaseTitle}`;
  }
  function renderLicenseBadge(license, github, title) {
    if (license !== "None") {
      return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
    }
    return ''
  }
  function renderLicenseSection(license) {
    if (license !== "None") {
      return (
        `## License
  This project is licensed under the ${license} license.`
      )
    }
    return ''
  }
  return `
#${data.projectTitle}

${renderLicenseBadge(data.license, data.github, data.title)}
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

${renderLicenseSection(data.license)}

## Contributing

${data.contributers}

## Test 

${data.test}

## User Information




GitHub Username: [@${data.github}]

`;
}

module.exports = generateMarkdown;
