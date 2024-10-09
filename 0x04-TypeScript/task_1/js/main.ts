// Task 1
interface Teacher {
	readonly firstName: string;		// Modifiable only during execution
	readonly lastName: string;
	fullTimeEmployee: boolean;		// Always defined
	yearsOfExperience?: number;		// Optional attribute
	location: string;				// Always defined
	[key: string]: any;				// Allow any additional attributes
}

// Task 2
interface Directors extends Teacher {
	numberOfReports: number;
}

// Task 3
interface printTeacherFunction {
	(
		firstName: string,		// Argument 1
		lastName: string,		// Argument 2
	)
	: string;					// Return type
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName[0]}. ${lastName}`;
};

// Task 4
interface Constructor {
	firstName: string;
	lastName: string;
}

interface Student {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements Student {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}

const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());     // Output: John