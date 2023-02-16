document.getElementById('btn-calculate').addEventListener('click', function(){
    innerText('balance-text', calculateBalance());
    
})

document.getElementById('btn-save').addEventListener('click',function(){
    const saveField = inputField('save-field');
    const calculateSaving = saveField * 0.01;
    const incomeField = inputField('income-field');
    const savingAmount = calculateSaving * incomeField;
    innerText('saving-text', savingAmount); 

    const remainingAmount =calculateBalance() - savingAmount;
    innerText('remaining-text', remainingAmount);

})

