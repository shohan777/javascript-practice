class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposite(balance) {
    if (balance == 0) return;

    this.#balance += balance;
  }

  withdraw(balance) {
    try {
      if (this.#balance <= 0 || this.#balance < balance) {
        throw new Error("Insufficient balance!");
      }
      this.#balance -= balance;
    } catch (err) {
      console.log(err.message);
    }
  }

  getBalance() {
    console.log(`Your current balance is ${this.#balance}`);
  }
}

const person = new BankAccount("Shohan");

person.deposite(50);
person.getBalance();
person.withdraw(300);
person.getBalance();
