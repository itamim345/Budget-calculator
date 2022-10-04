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

    //calling CalcSaving funtion to Calculating savings amount
    let savingAmount = CalcSaving(savingInput,incomeAmount);
    
    //Calculating Total Expense
    let totalExpenseAmount = foodAmount + rentAmount + othersAmount;

    //Calculating Remaining Available Amount After Expense and savings
    let RemainingAvlAmount = incomeAmount - (totalExpenseAmount+savingAmount);
    
    //Condition to check if user give all input with positive value
    if(incomeAmount && foodAmount && rentAmount && othersAmount && savingInput > 0){
        //Condition if expense is bigger than income
        if((foodAmount+rentAmount+othersAmount) <= incomeAmount){
            //Condition if  user has not enough money to save!
            if((incomeAmount-totalExpenseAmount) > savingAmount){
                // Replacing Expense Amount to HTML
                totalExpenseBlock.innerText = totalExpenseAmount;

                //Replacing Savings Amount To HTML
                saveAmountBlock.innerText = savingAmount;

                //Replacing Remaining avl Amount to HTML 
                remainingAmountBlock.innerText = RemainingAvlAmount;
            }else {
                alert("Your have not money to save!")
            }
        }else {
            alert("Your Expenses is more than your income!")
        }
    }else {
        alert("Fill up all filled with valid input!")
    }
    
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

