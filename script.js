let person = 1;
let amount = document.getElementById("bill");
let tip = document.getElementById("tip");
let plus = document.getElementById("plus");
let min = document.getElementById("min");
let num = document.getElementById("num");
let result = document.getElementById("result");
let gst = document.getElementById("gst");

const print=()=>{
   result.innerText =
   Math.ceil((Number(amount.value) + (Number(amount.value)*Number(gst.value)/100) + (Number(amount.value) * Number(tip.value) / 100))/person);
}

plus.onclick = () => {
   person++;
   num.innerText = person;
   print();
};

min.onclick = () => {
   if (person > 1) {
      person--;
      num.innerText = person;
      print();
   }
};
