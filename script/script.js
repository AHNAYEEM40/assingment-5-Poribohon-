
let count = 0;
const a = document.getElementsByClassName('seats');
for (const seat of a) {
  const seatCount = document.getElementById('count');
  const ticketList = document.getElementById('ticketList');

//   ticket sets
  const availableSeat = document.getElementById('availableSeat');
  const available = parseInt(availableSeat.innerText);
  seat.addEventListener('click', function (e) {
    const btnText = e.target.innerText;
    count += 1;
    availableSeat.innerText = available -1;
    seatCount.innerText = count;

    const createList = document.createElement('div');
    createList.innerHTML = `<div class="flex space-x-28 text-xl text-center">
    <p>${btnText}</p>
    <p>Economoy</p>
    <p>BDT 550</p>
  </div>`;
    ticketList.appendChild(createList);

    const price =document.getElementById("Price").innerText;

    const totalCost =document.getElementById("total-price").innerText;
    const covertedTotalCost = parseInt(totalCost);
    const sum2 =covertedTotalCost+parseInt(price);
   

    const grantTotal=document.getElementById("Grant-price").innerText;
    const covertedGrantTotalCost=parseInt(grantTotal);
    const sum =covertedGrantTotalCost +parseInt(price);

    
 setInnerText("total-price",sum2)
 setInnerText("Grant-price",sum);

  });
}
function setInnerText(id,value){
    document.getElementById(id).innerText =value;
}

// cupon section
 
// function ApplyCupon(catagory){
//     const ApplyCuponId =document.getElementById("Coupon").innerText;
//     const converApplyButton =ApplyCuponId;

//     if(catagory ==Couple20){
//         setInnerText("Grant-price",converApplyButton - sum2*20/100)
//     }
// }