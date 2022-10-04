//Selectors
let incomeField = document.getElementById('income');
let foodField = document.getElementById('food');
let rentField = document.getElementById('rent');
let othersField = document.getElementById('others');
let calculateBtn = document.getElementById('calculate');
let totalExpenseBlock = document.getElementById('total-expense');
let avlAmountBlock = document.getElementById('avl-amount');
let savingInputField = document.getElementById('savings-input');
let saveBtn = document.getElementById('save-btn');
let saveAmountBlock = document.getElementById('save-amount');
let remainingAmountBlock = document.getElementById('remaining-amount');

//Event Handler
calculateBtn.addEventListener('click', () => {
    //taking user Income
    let incomeText = incomeField.value;
    let incomeAmount = parseFloat(incomeText);
    // Taking Expenses
    let foodText = foodField.value;
    let foodAmount = parseFloat(foodText);

    let rentText = rentField.value;
    let rentAmount = parseFloat(rentText);

    let ohtersText = othersField.value;
    let othersAmount = parseFloat(ohtersText);

    //Calculating Total Expense
    let totalExpenseAmount = foodAmount + rentAmount + othersAmount;
    
    // Replacing Expense Amount to HTML
    totalExpenseBlock.innerText = totalExpenseAmount;

    //Calculating Available Amount After Expense
    let avlAmount = incomeAmount - totalExpenseAmount;

    //Replacing Avl amount to HTML
    avlAmountBlock.innerText = avlAmount;
})