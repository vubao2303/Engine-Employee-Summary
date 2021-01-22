const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
var teamList = [];

// promt for manager
const managerPrompt = () => 
  inquirer.prompt([
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

    },
    {
      type: "list",
      name: "addMemeber",
      message: "Do you want to add intern or engineer?",
      choices: ["intern", "enineer", "finish"],
    }
  ]);
  
 managerPrompt() 
  .then((response) => {
    const newManager = new Manager(response.name, response.id, response.email, response.officeNum);
    teamList.push(newManager);
  });

// promt for engineer
const engineerPrompt = () =>
  inquirer.prompt([
    {
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
  ]);
  engineerPrompt()
    .then(function (response) {
      const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
      teamList.push(newEngineer);
    });


// prompt for intern 
const internPrompt = () => 
  inquirer.prompt([
    {
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
  ]);
  internPrompt()
    .then(function (response) {
      const newIntern = new Intern(response.name, response.id, response.email, response.school);
      teamList.push(newIntern);
    });


const teamHtml = render(teamList);

  fs.writeFile("team.html", teamHtml, (err) => {
    if (err) throw err;
    else console.log("HTML team success");
  });





    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!

    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it
    // does not.

    // HINT: each employee type (manager, engineer, or intern) has slightly different
    // information; write your code to ask different questions via inquirer depending on
    // employee type.

    // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
    // and Intern classes should all extend from a class named Employee; see the directions
    // for further information. Be sure to test out each class and verify it generates an
    // object with the correct structure and methods. This structure will be crucial in order
    // for the provided `render` function to work! ```


    // at one point you will do fs.writeFile (outputPath)
