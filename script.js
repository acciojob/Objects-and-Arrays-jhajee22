const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the 'players' array using the 'team' variable
const team = players;

// Create a shallow copy of the 'players' array using the 'team1' variable
const team1 = [...players];

// Create a shallow copy of the 'person' object using the 'cap1' variable
const cap1 = { ...person };

// Testing the changes
console.log("Original players:", players);
console.log("Team:", team);
console.log("Team1:", team1);
console.log("Original person:", person);
console.log("Cap1:", cap1);

// Modifying the 'team' array and 'cap1' object
team.push("Sam");
cap1.name = "Jane";

// Testing changes after modification
console.log("Modified Team:", team);
console.log("Modified Cap1:", cap1);

console.log("Cap1:", cap1);

// Modifying the 'team' array and 'cap1' object
team.push("Sam");
cap1.name = "Jane";

// Testing changes after modification
console.log("Modified Team:", team);
console.log("Modified Cap1:", cap1);
