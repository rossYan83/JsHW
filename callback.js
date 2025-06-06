


const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

function countItems(array, condition){
    let count = 0;
    for (const element of array) {
        if(condition(element)){
            count ++
        }
       
    }
    return count
}

console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));


//////////////////////////////////////////////

// Повинно показати помилку


const calculate = (a, b, operation) => operation(a, b)

const add = (a, b) => a + b;
const subtract = (a, b) =>  a - b;

const multiply = (a, b) => {
    return a * b
};
const divide = (a, b) => {
    if(b ===0){
        console.error("Cannot be 0")
    }
    return a / b
}

console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку


function repeatMessage(times, messageCreator){
    for (let i = 0; i < times; i++) {
        messageCreator(i)
    }
}

repeatMessage(3, (i) => {
  console.log(`Simple message ${i}`);
});


