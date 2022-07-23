var bal = 20000
var disp =' Welcome, click on any key to start'
var dep = 'Enter Amount to deposit'
var dispw = 'Enter Amount to Withdraw'

function turnon(){
    userBalance.innerText ='Your balance is: ' + bal
    userDetails.innerText = disp
}
function depositMoney(){
    userDetails.innerText = dep
}
function makeTransaction(){
    bal = Number(userInput.value) + bal
    userBalance.innerText = 'Your balance is:' + bal
    userDetails.innerText = disp
    alert("Transaction successful! Please Take your cash")
    // if(){

    // }
}
function retrieve(){
    userDetails.innerText = dispw
    bal = Number(userinput.value) - bal
    userBalance.innerText = 'Your balance is:' - bal

    

}
    