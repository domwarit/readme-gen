function generateMarkdown(data) {
  return `
# ${data.header}
## ${data.github}
 ${data.contributers}
* ${data.projectTitle}
 ${data.description}
## ${data.contents}
## ${data.installation}
 ${data.usage}
 ${data.license}
## ${data.contributors}
## ${data.test}
 ${data.questions}
`;
}

module.exports = generateMarkdown;
