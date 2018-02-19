console.log('Loaded!');

var element= document.getElementById('main-text');
element.innerHTML="Anand Simmy";

var img= document.getElementById('img');
var marginLeft=0;
function moveLeft() {
    marginLeft=marginLeft+10;
    img.style.marginLeft= marginLeft + 'px'
}
img.onclick = function() {
    var interval= setInterval(moveLeft,100);
};
