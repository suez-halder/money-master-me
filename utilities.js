function inputField(elementId){
    const inputFieldStringId = document.getElementById(elementId);
    const inputFieldString = inputFieldStringId.value;
    const inputField = parseFloat(inputFieldString); 
    return inputField;
}

function innerText(elementId, value){
    const inputTextId = document.getElementById(elementId);
    inputTextId.innerText = value;   
}

function calculateBalance(){
    const incomeField = inputField('income-field');
    const foodField = inputField('food-field');
    const rentField = inputField('rent-field');
    const clothesField = inputField('clothes-field');

    const calculateTotalExpenses = foodField + rentField + clothesField;
    innerText('expenses-text', calculateTotalExpenses);

    const calculateBalance = incomeField - calculateTotalExpenses;
    return calculateBalance;
    
}