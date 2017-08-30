var c = ['#E40303', '#FF8C00', '#FFED00', '#008026', '#004DFF', '#750787'];

setInterval(function(){
    animateColor();
    console.log("yes");
},1000);

function animateColor(){
    $('body').animate({
    	backgroundColor: pickColor()
    },1000);
}

function pickColor(){
    var rand = Math.floor(Math.random() * 11);
    if (rand == curcolor){
        pickColor();
    }
    else { 
        curcolor = rand;
        return colors[rand];
    }
}

console.log("yes");