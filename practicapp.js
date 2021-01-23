// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

// // Write code to use inquirer to gather information about the development team members,
// var teamList = [];

// // function getManager() {
// const managerPrompt = inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is the team's manager name?",
//     },
//     {
//       type: "input",
//       name: "id",
//       message: "What is the team's manager ID?"
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "What is the team's manager email:",

//     },
//     {
//       type: "input",
//       name: "officeNum",
//       message: "What is the team's manager office number?",

//     },
//     {
//       type: "list",
//       name: "addMemeber",
//       message: "Do you want to add intern or engineer?",
//       choices: ["intern", "enineer", "finish"]
//     }
//   ])
//     .then(function(response){
//       const newManager = new Manager(response.name, response.id, response.email, response.officeNum);
//       teamList.push(newManager);
//     });
// // }
// // getManager();




// // promt for employees 
// function getEngineer() {
//   inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",

//     },
//     {
//       type: "input",
//       name: "role",
//       message: "what is your role in the company?"
//     },
//     {
//       type: "input",
//       name: "employer ID",
//       message: "what is your employee ID?"
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "Engineer's email:",

//     },
//     {
//       type: "input",
//       name: "gitHub",
//       message: "what is your GitHub username?",

//     }
//   ]);
//   getEngineer();

//   // promt for intern
//   function getIntern() {
//     const intern= inquirer.prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is your name?",

//       },
//       {
//         type: "input",
//         name: "role",
//         message: "what is your role in the company?"
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "what is your employee ID?"
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "Intern's email: ",

//       },
//       {
//         type: "input",
//         name: "school",
//         message: "What is your school:",

//       }
//     ]).then(function(intern){
//       const newIntern = new Intern(intern.name, intern.id, intern.email, intern.school);
//       teamList.push(newIntern);
//     })

//     getIntern();

//     render(teamList);

// fs.writeFile("outputpath", html, (err) => {
//   //       if (err) throw err;
//   //       else console.log("HTML team success");
//   //     });
// and to create objects for each team member (using the correct classes as blueprints!)











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
//     var html = `
// main.html 
// `

//     fs.writeFile("outputpath", html, (err) => {
//       if (err) throw err;
//       else console.log("HTML team success");
//     });




//     // LET TRY THIS 


//     // const inquirer = require("inquirer");
//     // const fs = require("fs");
//     const util = require("util");
//     const writeFileAsync = util.promisify(fs.writeFile);
//     async function getIntern() {
//       try {
//         // const {variable names to assign based on object properties} = (object we are assigning from);
//         // we can then do: name instead of user.name if we instead had:
//         // const user = await inquirer.prompt( [{
//         const { name, id, email, school } = await inquirer.prompt(
//           [
//             {
//               type: "input",
//               name: "name",
//               message: "What is your name?"

//             },

//             {
//               type: "input",
//               name: "id",
//               message: "what is your employee ID?"
//             },
//             {
//               type: "input",
//               name: "email",
//               message: "Intern's email: "

//             },
//             {
//               type: "input",
//               name: "school",
//               message: "What is your school:"

//             }
//           ]);
//         const newIntern = new Intern(name, id, email, school);
//         teamList.push(newIntern);

//       } 
//     }
//     getIntern();
//     render(teamList);



// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
// const render = require("./lib/htmlRenderer");

// const teamMembers = [];

// const idArray = [];
// function appMenu() {
//   function createManager() {
//     console.log("Please build your team");
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "managerName",
//         message: "What is your manager's name?",

//       },
//       {
//         type: "input",
//         name: "managerId",
//         message: "What is your manager's id?",

//       },
//       {
//         type: "input",
//         name: "managerEmail",
//         message: "What is your manager's email?",

//       },
//       {
//         type: "input",
//         name: "managerOfficeNumber",
//         message: "What is your manager's office number?",

//       }
//     ]).then(responsewers => {
//       const manager = new Manager(responsewers.managerName, responsewers.managerRole, responsewers.managerId, responsewers.managerEmail, responsewers.managerOfficeNumber);
//       teamMembers.push(manager);
//       idArray.push(responsewers.managerId);
//       idArray.push(responsewers.managerOfficeNumber);
//       buildTeam();
//       createTeam();
//     });
//   }
//   function createTeam() {
//     inquirer.prompt([
//       {
//         type: "list",
//         name: "memberChoice",
//         message: "Which type of team member would you like to add?",
//         choices: [
//           "Engineer",
//           "Intern",
//           "I don't want to add any more team members"
//         ]
//       }
//     ]).then(userChoice => {
//       switch (userChoice.memberChoice) {
//         case "Engineer":
//           addEngineer();
//           break;
//         case "Intern":
//           addIntern();
//           break;
//         default:
//           buildTeam();
//       }
//     });
//   }
//   function addEngineer() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "engineerName",
//         message: "What is your engineer's name?",

//       },
//       {
//         type: "input",
//         name: "engineerId",
//         message: "What is your engineer's id?",

//       },
//       {
//         type: "input",
//         name: "engineerEmail",
//         message: "What is your engineer's email?",

//       },
//       {
//         type: "input",
//         name: "engineerGithub",
//         message: "What is your engineer's GitHub username?",

//       }
//     ]).then(responsewers => {
//       const engineer = new Engineer(responsewers.engineerName, responsewers.engineerId, responsewers.engineerEmail, responsewers.engineerGithub);
//       teamMembers.push(engineer);
//       idArray.push(responsewers.engineerId);
//       createTeam();
//     });
//   }
//   function addIntern() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "internName",
//         message: "What is your intern's name?",

//       },
//       {
//         type: "input",
//         name: "internId",
//         message: "What is your intern's id?",

//       },
//       {
//         type: "input",
//         name: "internEmail",
//         message: "What is your intern's email?",

//       },
//       {
//         type: "input",
//         name: "internSchool",
//         message: "What is your intern's school?",

//       }
//     ]).then(responsewers => {
//       const intern = new Intern(responsewers.internName, responsewers.internId, responsewers.internEmail, responsewers.internSchool);
//       teamMembers.push(intern);
//       idArray.push(responsewers.internId);
//       createTeam();
//     });
//   }
//   function buildTeam() {
//     let htmlString = '';
//     let headHtml = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Bootstrap Table with Add and Delete Row Feature</title>
//     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sresponse">
//     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
//     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
//     <style type="text/css">
//         body {
//             color: #404E67;
//             background: #F5F7FA;
//         font-family: 'Open Sresponse', sresponse-serif;
//       }
//       .table-wrapper {
//         width: 100%
//         margin: auto;
//             border-top: double;
//             border-bottom: double;
//             padding: 20px;	
//             box-shadow: 0 1px 1px rgba(0,0,0,.05);
//         }
//         .table-title {
//             padding-bottom: 10px;
//             margin: 0 0 10px;
//         }
//         .table-title h2 {
//             margin: 6px 0 0;
//             font-size: 22px;
//         }
//         .table-title .add-new {
//             float: right;
//         height: 30px;
//         font-weight: bold;
//         font-size: 12px;
//         text-shadow: none;
//         min-width: 100px;
//         border-radius: 50px;
//         line-height: 13px;
//         }
//       .table-title .add-new i {
//         margin-right: 4px;
//       }
//         table.table {
//             table-layout: flex;
//         }
//         table.table tr th, table.table tr td {
//             border-color: #e9e9e9;
//         }
//         table.table th i {
//             font-size: 13px;
//             margin: 0 5px;
//             cursor: pointer;
//         }
//         table.table th:last-child {
//             width: 100px;
//         }
//         table.table td a {
//         cursor: pointer;
//             display: inline-block;
//             margin: 0 5px;
//         min-width: 24px;
//         }    
//       table.table td a.add {
//             color: #27C46B;
//         }
//         table.table td a.edit {
//             color: #FFC107;
//         }
//         table.table td a.delete {
//             color: #E34724;
//         }
//         table.table td i {
//             font-size: 19px;
//         }
//       table.table td a.add i {
//             font-size: 24px;
//           margin-right: -1px;
//             position: relative;
//             top: 3px;
//         }    
//         table.table .form-control {
//             height: 32px;
//             line-height: 32px;
//             box-shadow: none;
//             border-radius: 2px;
//         }
//       table.table .form-control.error {
//         border-color: #f50000;
//       }
//       table.table td .add {
//         display: none;
//       }
//     </style>
//     <script type="text/javascript">
//     $(document).ready(function(){
//       $('[data-toggle="tooltip"]').tooltip();
//       var actions = $("table td:last-child").html();
//       // Append table with add row form on add new button click
//         $(".add-new").click(function(){
//         $(this).attr("disabled", "disabled");
//         var index = $("table tbody tr:last-child").index();
//         var row = '<tr>' +
//         '<td><input type="text" class="form-control" name="name" id="name"></td>' +
//         '<td><input type="text" class="form-control" name="role" id="role"></td>' +
//         '<td><input type="text" class="form-control" name="ID" id="ID"></td>' +
//         '<td><input type="text" class="form-control" name="email" id="email"></td>' +
//         '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
//   '<td>' + actions + '</td>' +
//     '</tr>';
//           $("table").append(row);		
//         $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
//             $('[data-toggle="tooltip"]').tooltip();
//         });
//       // Add row on add button click
//       $(document).on("click", ".add", function(){
//         var empty = false;
//         var input = $(this).parents("tr").find('input[type="text"]');
//             input.each(function(){
//           if(!$(this).val()){
//             $(this).addClass("error");
//             empty = true;
//           } else{
//                     $(this).removeClass("error");
//                 }
//         });
//         $(this).parents("tr").find(".error").first().focus();
//         if(!empty){
//           input.each(function(){
//             $(this).parent("td").html($(this).val());
//           });			
//           $(this).parents("tr").find(".add, .edit").toggle();
//           $(".add-new").removeAttr("disabled");
//         }		
//         });
//       // Edit row on edit button click
//       $(document).on("click", ".edit", function(){		
//             $(this).parents("tr").find("td:not(:last-child)").each(function(){
//           $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
//         });		
//         $(this).parents("tr").find(".add, .edit").toggle();
//         $(".add-new").attr("disabled", "disabled");
//         });
//       // Delete row on delete button click
//       $(document).on("click", ".delete", function(){
//             $(this).parents("tr").remove();
//         $(".add-new").removeAttr("disabled");
//         });
//     });
//     </script>
//     </head>
//     <body> <div class="container">
//     <div class="table-wrapper">
//         <div class="table-title">
//             <div class="row">
//                 <div class="col-sm-8"><h2>Employee <b>Details</b></h2></div>
//                 <div class="col-sm-4">
//                     <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
//                 </div>
//             </div>
//         </div>
//         <table class="table table-bordered">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Role</th>
//                     <th>ID</th>
//                     <th>Email</th>
//                     <th>Contact</th>
//                 </tr>
//             </thead>
//             <tbody>
//       <tr>`;


//         teamMembers.forEach(member => {
//             let variable;
//             if (member.getRole() === "Manager"){
//                 variable = `Office Number: ${member.getOfficeNumber()}`
//             }
//             if (member.getRole()=== "Engineer"){
//                 variable = `Github name: ${member.getGithub()}`
//             }
//             if (member.getRole()=== "Intern"){
//                 variable = `School: ${member.getSchool()}`
//             }

//                let memberDiv = 
//                `<td>${member.getName()}</td>
//                 <td>${member.getRole()}</td>
//                 <td>${member.getId()}</td>
//                 <td>${member.getEmail()}</td>
//                 <td> ${variable} </td>
//                 <td>
// 							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
//               <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
//               <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
//               </td></tr>`;

//     headHtml += memberDiv;
//   });
//   const footerHtml = `
//       </body>
//       </html>`;

//   htmlString = headHtml + footerHtml;
//   fs.writeFileSync('team.html', htmlString, "utf-8");
// }

// createManager();
// }
// appMenu();



// // try this again


// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
// const render = require("./lib/htmlRenderer");

// const teamMembers = [];


// function appMenu() {
//   function createManager() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "managerName",
//         message: "What is your manager's name?",

//       },
//       {
//         type: "input",
//         name: "managerId",
//         message: "What is your manager's id?",

//       },
//       {
//         type: "input",
//         name: "managerEmail",
//         message: "What is your manager's email?",

//       },
//       {
//         type: "input",
//         name: "managerOfficeNumber",
//         message: "What is your manager's office number?",

//       }
//     ]).then(responsewers => {
//       const manager = new Manager(responsewers.managerName, responsewers.managerRole, responsewers.managerId, responsewers.managerEmail, responsewers.managerOfficeNumber);
//       teamMembers.push(manager);
//       buildTeam();
//       // createTeam();
//     });
//   }
//   // function createTeam() {
//   //   inquirer.prompt([
//   //     {
//   //       type: "list",
//   //       name: "memberChoice",
//   //       message: "Which type of team member would you like to add?",
//   //       choices: [
//   //         "Engineer",
//   //         "Intern",
//   //         "I don't want to add any more team members"
//   //       ]
//   //     }
//   //   ]).then(userChoice => {
//   //     switch (userChoice.memberChoice) {
//   //       case "Engineer":
//   //         addEngineer();
//   //         break;
//   //       case "Intern":
//   //         addIntern();
//   //         break;
//   //       default:
//   //         buildTeam();
//   //     }
//   //   });
//   // }
//   function addEngineer() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "engineerName",
//         message: "What is your engineer's name?",

//       },
//       {
//         type: "input",
//         name: "engineerId",
//         message: "What is your engineer's id?",

//       },
//       {
//         type: "input",
//         name: "engineerEmail",
//         message: "What is your engineer's email?",

//       },
//       {
//         type: "input",
//         name: "engineerGithub",
//         message: "What is your engineer's GitHub username?",

//       }
//     ]).then(responsewers => {
//       const engineer = new Engineer(responsewers.engineerName, responsewers.engineerId, responsewers.engineerEmail, responsewers.engineerGithub);
//       teamMembers.push(engineer);
//       idArray.push(responsewers.engineerId);
//       // createTeam();
//     });
//   }
//   function addIntern() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "internName",
//         message: "What is your intern's name?",

//       },
//       {
//         type: "input",
//         name: "internId",
//         message: "What is your intern's id?",

//       },
//       {
//         type: "input",
//         name: "internEmail",
//         message: "What is your intern's email?",

//       },
//       {
//         type: "input",
//         name: "internSchool",
//         message: "What is your intern's school?",

//       }
//     ]).then(responsewers => {
//       const intern = new Intern(responsewers.internName, responsewers.internId, responsewers.internEmail, responsewers.internSchool);
//       teamMembers.push(intern);
//       idArray.push(responsewers.internId);
//       // createTeam();
//     });
//   }
//   function buildTeam() {
//     let htmlString = '';
//     let headHtml = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Bootstrap Table with Add and Delete Row Feature</title>
//     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sresponse">
//     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
//     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
//     <style type="text/css">
//         body {
//             color: #404E67;
//             background: #F5F7FA;
//         font-family: 'Open Sresponse', sresponse-serif;
//       }
//       .table-wrapper {
//         width: 100%
//         margin: auto;
//             border-top: double;
//             border-bottom: double;
//             padding: 20px;	
//             box-shadow: 0 1px 1px rgba(0,0,0,.05);
//         }
//         .table-title {
//             padding-bottom: 10px;
//             margin: 0 0 10px;
//         }
//         .table-title h2 {
//             margin: 6px 0 0;
//             font-size: 22px;
//         }
//         .table-title .add-new {
//             float: right;
//         height: 30px;
//         font-weight: bold;
//         font-size: 12px;
//         text-shadow: none;
//         min-width: 100px;
//         border-radius: 50px;
//         line-height: 13px;
//         }
//       .table-title .add-new i {
//         margin-right: 4px;
//       }
//         table.table {
//             table-layout: flex;
//         }
//         table.table tr th, table.table tr td {
//             border-color: #e9e9e9;
//         }
//         table.table th i {
//             font-size: 13px;
//             margin: 0 5px;
//             cursor: pointer;
//         }
//         table.table th:last-child {
//             width: 100px;
//         }
//         table.table td a {
//         cursor: pointer;
//             display: inline-block;
//             margin: 0 5px;
//         min-width: 24px;
//         }    
//       table.table td a.add {
//             color: #27C46B;
//         }
//         table.table td a.edit {
//             color: #FFC107;
//         }
//         table.table td a.delete {
//             color: #E34724;
//         }
//         table.table td i {
//             font-size: 19px;
//         }
//       table.table td a.add i {
//             font-size: 24px;
//           margin-right: -1px;
//             position: relative;
//             top: 3px;
//         }    
//         table.table .form-control {
//             height: 32px;
//             line-height: 32px;
//             box-shadow: none;
//             border-radius: 2px;
//         }
//       table.table .form-control.error {
//         border-color: #f50000;
//       }
//       table.table td .add {
//         display: none;
//       }
//     </style>
//     <script type="text/javascript">
//     $(document).ready(function(){
//       $('[data-toggle="tooltip"]').tooltip();
//       var actions = $("table td:last-child").html();
//       // Append table with add row form on add new button click
//         $(".add-new").click(function(){
//         $(this).attr("disabled", "disabled");
//         var index = $("table tbody tr:last-child").index();
//         var row = '<tr>' +
//         '<td><input type="text" class="form-control" name="name" id="name"></td>' +
//         '<td><input type="text" class="form-control" name="role" id="role"></td>' +
//         '<td><input type="text" class="form-control" name="ID" id="ID"></td>' +
//         '<td><input type="text" class="form-control" name="email" id="email"></td>' +
//         '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
//   '<td>' + actions + '</td>' +
//     '</tr>';
//           $("table").append(row);		
//         $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
//             $('[data-toggle="tooltip"]').tooltip();
//         });
//       // Add row on add button click
//       $(document).on("click", ".add", function(){
//         var empty = false;
//         var input = $(this).parents("tr").find('input[type="text"]');
//             input.each(function(){
//           if(!$(this).val()){
//             $(this).addClass("error");
//             empty = true;
//           } else{
//                     $(this).removeClass("error");
//                 }
//         });
//         $(this).parents("tr").find(".error").first().focus();
//         if(!empty){
//           input.each(function(){
//             $(this).parent("td").html($(this).val());
//           });			
//           $(this).parents("tr").find(".add, .edit").toggle();
//           $(".add-new").removeAttr("disabled");
//         }		
//         });
//       // Edit row on edit button click
//       $(document).on("click", ".edit", function(){		
//             $(this).parents("tr").find("td:not(:last-child)").each(function(){
//           $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
//         });		
//         $(this).parents("tr").find(".add, .edit").toggle();
//         $(".add-new").attr("disabled", "disabled");
//         });
//       // Delete row on delete button click
//       $(document).on("click", ".delete", function(){
//             $(this).parents("tr").remove();
//         $(".add-new").removeAttr("disabled");
//         });
//     });
//     </script>
//     </head>
//     <body> <div class="container">
//     <div class="table-wrapper">
//         <div class="table-title">
//             <div class="row">
//                 <div class="col-sm-8"><h2>Employee <b>Details</b></h2></div>
//                 <div class="col-sm-4">
//                     <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
//                 </div>
//             </div>
//         </div>
//         <table class="table table-bordered">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Role</th>
//                     <th>ID</th>
//                     <th>Email</th>
//                     <th>Contact</th>
//                 </tr>
//             </thead>
//             <tbody>
//       <tr>`;


//         teamMembers.forEach(member => {
//             let variable;
//             if (member.getRole() === "Manager"){
//                 variable = `Office Number: ${member.getOfficeNumber()}`
//             }
//             if (member.getRole()=== "Engineer"){
//                 variable = `Github name: ${member.getGithub()}`
//             }
//             if (member.getRole()=== "Intern"){
//                 variable = `School: ${member.getSchool()}`
//             }

//                let memberDiv = 
//                `<td>${member.getName()}</td>
//                 <td>${member.getRole()}</td>
//                 <td>${member.getId()}</td>
//                 <td>${member.getEmail()}</td>
//                 <td> ${variable} </td>
//                 <td>
// 							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
//               <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
//               <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
//               </td></tr>`;

//     headHtml += memberDiv;
//   });
//   const footerHtml = `
//       </body>
//       </html>`;

//   htmlString = headHtml + footerHtml;
//   fs.writeFileSync('team.html', htmlString, "utf-8");
// }

// createManager();
// }
// appMenu();



// try for the 10000 times
// 
// 
// 
//  
// 
// 

// const inquirer = require('inquirer');
// const fs = require('fs');

// const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');
// const render = require("./lib/htmlRenderer")


// let teamList = [];

// Questions
// const confirmManager = [{
//     type: 'confirm',
//     name: 'Manager',
//     message: 'Are you a manager?'
// }];
// const managersBio = [{
//         type: "input",
//         name: "managers_name",
//         message: "What is the team's manager name?",
//     },
//     {
//         type: "input",
//         name: "managers_id",
//         message: "What is your id?"
//     },
//     {
//         type: "input",
//         name: "managers_email",
//         message: "What is your email?"
//     },
//     {
//         type: "input",
//         name: "managers_officeNumber",
//         message: "What is your office phone number?"
//     }
// ];
// const myManagersBio = [{
//         type: "input",
//         name: "my_managers_name",
//         message: "What is your manager's name?"
//     },
//     {
//         type: "input",
//         name: "my_managers_department",
//         message: "What is your manager's department?"
//     },
//     {
//         type: "input",
//         name: "my_managers_id",
//         message: "What is your manager's id?"
//     },
//     {
//         type: "input",
//         name: "my_managers_email",
//         message: "What is your manager's email?"
//     },
//     {
//         type: "input",
//         name: "my_managers_officeNumber",
//         message: "What is your manager's office phone number?"
//     }
// ];
// const engineerQuestions = [{
//         type: "input",
//         name: "engineers_name",
//         message: "What is your engineer's name?"
//     },
//     {
//         type: "input",
//         name: "engineers_id",
//         message: "What is your engineer's id?"
//     },
//     {
//         type: "input",
//         name: "engineers_email",
//         message: "What is your engineer's email?"
//     },
//     {
//         type: "input",
//         name: "engineers_gitHub",
//         message: "What is your engineer's GitHub username?"
//     }
// ];
// const internQuestions = [{
//         type: "input",
//         name: "interns_name",
//         message: "What is your intern's name?"
//     },
//     {
//         type: "input",
//         name: "interns_id",
//         message: "What is your intern's id?"
//     },
//     {
//         type: "input",
//         name: "interns_email",
//         message: "What is your intern's email?"
//     },
//     {
//         type: "input",
//         name: "interns_school",
//         message: "What is your intern's school?"
//     }
// ];
// const list = [{
//     type: "list",
//     name: "teamRole",
//     choices: ["Engineer", "Intern", "I don't want to add any more team members"],
//     message: "Select the role to add in your team?"
// }];




// // const mapro = () => inquirer.prompt(managersBio).then(response => {

// //       promptManager();

// // });
// // mapro()

// // Inquirer First question for manager
// // inquirer.prompt(confirmManager).then(response => {
// //     if (response.Manager === true) {
// //         promptManager();
// //     } else {
// //         promptMyManager();
// //     }
// // });



// // If you are a manager then responsewer
// const promptManager = () => {
//     inquirer.prompt(managersBio)
//     .then(response => {
//         // console.log(response);
//         teamList.push(new Manager(response.managers_name, response.managers_id, response.managers_email, response.managers_officeNumber));
//         promptNext();
//     });
// };

// promptManager()
// // If you are NOT a manager then responsewer
// // const promptMyManager = () => {
// //     inquirer.prompt(myManagersBio).then(response => {
// //         console.log(response);
// //         teamList.push(new Manager(response.managers_name, response.managers_id, response.managers_email, response.managers_officeNumber));
// //         promptNext();
// //     });
// // };

// // Prompt next choice of questions to select your choice
// const promptNext = () => {
//   inquirer.prompt(list).then(data => {
//       switch (data.teamRole) {
//           case "Engineer":
//               promptEngineer();
//               break;
//           case "Intern":
//               promptIntern();
//               break;
//           default:
//               generateHtml();
//       }
//   });
// };

// // If you are an Engineer
// const promptEngineer = () => {
//     inquirer.prompt(engineerQuestions).then(response => {
//         // console.log(response);
//         teamList.push(new Engineer(response.engineers_name, response.engineers_id, response.engineers_email, response.engineers_gitHub));
//         promptNext();
//     });
// };

// // If you are an Intern
// const promptIntern = () => {
//     inquirer.prompt(internQuestions).then(response => {
//         // console.log(response);
//         teamList.push(new Intern(response.interns_name, response.interns_id, response.interns_email, response.interns_school));
//         promptNext();
//     });
// };

// // Create HTML
// const generateHtml = () => {
//     // console.log('this is new html');
//     // console.log(render(teamList));
//     render(teamList);



//     fs.writeFile('index.html', render(teamList), function(err){
//         if(err) throw err;
//     })
// };


// okI think this will work,last try I am so tired 
// 
// 
// 
// 
// 
// 
// 
// 

const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const render = require("./lib/htmlRenderer");
const path = require("path");



const outputPath = path.join(__dirname, "output/team.html");

let teamList = [];

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