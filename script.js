const billAmount = document.querySelector(".billAmount");
const cashGiven = document.querySelector(".cashGiven");
const firstPart = document.querySelector(".firstPart");
const secondPart = document.querySelector(".secondPart");
const btnCheck = document.querySelector(".btnCheck");
const btnClear = document.querySelector(".btnClear");
const next1 = document.querySelector(".next1");
const noOfNotes = document.querySelectorAll(".notes");
const message = document.querySelector(".output");

const currencies = [2000, 500, 100, 20, 10, 5, 1];

function start() {
  billAmount.value = "";
  cashGiven.value = "";
  btnCheck.style.display = "none";
  cashGiven.style.display = "none";
  secondPart.style.display = "none";
  next1.style.display = "block";
}

function calcNoOfNotes(RemainingAmt) {
  for (let i = 0; i < currencies.length; i++) {
    const Notes = Math.trunc(RemainingAmt / currencies[i]);
    // console.log("Before all: " + currencies[i] + ":" + Notes, RemainingAmt);
    RemainingAmt %= currencies[i];
    noOfNotes[i].innerText = Notes;
    // console.log("After all: " + currencies[i] + ":" + Notes, RemainingAmt);
  }
}

next1.addEventListener("click", function () {
  const bill = billAmount.value;

  if (bill > 0) {
    btnCheck.style.display = "inline";
    cashGiven.style.display = "block";
    next1.style.display = "none";
    secondPart.style.display = "block";
    message.innerText = "";
  } else {
    message.innerText = "Enter a valid bill amount";
  }
});

btnCheck.addEventListener("click", function () {
  const bill = Number(billAmount.value);
  const cash = Number(cashGiven.value);
  if (bill > 0 && cash > 0) {
    if (bill <= cash) {
      const amountToReturn = cash - bill;
      calcNoOfNotes(amountToReturn);
      message.innerText = "";
    } else {
      message.innerText =
        "Cash given is less than the bill amount, do you want to wash some plates 🤨 ?";
    }
  } else {
    message.innerText =
      "I am watching you! Amount cannot be less than zero 😏  enter a valid amount";
  }
});

btnClear.addEventListener("click", function () {
  start();
});

start();
