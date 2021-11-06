const billAmount = document.querySelector(".billAmount");
const cashGiven = document.querySelector(".cashGiven");
const btnCheck = document.querySelector(".btnCheck");
const next1 = document.querySelector(".next1");
const noOfNotes = document.querySelectorAll(".notes");

const currencies = [2000, 500, 100, 20, 10, 5, 1];
const bill = 0;
const cash = 0;

btnCheck.style.display = "none";
cashGiven.style.display = "none";

function calcNoOfNotes(RemainingAmt) {
  for (let i = 0; i < currencies.length; i++) {
    const Notes = Math.trunc(RemainingAmt / currencies[i]);
    console.log("Before all: " + currencies[i] + ":" + Notes, RemainingAmt);
    RemainingAmt %= currencies[i];
    noOfNotes[i].innerText = Notes;
    console.log("After all: " + currencies[i] + ":" + Notes, RemainingAmt);
  }
}

next1.addEventListener("click", function () {
  const bill = billAmount.value;
  const cash = cashGiven.value;
  if (bill > 0) {
    btnCheck.style.display = "block";
    cashGiven.style.display = "block";
  } else {
    console.log("Enter a valid bill amount");
  }
});

btnCheck.addEventListener("click", function () {
  const bill = billAmount.value;
  const cash = cashGiven.value;
  if (bill > 0 && cash > 0) {
    if (cash >= bill) {
      let amountToReturn = cash - bill;
      calcNoOfNotes(amountToReturn);
    } else {
      console.log("Cash given is less than Bill, give more");
    }
  } else {
    console.log("Enter valid amounts");
  }
});
