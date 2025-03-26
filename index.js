const age = 15;
console.log(age);

const name = "Rostyslav Yanikin";
console.log(name);

const isStudent = true;
console.log(isStudent);

const myString = "Learn from yesterday, live for today, hope for tomorrow. ..."
console.log(myString);

let myNumber = 99;
myNumber += 10;
console.log(myNumber);

const myNull = null;
console.log(myNull);

const userName = window.prompt("Введіть своє ім’я");
window.alert(userName);
console.log("Тип змінної userName:", typeof userName)

const userAnswer = window.confirm( "Ви дійсно хочете покинути сторінку?")
console.log("Відповідь користувача:", userAnswer);

const alertMessage = alert("Увага! Дія може бути небезпечною.");
const userConfirm = confirm("Ви впевнені, що хочете продовжити?")
console.log("Користувач підтвердив дію:", userConfirm);