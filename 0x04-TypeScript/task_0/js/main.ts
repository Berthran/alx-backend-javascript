interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentI: Student = {
	firstName: 'Daniel',
	lastName: 'Dallas',
	age: 23,
	location: 'Dallas Texas',
};

const studentII: Student = {
        firstName: 'John',
        lastName: 'Javid',
        age: 28,
        location: 'India',
};

const studentsList: Student[] = [studentI, studentII];

const table: HTMLTableElement = document.createElement('table');
studentsList.forEach((student) => {
	const row = table.insertRow();
	const nameCell = row.insertCell();
	const locationCell = row.insertCell();
	nameCell.textContent = student.firstName;
	locationCell.textContent = student.location;
});
document.body.appendChild(table);


// const tableBody: HTMLTableSectionElement = document.createElement('tableBody');

// studentsList.forEach((student) => {
// 	const row = document.createElement('tr');

// 	const firstNameCell = document.createElement('td');
// 	firstNameCell.textContent = student.firstName;
// 	row.appendChild(firstNameCell);

// 	const locationCell = document.createElement('td');
// 	locationCell.textContent = student.location;
// 	row.appendChild(locationCell);

// 	tableBody.appendChild(row);
// });

// table.appendChild(tableBody);
// document.body.appendChild(table);

