//Selectors
let incomeField = document.getElementById('income');
let foodField = document.getElementById('food');
let rentField = document.getElementById('rent');
let othersField = document.getElementById('others');
let calculateBtn = document.getElementById('calculate');
let savingInputField = document.getElementById('savings-input');
let totalExpenseBlock = document.getElementById('total-expense');
let saveAmountBlock = document.getElementById('save-amount');
let remainingAmountBlock = document.getElementById('remaining-amount');
let clearBtn = document.getElementById('clear');

//Funtion to get Input Value
function getInput(inputId){
    let inputText = document.getElementById(inputId).value;
    let inputAmount = parseFloat(inputText);
    return inputAmount;
}

//Function to calculate Savings
function CalcSaving(userInput,totalIncome){
    return (userInput*totalIncome)/100
}

//Event Handler for Calculate Button
calculateBtn.addEventListener('click', () => {
    //taking user Income
    let incomeAmount = getInput('income');
    // Taking Expenses
    let foodAmount = getInput('food')

    let rentAmount = getInput('rent')

    let othersAmount = getInput('others')
    
    //Taking Savings percent (%)
    let savingInput = getInput('savings-input')
    //calling CalcSaving funtion to do the operation to get the savings amount
    let savingAmount = CalcSaving(savingInput,incomeAmount);
    
    //Calculating Total Expense
    let totalExpenseAmount = foodAmount + rentAmount + othersAmount;
            
    // Replacing Expense Amount to HTML
    totalExpenseBlock.innerText = totalExpenseAmount;

    //Replacing Savings Amount To HTML
    saveAmountBlock.innerText = savingAmount;

    //Calculating Remaining Available Amount After Expense and savings
    let RemainingAvlAmount = incomeAmount - (totalExpenseAmount+savingAmount);

    //Replacing Remaining avl Amount to HTML 
    remainingAmountBlock.innerText = RemainingAvlAmount;
})

//Event Handler to Clear all the field and amount blocks
clearBtn.addEventListener('click', () => {
    //clearing all the field
    incomeField.value = "";
    foodField.value = "";
    rentField.value = "";
    othersField.value = "";
    savingInputField.value = "";
    // clearing all the amount block
    totalExpenseBlock.innerText = "000";
    saveAmountBlock.innerText = "000";
    remainingAmountBlock.innerText = "000";
})

