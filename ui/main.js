

var button=document.getElementById('counter');

var counter = 0;
button.onClick =function() {
  
  
  
  
  // Render the varible in correct span;
  
  counter = counter + 1; 
  var span = document.getElementById('count');
    
    span.innerHTMl= counter.toString();
};


