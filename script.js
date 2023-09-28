let billUserInput = document.getElementById("billAmount");
let perecentageTipUserInput = document.getElementById("percentageTip");
let dErrorMessage = document.getElementById("errorMessage");
let tipAmountValue = document.getElementById("tipAmount");
let totalAmountValue = document.getElementById("totalAmount");

function calculatebtn(){
    let billUserInputValue = billUserInput.value;
    let percentageTipValue = perecentageTipUserInput.value;

    if(billUserInputValue ===  ""){
        dErrorMessage.textContent = "Enter a Valid Response."
    }else if(percentageTipValue === ""){
        dErrorMessage.textContent = "Enter a valid Response."
    }else {
        dErrorMessage.textContent ="";

        let billAmountElement = parseInt(billUserInputValue);
        let percentageTipValueElement = parseInt(percentageTipValue);

        let TipGen = (percentageTipValueElement/100) * billAmountElement;
        let TotalBillGen = TipGen + billAmountElement;

        tipAmountValue.value = TipGen;
        totalAmountValue.value = TotalBillGen;
    }

}