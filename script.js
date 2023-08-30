var curr = new Date;
var date = new Date(curr.setDate(curr.getDate() - curr.getDay()+5));
date.setHours(17,30,0);
const emojis = [''];
const titleTwo = "Retour du Isa-Friday"
, dateTwo = new Date('2023-09-29T18:00:00')
, emojisTwo = ['🍻','🍷','🍸','🎉'];
const titleThree = "Isagence de Rennes"
, dateThree = new Date('2023-09-18T09:00:00')
, emojisThree = ['🚚', '🏢', '🔑'];
const titleFour = "Anniversaire Lucie"
, dateFour = new Date('2024-04-26T00:00:00')
, emojisFour = ['🎉','🎂','🎁'];
var titleCustom = localStorage.getItem('title')
, dateCustom = new Date(localStorage.getItem('date'));

  
function weekend(){
  date = new Date(curr.setDate(curr.getDate() -   curr.getDay()+5));
  date.setHours(17,30,0);
  document.getElementById("title").innerHTML = "Isa-Weekend";
  removeActive();
document.getElementById("weekend").classList.add("button-active");
setTimeout(fireChange(emojis), 0);
setTimeout(fireChange(emojis), 100);
setTimeout(fireChange(emojis), 200);
}

function buttonTwo(){
  date = dateTwo;
  document.getElementById("title").innerHTML = titleTwo;
  removeActive(); document.getElementById("button-2").classList.add("button-active");
  setTimeout(fireChange(emojisTwo), 0);
  setTimeout(fireChange(emojisTwo), 100);
  setTimeout(fireChange(emojisTwo), 200);
}

function buttonThree(){
  date = dateThree;
  document.getElementById("title").innerHTML = titleThree;
  removeActive(); document.getElementById("button-3").classList.add("button-active");
  setTimeout(fireChange(emojisThree), 0);
  setTimeout(fireChange(emojisThree), 100);
  setTimeout(fireChange(emojisThree), 200);
}

function buttonFour(){
  date = dateFour;
  document.getElementById("title").innerHTML = titleFour;
  removeActive(); document.getElementById("button-4").classList.add("button-active");
  setTimeout(fireChange(emojisFour), 0);
  setTimeout(fireChange(emojisFour), 100);
  setTimeout(fireChange(emojisFour), 200);
}

function buttonCustom(){
  removeActive();
  document.getElementById("div-custom").style.display = 'block';
  if(dateCustom == '')
    date = today
  date = dateCustom;
  document.getElementById("title").innerHTML = titleCustom;
  document.getElementById("button-custom").classList.add("button-active");
  setTimeout(fireChange(), 0);
  setTimeout(fireChange(), 100);
  setTimeout(fireChange(), 200);
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
