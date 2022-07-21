const modal = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');

buttonModals.forEach((item) => {
  item.addEventListener('click', () => {
    modal.style.display = 'flex';
    body.classList.add('noscroll');
  });
});

modal.addEventListener('click', (evt) => {
  const isModal = evt.target.closest('.modal__inner');

  if (!isModal) {
    modal.style.display = 'none';
    body.classList.remove('noscroll');
  };
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
})

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = document.querySelector('.days');
  var hoursSpan = document.querySelector('.hours');
  var minutesSpan = document.querySelector('.minutes');
  var secondsSpan = document.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 621); // for endless timer
initializeClock('countdown', deadline);