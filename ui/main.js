console.log('Loaded!');
var e = document.getElementById('saket');
e.innerHTML='saket the great';

var img = document.getElementById('madi');

var left = 0;

function moveright()
{   
    left = left + 10;
    img.style.moveLeft= left + px;
}
img.onclick = function() {
    var interval = setInterval(moveright,100)
};