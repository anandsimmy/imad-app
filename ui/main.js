

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    var request= new XMLHttpRequest();
    
    request.onreadystatechange= function(){
        if (request.readyState===XMLHttpRequest.DONE)
        if (request.status===200){
            consle.log('User logged in');   
            alert('Logged in successfully');
        }else if(request.status===403){
            alert('Username/password invalid');
        }
        else if(request.status===500){
            alert('Something went wrong on the server');
        }
    };
      var username=document.getElementById('username').value;
      var password=document.getElementById('password').value;
      console.log('username');
      console.log('password');
      request.open('POST','http://anandsimmy7.imad.hasura-app.io/login', true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify({username: username, password: password}));
        
    
    
};


