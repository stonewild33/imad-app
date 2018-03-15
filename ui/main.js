

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

//Submit name

var take = document.getElementById('name');
var name = take.value;
var submit = document.getElementById('submit');
submit.onClick = function(){


// make a request to the server 



//capture the value and replace it

    var names = ['name1','name2','name3','name4','name5',];
    var list = '';
    for (var i=0;i<=name.lenght;i++);{
      list +=   '<li>' + names[i] + '</li>'  ;
      
    }
    
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
};



alert("my name is saket");