interface Teacher {
	readonly firstName: string;		// Modifiable only during execution
	readonly lastName: string;
	fullTimeEmployee: boolean;		// Always defined
	yearsOfExperience?: number;		// Optional attribute
	location: string;				// Always defined
	[key: string]: any;				// Allow any additional attributes
}

// const teacher3: Teacher = {
// 	firstName: 'John',
// 	fullTimeEmployee: false,
// 	lastName: 'Doe',
// 	location: 'London',
// 	contract: false,
//   };
  
// console.log(teacher3);