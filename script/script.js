const seats =document.getElementsByClassName('seats');
let count = 0;
let seatLeft = 40;
let totalPrice = 0;
for( const seat of seats){
    seat.addEventListener('click',function(e){
        count +=1;
        seatLeft -=1;
        totalPrice = totalPrice +500;
        document.getElementById('selected-seat').innerText = count;
        document.getElementById('seat-left').innerText = seatLeft;
       
        e.target.style.background ='green'
        e.target.style.color ='white'


        if (count > 0 || count < 4) {
            document.getElementById('apply-btn').removeAttribute('disabled');
            document.getElementById('success-btn').removeAttribute('disabled');
            
        }
        if (count >= 4) {
            seat.setAttribute('disabled', seat)
        }

        const ticketList = document.getElementById('ticketList');
        const ul = document.createElement('ul')
        const createdSet = document.createElement('li');
        const Economy = document.createElement('li');
        const createdPrice = document.createElement('li');



        createdSet.innerText = seat.innerText;
        Economy.innerText = 'Economoy';
        createdPrice.innerText = '500';

        ul.appendChild(createdSet);
        ul.appendChild(Economy);
        ul.appendChild(createdPrice);
        ticketList.appendChild(ul);
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('grand-total').innerText = totalPrice;
        e.target.setAttribute("disabled", true);

    })

}
const phn = document.getElementById('phone-number').value;
console.log(phn)

document.getElementById('apply-btn').addEventListener('click', function () {
    const coupon = document.getElementById('coupon-one').innerText;
    if (coupon === 'Couple 20') {

        const grandMoney = totalPrice - (totalPrice * 20 / 100);
        document.getElementById('grand-total').innerText = grandMoney;
        totalPrice += 500;

    }
    else if (coupon === "NEW15") {
        const grandMoney = totalPrice - (totalPrice * 15 / 100);
        document.getElementById('grand-total').innerText = grandMoney;
        totalPrice += 500;

    }
    else {
        alert('invalid coupon');
        return;
    }
    document.getElementById('btn-hide').classList.add('hidden')
})
const showModal = (e) => {
    const number = document.getElementById('phone-number')
    if (number.value.length > 10) {
        my_modal_1.showModal();

    } else {
        return alert('Mia Age Right Number Likhen ');
    }
};