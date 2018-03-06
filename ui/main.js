console.log('Loaded!');
var e = document.getElementById('saket');
e.innerHTML='saket the great';

var img = document.getElementById('madi');

var marginLeft = 0;

function moveright()
{   
    marginLeft = marginLeft + 1;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveright,100);
};