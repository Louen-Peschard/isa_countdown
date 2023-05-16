var curr = new Date;
var date = new Date(curr.setDate(curr.getDate() - curr.getDay()+4));
date.setHours(17,30,00);

function weekend(){
  date = new Date(curr.setDate(curr.getDate() -   curr.getDay()+4));
  date.setHours(17,30,00);
  document.getElementById("cse").classList.remove("button-active");
  document.getElementById("portugal").classList.remove("button-active");
  document.getElementById("weekend").classList.add("button-active");
}

function portugal(){
  date = new Date('2023-05-26T00:00:00');
  document.getElementById("title").innerHTML = "Isa-Portugal";
  document.getElementById("weekend").classList.remove("button-active");
  document.getElementById("cse").classList.remove("button-active");
  document.getElementById("portugal").classList.add("button-active");
}

function cse(){
  date = new Date('2023-06-30T18:30:00');
  document.getElementById("title").innerHTML = "Soirée CSE";
  document.getElementById("weekend").classList.remove("button-active");
  document.getElementById("portugal").classList.remove("button-active");
  document.getElementById("cse").classList.add("button-active");
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
    document.getElementById("title").innerHTML = "Terminé !!!";
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

