const array = ["a", "b", "c"];

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(array);

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}

function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}

function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes("spam") || lowerMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

function calculateTotalNumbers() {
  const numbers = [];

  while (true) {
    const input = prompt("Enter a number");

    if (input === null) {
      break;
    }
  }

  const number = parseFloat(input);

  if (isNaN(number)) {
    alert("Input should be a number");
  }

  numbers.push(number);

  if (number.length > 0) {
    let total = 0;

    for (const num of numbers) {
      total += num;
    }
    console.log(`Total sum ${total}`);
    return total;
  }
  else{
    console.log("no numbers input")
    return 0;
  }
}

