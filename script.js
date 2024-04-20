// Define the initial balance and transaction history array
let balance = 0;
let transactionHistory = [];
// Get the necessary DOM elements
const balanceEl = document.getElementById('balance');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const transactionHistoryEl = document.getElementById('transaction-history');
// Define the functions for updating the balance and transaction history
const updateBalance = () => {
 balanceEl.textContent = balance.toFixed(2);
};
const updateTransactionHistory = () => {
 transactionHistoryEl.innerHTML = transactionHistory
   .map((transaction) => `<li>${transaction.type}: ${transaction.amount.toFixed(2)}</li>`)
   .join('');
};
// Define the functions for depositing and withdrawing money
const deposit = (amount) => {
 balance += amount;
 transactionHistory.push({ type: 'Deposit', amount });
 updateBalance();
 updateTransactionHistory();
};
const withdraw = (amount) => {
 balance -= amount;
 transactionHistory.push({ type: 'Withdrawal', amount });
 updateBalance();
 updateTransactionHistory();
};
// Add event listeners to the deposit and withdraw buttons
depositBtn.addEventListener('click', () => {
 const amount = parseFloat(prompt('Enter the deposit amount:'));
 if (isNaN(amount)) return;
 deposit(amount);
});
withdrawBtn.addEventListener('click', () => {
 const amount = parseFloat(prompt('Enter the withdrawal amount:'));
 if (isNaN(amount)) return;
 if (amount > balance) {
   alert('Insufficient funds!');
   return;
 }
 withdraw(amount);
});