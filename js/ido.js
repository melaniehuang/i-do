//LOVE IS LOVE, LOVE IS HUMAN, HUMAN IS HUMAN
// 0 1 2 and then 0 1

var words = [
	["Love", "Love"], 
	["Love", "Human"], 
	["Human", "Human"]
];

var count = 0;

setInterval(function(){
	changeWords();
}, 1500);

function changeWords(){
  document.getElementById("firstWord").innerHTML = words[count][0];
  document.getElementById("lastWord").innerHTML = words[count][1];
  count++;
  if (count == 3){
  	count = 0;
  }
};
