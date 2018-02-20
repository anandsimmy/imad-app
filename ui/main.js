

var img= document.getElementById('img');
var marginLeft=0;
function moveLeft() {
    marginLeft=marginLeft+3;
    img.style.marginLeft= marginLeft + 'px'
}
img.onclick = function() {
    var interval= setInterval(moveLeft,50);
};

var button = document.getElementById('counter');

button.onclick = function () {
    
    var request= new XMLHttpRequest();
    
    request.onreadystatechange= function(){
        if(request.readyState===XMLHttpRequest.DONE)
        if(request.status===200){
             var counter=request.responseText;
             var span = document.getElementById('count');
             span.innerHTML= counter.toString();
    
        }
    }
  request.open('GET','http://http://anandsimmy7.imad.hasura-app.io/', true);
  request.send(null);
   
};



