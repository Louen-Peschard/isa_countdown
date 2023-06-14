var curr = new Date;
var date = new Date(curr.setDate(curr.getDate() - curr.getDay()+5));
date.setHours(17,30,00);
const titleTwo = "Marche des fiertés (Rennes)";
const dateTwo = new Date('2023-06-17T13:00:00');
const titleThree = "Soirée CSE";
const dateThree = new Date('2023-06-30T18:30:00');
const titleFour = "Anniversaire Lucie";
const dateFour = new Date('2024-04-26T00:00:00');
var titleCustom = localStorage.getItem('title');
var dateCustom = new Date(localStorage.getItem('date'));
  
function weekend(){
  date = new Date(curr.setDate(curr.getDate() -   curr.getDay()+5));
  date.setHours(17,30,00);
  document.getElementById("title").innerHTML = "Isa-Weekend";
  removeActive();
document.getElementById("weekend").classList.add("button-active");
  fireChange();
}

function buttonTwo(){
  date = dateTwo;
  document.getElementById("title").innerHTML = titleTwo;
  removeActive(); document.getElementById("button-2").classList.add("button-active");
  
  fireChange();
}

function buttonThree(){
  date = dateThree;
  document.getElementById("title").innerHTML = titleThree;
  removeActive(); document.getElementById("button-3").classList.add("button-active");
  fireChange();
}
function buttonFour(){
  date = dateFour;
  document.getElementById("title").innerHTML = titleFour;
  removeActive(); document.getElementById("button-4").classList.add("button-active");
  fireChange();
}

function buttonCustom(){
  removeActive();
  document.getElementById("div-custom").style.display = 'block';
  if(dateCustom == '')
    date = today
  date = dateCustom;
  document.getElementById("title").innerHTML = titleCustom;
  document.getElementById("button-custom").classList.add("button-active");
  fireChange();
}

// countdownf48322
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  diff = date.getTime() - today;

  if(diff < 0){
    diff = today - today;
    end();
  }
  
  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>jours</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>heures</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>secondes</div> \
</div>";

}, 1000);

const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}
function end(){
const duration = 5 * 1000,
  animationEnd = Date.now() + duration,
  defaults2 = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}


  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults2, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults2, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

function fireChange(){
  fire(0.25, {
  spread: 26,
  startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

function removeActive(){
  document.getElementById("div-custom").style.display = 'none';
  var allElements = document.querySelectorAll('.button-85');
  allElements.forEach((element) => {
  element.classList.remove("button-active");
});
}

function saveTitle(){
 titleCustom = document.getElementById("custom-title").value;
  localStorage.setItem('title',titleCustom);
  buttonCustom();
}
function saveDate(){
 dateCustom = new Date(document.getElementById("custom-time").value);
  localStorage.setItem('date',dateCustom);
  buttonCustom();
}
