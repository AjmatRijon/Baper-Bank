function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value);
    //clear the deposit input field 
    depositInput.value = '';
    return newDepositAmount;
}

// handler deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    //    get the amount deposited 
    /* const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value); */
    //    console.log(depositAmount);
    const depositAmount = getInputValue();

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = parseFloat(depositTotal.innerText);
    const newDepositTotal = previousDepositAmount + depositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat (previousBalanceText);
    const newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText= newBalanceTotal;

    /* //clear the deposit input field 
    depositInput.value = ''; */

});

// handle withdraw evenet 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const witdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = witdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // console.log(withdrawAmountText);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText= newBalanceTotal;
    // clear withdraw input 
    witdrawInput.value = '';
})