const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;


const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

function findBestEmployee(employees){
    let maxTasks = 0;
    let bestEmployee = ""

    for(const employee in employees){
        if(employees[employee] > maxTasks){
            bestEmployee = employees[employee];
        }
    }
    return bestEmployee
}

function countTotalSalary(employees) {
  let totalSalary = 0;
  
  for (const employee in employees) {
    totalSalary += employees[employee];
  }
  
  return totalSalary;
}

function getAllPropValues(arr, prop) {
  const values = [];
  for (const obj of arr) {
    if (prop in obj) {  // Checks if the property exists
      values.push(obj[prop]);
    }
  }
  return values;
}

function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}

const products = [
  { name: 'apple', price: 10, quantity: 5 },
];


console.log(calculateTotalPrice(products, 'apple'));