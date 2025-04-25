// const celsius = 100;
// const fahrenheit = (celsius * 1.8) + 32;
// console.log(fahrenheit);

// const daysInMonth = 30;

// const hoursInMonth = daysInMonth * 24;
// console.log(hoursInMonth);

// const minutesInMonth = hoursInMonth * 60;
// console.log(minutesInMonth)

// let health = 0;
// health --;
// let energy = 0;
// energy --;

// const totalPrice = 10;
// const discountPrice = totalPrice * 0.9;
// console.log(discountPrice);

// // const floatNumber = 12.78;
// // const roundDown = Maths.floor(floatNumber);
// // console.log(roundDown);

// const floatString = "45.67";
// const parsedFloat = Number.parseFloat(floatString)
// console.log(parsedFloat);

// const intString = "123";
// const parsedInt = Number.parseInt(intString);
// console.log(parsedInt);

// const number = 8;
// const sqrtNumber = Math.sqrt(8);
// console.log(sqrtNumber)

// // const integer = 42;
// // const stringNumber = "256";

// // const convertedInt = parseInt(stringNumber);
// // console.log(convertedInt);

// // const convertedString = integer.toString();
// // console.log(convertedString);

// // const result = 5 + 5 + "5";
// // console.log(result);
// // console.log(typeof result);

// // const email = "rostyslavYan@gmail.com";

// // if (email.includes("@")) {
// //   console.log("Електронна адреса містить символ '@'");
// // } else {
// //   console.log("Електронна адреса не містить символ '@'");
// // }

// // const word1 = "My";
// // const word2 = "name";
// // const word3 = "is";

// // const fullName = word1 + " " + word2 + " " + word3 + " " + "Victor";
// // console.log(fullName);

// // const userName = "Charlie";
// // const payment = 300;
// // alert(`Дякуємо ${userName}, ! До сплати ${payment} гривень`);

// const text1 = "Hello";
// const text2 = "World!";

// if (text1 != "" && text2 != "") {
//   console.log("Обидва поля заповнені");
// } else {
//   console.log("Не всі поля заповнені");
// }

// const num1 = 10;
// const num2 = 20;
// const total = num1 + num2;
// if (total > 10) {
//   console.log("Сума більше 10");
// } else {
//   console.log("Сума менша або дорівнює 10");
// }
// const jsText = "JavaScript is very cool";

// if (jsText.includes("JavaScript")) {
//   console.log("Текст містить 'JavaScript'");
// } else {
//   console.log("Текст не містить 'JavaScript'");
// }

// const num3 = 17;
// if (num3 > 10 && num3 < 20) {
//   console.log("Число більше 10 і менше 20");
// } else {
//   console.log("Число не входить в діапазон від 10 до 20");
// }

const name = "John";
const email = "john@email.com";
const password = "password123";

if (
  name.length >= 3 &&
  email.includes("@") &&
  email.includes(".") &&
  password.length >= 6
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}

const drink = "coffee";

switch (drink) {
  case "coffee":
    console.log("Вам подали каву");
    break;
  case "tea":
    console.log("Вам подали чай");
    break;
  case "juice":
    console.log("Вам подали сік");
    break;
  default:
    console.log("Напій не знайдено");
}

const dayOfWeek = "субота";
dayOfWeek = dayOfWeek.toLowerCase();

switch (dayOfWeek) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    console.log(`Сьогодні ${dayOfWeek} - це робочий день.`);
    break;
  case "субота":
  case "неділя":
    console.log(`Сьогодні ${dayOfWeek} - це вихідний.`);
    break;
  default:
    console.log("Це не схоже на день тижня. Спробуйте ще раз.");
}

const month = 5;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month number. Please enter a number between 1 and 12.");
}

const color = "red";
color = color.toLowerCase();

switch (color) {
  case "red":
    console.log("stop")
    break;
  case "green":
    console.log("go")
    break;
  case "yellow":
    console.log("wait")
    break;
  default:
    console.log("Invalid color. Please enter red, green, or yellow.");
}

const num1 = 5;
const num2 = 10;

const operator = "/";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 !== 0) {
      console.log(num1 / num2);
    }
    else{
      console.log("Division by zero is not allowed.");
    }
}