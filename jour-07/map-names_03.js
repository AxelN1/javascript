var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

var shortNames = longNames.map(s => {
	if (s.hasOwnProperty("firstName")) {
		s.name = s.firstName + " " + s.lastName;
		delete s.firstName;
		delete s.lastName;
	}
	return s;
});

console.log(shortNames);
