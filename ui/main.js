

var button = document.getElementById('counter');

var counter = 0;
button.onClick = function () {
  
  var request = XMLHttpRequest();   // Create a request object
  
  request.onreadystatechange = function () // Capture the response and store it in a variable
  {
      if(request.readyState === XMLHttpRequest.Done)
      {
         if (request.status === 200 ){
             var counter = request.responseText;
                                                                  //take some action
  var span = document.getElementById('count');
    
    span.innerHTML = counter.toString();
         }
          
      }
      
      // if not sone
  };
  
  
  // Render the varible in correct span;
  
 
 //MAke the request
 request.open('GET','http://nayalsaket33.imad.hasura-app.io/counter', true);
 reequest.send(null);
  
};


