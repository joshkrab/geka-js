// Calculation of total costs by profession ----------------------------------------------------------------------------------

function calculateTeamFinanceReport(salaries, team) {
	let result = {};

	// Calculation of the total amount of salary by profession
	team.forEach((item) => {
		if (item.specialization in result && item.specialization in salaries) {
			result[item.specialization] += salaries[item.specialization].salary;
		} else if (item.specialization in salaries) {
			result[item.specialization] = salaries[item.specialization].salary;
		}
	});
	// Calculation of the total amount of salary before taxes
	for (let key in result) {
		result[key] = (result[key] / (100 - parseInt(salaries[key].tax))) * 100;
	}
	// Creating structure for output:
	result.Team = 0;
	for (let key in result) {
		result[`totalBudget${key}`] = result[key];
		result.Team += result[key];
		delete result[key];
	}
	// Rounding of calculation results
	for (let key in result) {
		result[key] = Math.floor(result[key]);
	}

	return result;
}

// Examples ---------------------------------------------------------------------------------------------------------------------------
const salaries = {
	Progger: {
		salary: 1000,
		tax: '15%',
	},
	Tester: {
		salary: 1000,
		tax: '10%',
	},
};

const team = [
	{
		name: 'Masha',
		specialization: 'Progger',
	},
	{
		name: 'Vasya',
		specialization: 'Tester',
	},
	{
		name: 'Taras',
		specialization: 'Tester',
	},
];
const financeReport = calculateTeamFinanceReport(salaries, team);
console.log(JSON.stringify(financeReport));

const salaries1 = {
	Manager: { salary: 1000, tax: '10%' },
	Designer: { salary: 600, tax: '30%' },
	Artist: { salary: 1500, tax: '15%' },
};
const team1 = [
	{ name: 'Misha', specialization: 'Manager' },
	{ name: 'Max', specialization: 'Designer' },
	{ name: 'Vova', specialization: 'Designer' },
	{ name: 'Leo', specialization: 'Artist' },
];
const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
console.log(JSON.stringify(financeReport1));

const salaries2 = {
	TeamLead: { salary: 1000, tax: '99%' },
	Architect: { salary: 9000, tax: '34%' },
};
const team2 = [
	{ name: 'Alexander', specialization: 'TeamLead' },
	{ name: 'Gaudi', specialization: 'Architect' },
	{ name: 'Koolhas', specialization: 'Architect' },
	{ name: 'Foster', specialization: 'Architect' },
	{ name: 'Napoleon', specialization: 'General' },
];
const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
console.log(JSON.stringify(financeReport2));
