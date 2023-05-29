const consumer = document.getElementById("name");
const rrnumber = document.getElementById("rrnumb");
const address = document.getElementById("addr");
const billreadingdate = document.getElementById("BRD");
const oldmeterreading = document.getElementById("OMR");
const currentmeterreading = document.getElementById("CMR");
const arrears = document.getElementById("arre");
const result = document.getElementById("print");
function date() {
  event.preventDefault();
  z = new Date();
  BRDvalue = BRD.value;
  console.log(BRDvalue);
  event.preventDefault();
  let mon = z.getMonth() + 1;
  let da1 = z.getDate();
  let ye = z.getFullYear();
  p = da1 + "/" + mon + "/" + ye;
  console.log(p);
  if (mon < 10) {
    mon = "0" + mon;
  }
  if (da1 < 10) {
    da1 = "0" + da1;
  }
  p = ye + "-" + mon + "-" + da1;
  console.log(p);
  if (BRDvalue > p) {
    alert("The bill date cant be greater than today date");
  }
  usedunits = parseInt(CMR.value - OMR.value);
  if (CMR.value < OMR.value) {
    alert("your current reading is less than old reading");
  }
  console.log(usedunits);
  if (usedunits <= 100) {
    bill = usedunits * 10;
    console.log(bill);
  } else if ((usedunits > 100) & (usedunits <= 200)) {
    bill = usedunits * 15;
    console.log(bill);
  } else if ((usedunits > 200) & (usedunits <= 300)) {
    bill = usedunits * 20;
    console.log(bill);
  } else {
    bill = usedunits * 25;
    console.log(bill);
  }
  if (arrears.value == 0) {
    arrears.value = 0;
  }
  totalbill = bill + parseInt(arrears.value);
  console.log(totalbill);
  a = bill;
  b = totalbill;
  c = parseInt(arrears.value);
  result.innerHTML = `Dear ${consumer.value}<br/> your RR number is ${rrnumber.value}<br/>your address is ${address.value} <br/>your  electricity Bill is ${b} <br/>you have arrears${c}`;
}
