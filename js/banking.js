function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    //clear the deposit input field 
    inputField.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId,Amount){
    const totalElement = document.getElementById(totalFieldId);
    const previousAmount = parseFloat(totalElement.innerText);
    const newTotal = previousAmount + Amount;
    totalElement.innerText = newTotal;
}

function updateBalance(depositAmount , isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat (previousBalanceText);
   
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
    
}
// handler deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    //    get the amount deposited 
    /* const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value); */
    const depositAmount = getInputValue('deposit-input');

    /* const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = parseFloat(depositTotal.innerText);
    const newDepositTotal = previousDepositAmount + depositAmount;
    depositTotal.innerText = newDepositTotal; */
    updateTotalField('deposit-total',depositAmount);

    // update account balance
   /*  const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat (previousBalanceText);
    const newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText= newBalanceTotal; */
    updateBalance(depositAmount,true);

    /* //clear the deposit input field 
    depositInput.value = ''; */

});

// handle withdraw evenet 
document.getElementById('withdraw-btn').addEventListener('click',function(){
   /*  const witdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = witdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText); */
    const newWithdrawAmount =getInputValue('withdraw-input');

    // set withdraw total 
    /* const withdrawTotal =  document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; */
    updateTotalField('withdraw-total',newWithdrawAmount);
    // update balance 
   /*  const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText= newBalanceTotal; */
    updateBalance(newWithdrawAmount,false)
    // witdrawInput.value = '';
})

