const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const outputPath = path.join(__dirname, "output/team.html");
const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
let teamList = [];

// promt for manager
// prompt questions 
const managers = [
  {
    type: "input",
    name: "name",
    message: "What is the team's manager name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team's manager ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team's manager email:",

  },
  {
    type: "input",
    name: "officeNum",
    message: "What is the team's manager office number?",

  }
];

// promt for engineer
const engineers = [{
    type: "input",
    name: "name",
    message: "What is the team's engineer name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team's engineer ID?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the team's engineer email:",

  },
  {
    type: "input",
    name: "github",
    message: "What is the team's engineer GitHub name?",
  
  }
];

// // prompt for intern 
const interns = [{
    type: "input",
    name: "name",
    message: "What is the team's intern name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team's intern ID?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the team's intern email:",

  },
  {
    type: "input",
    name: "school",
    message: "What is the team's intern school?",

  }
  ];
  const list = [{
    type: "list",
    name: "teamRole",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    message: "Select the role to add in your team?"
}];



// promptManager
const promptManager = () => {
  inquirer.prompt(managers)
    .then(response => {
      // console.log(response);
      teamList.push(new Manager(response.name, response.id, response.email, response.officeNum));
      promptNext();
    });
};
// call the function here, only manager function
promptManager()


// Prompt next choice of questions to select your choice
const promptNext = () => {
  inquirer.prompt(list).then(data => {
    switch (data.teamRole) {
      case "Engineer":
        promptEngineer();
        break;
      case "Intern":
        promptIntern();
        break;
      default:
        generateHtml();
    }
  });
};

//  Engineer
const promptEngineer = () => {
  inquirer.prompt(engineers).then(response => {
    // console.log(response);
    teamList.push(new Engineer(response.name, response.id, response.email, response.github));
    promptNext();
  });
};

// Intern
const promptIntern = () => {
  inquirer.prompt(interns).then(response => {
    // console.log(response);
    teamList.push(new Intern(response.name, response.id, response.email, response.school));
    promptNext();
  });
};

// Create HTML
const generateHtml = () => {
  // console.log('this is new html');
  // console.log(render(teamList));
  render(teamList);
    fs.writeFile(outputPath, render(teamList), function(err){
      if(err) throw err;
  })

};