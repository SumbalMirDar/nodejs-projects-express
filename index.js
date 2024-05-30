const employees = require('./employees');
const readline = require('readline');
const fs = require('fs');



// Get the records of female employees with a salary greater than 60000
let females = employees.filter(employee => (employee.gender === 'Female' && employee.salary > 50000));
let female = employees.find(employee => (employee.gender === 'Female' && employee.salary >= 50000))
console.log(female)
let info;
if (females.length > 0) {
  info = females.map(female => {
    return {
      name: female.name,
      age: female.age,
      salary: female.salary,
      position: female.position
    };

  });
  console.log("females getting 60000", info)
} else {
  console.log("No female is getting more than 60000");
}
//check if today>= enddate update the status of project as Pending
function processEmployees() {
  return new Promise((resolve, reject) => {
    if (employees.length > 0) {
      let pendingProjects = [];

      employees.forEach(employee => {
        if (employee.projects && Array.isArray(employee.projects)) {
          employee.projects.forEach(project => {
            if (new Date(project.endDate) <= new Date() && project.endDate != null && project.endDate != undefined && project.endDate != "") {
              //get the selected keys after filtering data 
              pendingProjects.push({
                employeeName: employee.name,
                salary: employee.salary,
                position: employee.position,
                currentDate: new Date().toDateString(),
                deadline: new Date(project.endDate).toDateString(),
                projectName: project.name,
                status: project.status,
                employeeStatus: employee.status,
              })
              project.status = 'Pending';
            }
          })
        }
      })

      resolve(pendingProjects);
    } else {
      reject(new Error("Employees records not found"));
    }
  });
}

//Usage
// processEmployees()
//   .then(pendingProjects => {

//     const updatedData = JSON.stringify(employees, null, 2);
//     fs.writeFileSync('./employees.js', `module.exports = ${updatedData};`, 'utf8');
//     console.log('Changes saved successfully.');
//     console.log("Pending projects:", pendingProjects);

//   })
//   .catch(error => {
//     console.error("Error:", error.message);
//   });
console.log("type of process empoyees", typeof (processEmployees))
async function callback() {
  try {
    let getPendingProjects = await processEmployees(employees);
    const updatedData = JSON.stringify(employees, null, 2);
    fs.writeFileSync('./employees.js', `module.exports = ${updatedData};`, 'utf8');
    console.log('Changes saved successfully.');
    console.log("Pending projects:", getPendingProjects);
  } catch (error) {
    console.log("error", error)
  }
}
console.log(callback())



// console.log("b",b)            will give you error as you cannot access let before declaration
//console.log("c",c)              will give you error as you cannot access it before declaration

//function scopecheck() 
{
  var a = 0;
  let b = 2;
  const c = "5";
  a = a + 25
  console.log("a", a)   //evaluating undefined variable will give NaN
  b = b + 7
  console.log("b", b)
  // c = c+4              cannot assign c new value you can change its value without assignment operator 
  console.log("c", parseInt(c) + 4)

}
//cannot access any variable from outside the function
//console.log("function call", scopecheck())
console.log("outside the block", a);    // var will not give you error you can access it anywhere the only difference it will give you undefined before intialization access 
// console.log("outside the block",  b)    //cannot access outside the block
// console.log("outside the block", c)      //cannot access outside the block

