function employeesInfo(names) {
    for (let name of names) {
        const employee = {
            name: name,
            personalNumber: name.length
        };
        console.log(`Name: ${employee.name} - Personal Number: ${employee.personalNumber}`);
    }
}

employeesInfo([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);