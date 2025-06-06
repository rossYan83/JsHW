const bankAccount = {
  ownerName: "John Doe",
  accountNumber: "123456789",
  balance: 1000,

  deposit() {
    const amount = parseFloat(prompt("How much do you want to deposit?"));
    if (amount > 0) {
      this.balance += amount;
      alert(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      alert("Invalid amount!");
    }
  },

  withdraw() {
    const amount = parseFloat(prompt("How much do you want to withdraw?"));
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      alert(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      alert("Invalid amount or not enough funds!");
    }
  },
};

const weather = {
  temperature: "20",
  humidity: "50%",
  windSpeed: "20",

  temperatureCheck() {
    const temp = parseFloat(prompt("What is the temperature?"));
    if (temp < 0) {
      alert("Temperature lower than 0");
      return true;
    } else {
      alert("Temperature is 0 or above");
      return false;
    }
  },
};
weather.temperatureCheck();

const user = {
  name: "Іван",
  email: "ivan@example.com",
  password: "qwerty123",

  login() {
    const inputEmail = String(prompt("What is the email"));
    const inputPassword = String(prompt("What is the password"));
    if (inputEmail === this.email && inputPassword === this.password) {
      alert("Correct email and password");
    } else {
      alert("Your email OR your password is incorrect");
    }
  },
};

const movie = {
    title: "Lord Of The Rings",
    director: "Peter Jackson",
    year: 2002,
    rating: 10,

    isHighRating(){
        return this.rating > 8;
    }
};

console.log("Rating is higher than 8", movie.isHighRating());