const users = [
  { name: "Alice", bankBalance: 1500.75, numFriends: 12, friends: ["Bob", "Charlie", "Eve"], skills: ["JavaScript", "Python", "CSS"] },
  { name: "Bob", bankBalance: 3200.50, numFriends: 8, friends: ["Alice", "Diana"], skills: ["Python", "Java", "HTML"] },
  { name: "Charlie", bankBalance: 450.25, numFriends: 15, friends: ["Eve", "Diana"], skills: ["JavaScript", "SQL", "CSS"] },
  { name: "Diana", bankBalance: 7800.00, numFriends: 6, friends: ["Bob", "Charlie"], skills: ["HTML", "CSS", "Python"] },
  { name: "Eve", bankBalance: 250.30, numFriends: 20, friends: ["Alice", "Charlie"], skills: ["Java", "JavaScript", "SQL"] }
];


console.log([...users].reduce((total, users) => total + users.bankBalance, 0));


function findUsersWithFriend(friendName){
    return users
        .filter(user => user.friends.includes(friendName))
        .map(user => user.name)
}

const result = findUsersWithFriend("Charlie");
console.log(result);

const sortedNamesAsc = users
  .sort((a, b) => a.numFriends - b.numFriends)
  .map(user => user.name);

console.log(sortedNamesAsc);

const newUSers = [...users];

const getSortedUniqueSkills = [...new Set(
  users.map(user => user.skills).reduce((allSkills, skills) => [...allSkills, ...skills], [])
)].sort();

console.log(getSortedUniqueSkills)
