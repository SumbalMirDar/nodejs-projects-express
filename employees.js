module.exports = [
  {
    "id": 4,
    "name": "Gorge",
    "age": 22,
    "gender": "Male",
    "department": {
      "id": 101,
      "name": "Developer",
      "manager": "Eve Smith"
    },
    "status": "Working"
  },
  {
    "id": 1,
    "name": "Alice",
    "age": 32,
    "gender": "Female",
    "department": {
      "id": 101,
      "name": "Human Resources",
      "manager": "Eve Smith"
    },
    "position": "HR Manager",
    "salary": 60000,
    "hireDate": "2022-01-15",
    "isActive": true,
    "projects": [
      {
        "id": 201,
        "name": "Employee Onboarding System",
        "startDate": "2022-02-01",
        "endDate": "2022-03-15",
        "status": "Pending"
      },
      {
        "id": 202,
        "name": "Diversity and Inclusion Initiative",
        "startDate": "2022-04-01",
        "endDate": "2024-03-06",
        "status": "Pending"
      }
    ],
    "appraisals": [
      {
        "id": 301,
        "year": 2022,
        "rating": 4,
        "comments": "Consistently meets or exceeds expectations."
      },
      {
        "id": 302,
        "year": 2021,
        "rating": 3,
        "comments": "Shows improvement in communication skills."
      }
    ],
    "status": "Working"
  },
  {
    "id": 2,
    "name": "Bob",
    "age": 28,
    "gender": "Male",
    "department": {
      "id": 102,
      "name": "Marketing",
      "manager": "John Doe"
    },
    "position": "Marketing Coordinator",
    "salary": 45000,
    "hireDate": "2022-02-10",
    "isActive": true,
    "projects": [
      {
        "id": 203,
        "name": "Product Launch Campaign",
        "startDate": "2022-03-01",
        "endDate": null,
        "status": "Ongoing"
      }
    ],
    "appraisals": [
      {
        "id": 303,
        "year": 2022,
        "rating": 4,
        "comments": "Consistently performs well in project management."
      }
    ],
    "status": "Working"
  },
  {
    "id": 3,
    "name": "Charlie",
    "age": 35,
    "gender": "Male",
    "department": {
      "id": 103,
      "name": "Sales",
      "manager": "Sarah Johnson"
    },
    "position": "Sales Representative",
    "salary": 50000,
    "hireDate": "2021-12-01",
    "isActive": false,
    "projects": [],
    "appraisals": [
      {
        "id": 304,
        "year": 2021,
        "rating": 2,
        "comments": "Needs improvement in meeting sales targets."
      }
    ],
    "status": "Working"
  }
];