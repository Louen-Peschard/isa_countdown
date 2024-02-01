var curr = new Date;
var date = new Date;
date.setHours(17,30,0);
const emojis = [''];
const titleTwo = "Isa-Team F&O"
, dateTwo = new Date('2024-02-16T08:30:00')
, emojisTwo = ['🍻','🎉'];
const titleThree = "GoLive Codifrance"
, dateThree = new Date('2024-04-01T06:00:00')
, emojisThree = ['🏪', '🥂', '🏬'];
const titleFour = "Isa pose tes congés"
, dateFour = new Date('2024-04-01T00:00:00')
, emojisFour = ['💰','✈'];
const titleFive = "Anniversaire Lucie"
, dateFive = new Date('2024-04-26T00:00:00')
, emojisFive = ['🎉','🎂','🎁'];
var titleCustom = localStorage.getItem('title')
, dateCustom = new Date(localStorage.getItem('date'));

function today(){
  date = new Date;
  date.setHours(17,30,0);
  document.getElementById("title").innerHTML = "Isa fin de journée";
  removeActive();
  document.getElementById("today").classList.add("button-active");
  setTimeout(fireChange(emojis), 0);
  setTimeout(fireChange(emojis), 100);
  setTimeout(fireChange(emojis), 200);
}
function weekend(){
  curr = new Date;
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
function buttonFive(){
  date = dateFive;
  document.getElementById("title").innerHTML = titleFive;
  removeActive(); document.getElementById("button-5").classList.add("button-active");
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

  let startDate;
  let diffPercent = 0;
  let bar = document.querySelector(".progress-bar");
  
  if(document.getElementById("title").innerHTML == "Isa fin de journée"){
    document.getElementById("container-bar").style.display = 'flex';
    document.getElementById("text-bar").style.display = 'flex';
    startDate = new Date;
    startDate.setHours(8,30,0);
    diffPercent =((today - startDate) / (date.getTime() - startDate)) * 100;
  if(diffPercent > 100)
    diffPercent = 100;
  bar.style.width = diffPercent + "%";
    document.querySelector(".text-bar").innerHTML = `<p>${Math.round(diffPercent)}%</p>`;
  }
  else if(document.getElementById("title").innerHTML == "Isa-Weekend"){
    document.getElementById("container-bar").style.display = 'flex';
    document.getElementById("text-bar").style.display = 'flex';
    startDate = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    startDate.setHours(8,30,0);
    diffPercent =((today - startDate) / (date - startDate)) * 100;
  if(diffPercent > 100)
    diffPercent = 100;
  bar.style.width = diffPercent + "%";
    document.querySelector(".text-bar").innerHTML = `<p>${Math.round(diffPercent)}%</p>`;
  }
  else if(document.getElementById("title").innerHTML == "Anniversaire Lucie"){
    document.getElementById("container-bar").style.display = 'flex';
    document.getElementById("text-bar").style.display = 'flex';
    startDate = new Date(dateFive);
    startDate.setFullYear(startDate.getFullYear() - 1 );
    startDate.setHours(0,0,0);
    diffPercent = ((today - startDate) / (date - startDate)) * 100;
  if(diffPercent > 100)
    diffPercent = 100;
  bar.style.width = diffPercent + "%";
    document.querySelector(".text-bar").innerHTML = `<p>${Math.round(diffPercent)}%</p>`;
}
  else{
    document.getElementById("container-bar").style.display = 'none';
    document.getElementById("text-bar").style.display = 'none';
  }

  
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
