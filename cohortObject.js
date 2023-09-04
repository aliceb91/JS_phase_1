const cohort = {
    name: 'May2022',
    id: 1234,
    students: ['Emily', 'Jasper', 'Jess', 'Alice']
}

const checkCohort = (obj) => {
    console.log(`${obj.id} - ${obj.name} - ${obj.students.length} in this cohort`)
    return;
}

console.log(checkCohort(cohort))