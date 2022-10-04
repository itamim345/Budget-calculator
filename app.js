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

//Function to calculate Savings
function CalcSaving(userInput,totalIncome){
    return (userInput*totalIncome)/100
}
//Event Handler for Calculate Button
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


    //Event Handler to get Saving Amount
saveBtn.addEventListener('click', () => {
    let savingsInputText = savingInputField.value;
    let savingInput = parseFloat(savingsInputText);
    //calling CalcSaving funtion to do the operation
    let savingAmount = CalcSaving(savingInput,incomeAmount);

    //Replacing Savings Amount To HTML
    saveAmountBlock.innerText = savingAmount;

    //Calculating Remaining Avl Amount
    let RemainingAvlAmount = avlAmount - savingAmount;

    //Replacing Remaining avl Amount to HTML 
    remainingAmountBlock.innerText = RemainingAvlAmount;
})
})
