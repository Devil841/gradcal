let person = 1;
let amount = document.getElementById("bill");
let tip = document.getElementById("tip");
let plus = document.getElementById("plus");
let min = document.getElementById("min");
let num = document.getElementById("num");
let result = document.getElementById("result");
let gst = document.getElementById("gst");

function print() {
  result.innerText =
    Number(amount.value) +
    (Number(amount.value) * Number(gst.value)) / 100 +
    (Number(tip.value) * Number(tip.value)) / 100;
}

function print() {
  let result = document.getElementById("result");
  let amount = parseInt(document.getElementById("bill").value);
  result.innerText = amount;
}

plus.onclick = () => {
  amount = parseInt(document.getElementById("bill").value);
  tip = parseInt(document.getElementById("tip").value);
  gst = parseInt(document.getElementById("gst").value);
  console.log(amount);
  person++;
  num.innerText = person;
  result.innerText = Math.floor(
    (amount + (amount * gst) / 100 + amount * (tip / 100)) / person
  );
};

min.onclick = () => {
  if (person > 1) {
    person--;
    num.innerText = person;
    result.innerText = Math.floor(
      (amount + (amount * gst) / 100 + amount * (tip / 100)) / person
    );
  }
};
function print() {
  result.innerText =
    Number(amount.value) +
    (Number(amount.value) * Number(gst.value)) / 100 +
    (Number(tip.value) * Number(tip.value)) / 100;
}
