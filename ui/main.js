

var img= document.getElementById('img');
var marginLeft=0;
function moveLeft() {
    marginLeft=marginLeft+3;
    img.style.marginLeft= marginLeft + 'px'
}
img.onclick = function() {
    var interval= setInterval(moveLeft,50);
};

var counter=0;
var button = document.getElementById('counter');
button.onclick = function(){
    
    
var span = document.getElementById('count');
counter=counter+1;
span.innerHTML= counter.toString();
    
};



