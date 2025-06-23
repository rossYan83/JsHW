// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
// }

// const{
//     size:{
//         width,
//         height
//     },
//     items:[item1, item2],
//     title = "Menu"
// } = options;

// console.log(title)
// console.log(width)
// console.log(height)

// const rgb = [200,255,100];

// const [red, green, blue] = rgb;

// console.log(red);
// console.log(green);
// console.log(blue);

// const rgb = [200, 255, 100]

// const [red, ...colors] = rgb;

// console.log(colors)

// const rgb = [200, 100, 255];

// const[,,blue] = rgb

const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

const updatedUser = {
  ...user,
  mood: 'happy',
  hobby: 'skydiving',
  premium: false
};

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}


const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};


const account = {
  balance: 0,
  transactions: [],

  generateId: function(){
    return Math.floor(Math.random() * 100)
  },

  createTransaction: function(amount, type) {
    return {
        id: this.generateId,
        amount: amount,
        type: type,
        date: new Date().toISOString
    }
  },

  deposit: function(amount) {
    if(amount <= 0){
        console.error("MUst me more than 0")
    }
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT)
    this.transactions.push(Transaction);
  },

  
  withdraw: function(amount) {
    if(amount <= 0){
        console.error("You cannot withdraw more 0")
        return;
    }
    if(amount > this.balance){
        console.error("Not enough money")
        return;
    }
    this.balance =- amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(Transaction)
  },

  
  getBalance: function() {
    return this.balance
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i++) {
        if(this.transactions[i] === id){
            return Transaction[i]
        }        
    }
    return undefined
  },

  getTransactionTotal: function(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i++) {
        const transaction = this.transactions[i];
        if(transaction.type === type){
            total += transaction.amount
        }
    }
      return total;
  },
};







