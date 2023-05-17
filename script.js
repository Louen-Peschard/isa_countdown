var curr = new Date;
var date = new Date(curr.setDate(curr.getDate() - curr.getDay()+5));
date.setHours(17,30,00);

function weekend(){
  date = new Date(curr.setDate(curr.getDate() -   curr.getDay()+5));
  date.setHours(17,30,00);
  document.getElementById("title").innerHTML = "Isa-Weekend";
  document.getElementById("cse").classList.remove("button-active");
  document.getElementById("portugal").classList.remove("button-active");
  document.getElementById("weekend").classList.add("button-active");
  
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

function portugal(){
  date = new Date('2023-05-26T00:00:00');
  document.getElementById("title").innerHTML = "Isa-Portugal";
  document.getElementById("weekend").classList.remove("button-active");
  document.getElementById("cse").classList.remove("button-active");
  document.getElementById("portugal").classList.add("button-active");
  
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

function cse(){
  date = new Date('2023-06-30T18:30:00');
  document.getElementById("title").innerHTML = "Soirée CSE";
  document.getElementById("weekend").classList.remove("button-active");
  document.getElementById("portugal").classList.remove("button-active");
  document.getElementById("cse").classList.add("button-active");
  
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

const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults2 = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function end(){
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

