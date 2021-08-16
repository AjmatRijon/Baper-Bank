function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    //clear the deposit input field 
    inputField.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId, Amount) {
    const totalElement = document.getElementById(totalFieldId);
    const previousAmount = parseFloat(totalElement.innerText);
    const newTotal = previousAmount + Amount;
    totalElement.innerText = newTotal;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    return previousBalanceTotal;
}
function updateBalance(Amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal =getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + Amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - Amount;
    }
}
// handler deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
    }
});

// handle withdraw evenet 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount>0 && newWithdrawAmount<currentBalance){
        updateTotalField('withdraw-total', newWithdrawAmount);
    updateBalance(newWithdrawAmount, false);
    }
})