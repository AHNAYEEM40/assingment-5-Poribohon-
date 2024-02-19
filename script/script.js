
let count = 0;
const a = document.getElementsByClassName('seats');
for (const seat of a) {
  const seatCount = document.getElementById('count');
  const ticketList = document.getElementById('ticketList');
  const availableSeat = document.getElementById('availableSeat');
  const available = parseInt(availableSeat.innerText);
  seat.addEventListener('click', function (e) {
    const btnText = e.target.innerText;
    count += 1;
    availableSeat.innerText = available - 1;
    seatCount.innerText = count;

    const createList = document.createElement('div');
    createList.innerHTML = `<div class="flex space-x-28 text-xl text-center">
    <p>${btnText}</p>
    <p>Economoy</p>
    <p>BDT 550</p>
  </div>`;
    ticketList.appendChild(createList);
  });
}
