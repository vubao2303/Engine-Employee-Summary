# Engine-Employee-Summary

Using npm install inquirer to create prompts with many inputs, checkbox, and list, for user to answer the questions to generate a  team that has manager, engineer, and employees. The new team.html file is in the output file and it contains the basic informtion of employees such as name, Id, gitHub account, or intern's school name. In the promts,there is an option to add more team memeber, or to finish the team's list. Once the list is done and team memember's profiles are added in, the team.htm file is generate. 
This project also uses jest to test the constructor functions, and file system that is built into node to write and read files. 

## Site-video 
[Guide Video]()

# Table of Contents 
[Tittle](#Engine-Employee-Summary)

[Guide Video](#Guide-Video)

[Table of Contents](#Table-of-Content)

[Description of Page Building](#Description-of-Page-Building)

[Code Snippet](#Code-Snippet)

[Technologies Used](#Technologies-Used)

[Author](#Author)

[License](#License)


## Description of Page Building 
* nmp install to download packages and dependencies 
  
* In app.js file  
  <ul> 
  <li> Create consts that require node's file system, util, and inquirer dependency
  <li> Add inquirer promt questions
  <li> Then add function to push users' input into teamlist array 
  <li> Render main html with teamlist information 
  <li> Write file using Node file system generate a team.html
  <li> Make sure to use a call back function to catch err 
  </li>
  </ul>
    
* In other .js files
  <ul>
  <li> Requires files that are needed 
  <li> Add Class constructor that has keys value pair and methods 
  <li> Exports the files so other files can use it  
  </li>
  </ul>

* In html files 
  <ul> Apply different colors palates for different role of employees </ul>



## Code Snippet
Install npm package 
 
npm install

Required consts 
``` Javascript
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
```

Export modules so they can be use in other files 
``` Javascript
module.exports = Employee;
module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;
module.exports = render;
```

Plug users' inputs into the new oject
``` Javascript
const promptManager = () => {
  inquirer.prompt(managers)
    .then(response => {
      // console.log(response);
      teamList.push(new Manager(response.name, response.id, response.email, response.officeNum));
      promptNext();
    });
};
```

## Technologies Used
- Node - an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser.
  * [Node.js](https://nodejs.org/dist/latest-v14.x/docs/api/)
- Git - version control system to track changes to source code
  * [Git](https://git-scm.com/)
- GitHub - hosts repository that can be deployed to GitHub Pages
  * [Github](https://github.com/)
- File system - allows you to work with the file system on your computer
  * [File System](https://nodejs.org/api/fs.html#fs_file_system)
- Inquire - an NPM package that provides an easy way to capture user input 
  * [Inquire](https://www.npmjs.com/package/inquirer)
- Jest -  test runner and assertion library for Node. js applications
  * [Jest](https://jestjs.io/docs/en/getting-started)
  

## Author

* **B Tram Vu** 

- [Link to Portfolio Site](https://vubao2303.github.io/portfolio/)
- [Link to Github](https://github.com/vubao2303/Engine-Employee-Summary)
- [Link to LinkedIn](https://www.linkedin.com/in/tram-vu-866250121/)

## License

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.