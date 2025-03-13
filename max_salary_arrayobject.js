// How to get the objects from an array of object who has max salary code start

const arr1 = [
    { name: "Anjani", last_name: "Singh", branch: "cs", salary: "10000" },
    { name: "Ankit", last_name: "Verma", branch: "me", salary: "25000" },
    { name: "Littu", last_name: "Mohanti", branch: "it", salary: "35000" },
    { name: "Vikram", last_name: "Yadav", branch: "civil", salary: "32000" }
];

const maxSalary = arr1.reduce((acc, val) => {

    if (acc.salary > val.salary) {
        return acc;
    } else {
        return val;
    }

}, {})

console.log(maxSalary)
