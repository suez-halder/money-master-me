function inputField(elementId){
    const inputFieldStringId = document.getElementById(elementId);
    const inputFieldString = inputFieldStringId.value;
    const inputField = parseFloat(inputFieldString); 
    if(inputFieldStringId.value < 0 || isNaN(inputFieldStringId.value)){
        return alert('Please provide a valid number.')
    }
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
    if(calculateTotalExpenses > incomeField){
        return alert('Cut your coat according to your clothes.')
    }
    innerText('expenses-text', calculateTotalExpenses);

    const calculateBalance = incomeField - calculateTotalExpenses;
    return calculateBalance;
    
}